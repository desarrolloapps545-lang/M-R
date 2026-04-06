import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { expense_id, collection, updates, parent_id, parent_collection } = await req.json()

    // 1. Actualizar detalle de gasto
    const { error: childError } = await supabase.from(collection).update(updates).eq('id', expense_id)
    if (childError) throw childError

    // 2. Recalcular reporte padre
    const { data: parent, error: parentFetchError } = await supabase
        .from(parent_collection)
        .select('*')
        .eq('id', parent_id)
        .single()

    if (parentFetchError) throw parentFetchError

    const initial = parseFloat(parent.initial_base) || 0
    const cobros = parseFloat(parent.payments_report) || 0
    const creditos = parseFloat(parent.credits_report) || 0
    const newTotalExpense = parseFloat(updates.total_expenses) || 0
    
    const newFinal = (initial + cobros) - (creditos + newTotalExpense)

    const { error: parentUpdateError } = await supabase
        .from(parent_collection)
        .update({
            expense_report: newTotalExpense, // Ajustar nombre de campo si es expenses_report
            final_base: newFinal,
            og_final_base: newFinal
        })
        .eq('id', parent_id)

    if (parentUpdateError) throw parentUpdateError

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})
