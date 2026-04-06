import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { client_id, updates } = await req.json()

    // 1. Obtener datos antiguos para la cascada
    const { data: oldClient, error: fetchError } = await supabase
      .from('clients')
      .select('cedula')
      .eq('cedula', client_id)
      .single()

    if (fetchError || !oldClient) throw new Error('Cliente no encontrado')

    const oldCedula = oldClient.cedula

    // 2. Actualizar Cliente
    const { error: updateError } = await supabase
      .from('clients')
      .update(updates)
      .eq('cedula', client_id)

    if (updateError) throw updateError

    // 3. Actualizar en Cascada (Debtors, Payments, Extras)
    // Nota: Se usa Promise.all para concurrencia, pero si falla uno, podría quedar inconsistente.
    // En un entorno ideal SQL, esto sería una transacción BEGIN/COMMIT.
    
    const debtorUpdates = {
        name: updates.name,
        cedula: updates.cedula,
        phone: updates.phone,
        address: updates.address,
        municipality: updates.municipality,
        asesor_name: updates.asesor_name
    }
    
    const paymentUpdates = {
        debtor_name: updates.name,
        cedula: updates.cedula,
        phone: updates.phone,
        address: updates.address,
        municipality: updates.municipality,
        user_name: updates.asesor_name
    }

    await Promise.all([
        supabase.from('debtors').update(debtorUpdates).eq('cedula', oldCedula),
        supabase.from('payments').update(paymentUpdates).eq('cedula', oldCedula),
        supabase.from('extras').update({ cedula: updates.cedula }).eq('cedula', oldCedula)
    ])

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
