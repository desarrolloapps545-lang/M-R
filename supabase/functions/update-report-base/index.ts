import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { report_id, collection, type, new_value } = await req.json()
    const updates: any = {}

    if (type === 'initial') {
        const { data: record, error: fetchError } = await supabase.from(collection).select('*').eq('id', report_id).single()
        if (fetchError) throw fetchError

        const cobros = parseFloat(record.payments_report) || 0
        const creditos = parseFloat(record.credits_report) || 0
        const gastos = parseFloat(record.expense_report) || parseFloat(record.expenses_report) || 0
        const newFinal = (new_value + cobros) - (creditos + gastos)
        
        updates.initial_base = new_value
        updates.final_base = newFinal
        updates.og_final_base = newFinal
    } else {
        updates.final_base = new_value
    }

    const { error } = await supabase.from(collection).update(updates).eq('id', report_id)
    if (error) throw error

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
