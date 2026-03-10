import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'

Deno.serve(async (req) => {
  // Handle CORS preflight request
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // 1. Inicializar cliente de Supabase usando variables de entorno (más seguro)
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // 2. Calcular la fecha límite (hace 15 minutos)
    const fifteenMinsAgo = new Date(Date.now() - 15 * 60 * 1000).toISOString()

    console.log(`Ejecutando limpieza. Borrando alertas anteriores a: ${fifteenMinsAgo}`)

    // 3. Ejecutar borrado en la tabla alerts_represt
    const { error, count } = await supabase
      .from('alerts_represt')
      .delete({ count: 'exact' }) // Contar cuántos se borran
      .lt('created_at', fifteenMinsAgo) // Filtro: created_at < hace 15 mins

    if (error) {
      console.error('Error borrando alertas:', error)
      return new Response(JSON.stringify({ error: error.message }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      })
    }

    // 4. Responder éxito
    return new Response(
      JSON.stringify({ 
        message: 'Limpieza completada exitosamente', 
        deleted_count: count 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    )

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})
