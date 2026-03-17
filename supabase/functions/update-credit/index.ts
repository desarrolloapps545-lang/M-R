import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'

Deno.serve(async (req) => {
  // Esto es necesario para las llamadas desde el navegador (CORS).
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Obtener el ID del crédito y las actualizaciones del cuerpo de la solicitud.
    const { credit_id, updates } = await req.json()

    if (!credit_id) {
      throw new Error('El ID del crédito (credit_id) es requerido.')
    }

    // Actualizar el crédito en la tabla 'debtors'.
    const { error } = await supabase
      .from('debtors')
      .update({...updates})
      .eq('debtor_number', credit_id) // <-- LÍNEA CORREGIDA

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