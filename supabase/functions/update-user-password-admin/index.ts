import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'

Deno.serve(async (req) => {
  // Manejo de CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY')!

    // 1. Verificar autorización del que llama (debe ser admin)
    const authHeader = req.headers.get('Authorization')
    if (!authHeader) throw new Error('Missing Authorization header')

    const anonClient = createClient(supabaseUrl, supabaseAnonKey, { global: { headers: { Authorization: authHeader } } })
    const { data: { user: caller }, error: userError } = await anonClient.auth.getUser()
    
    if (userError || !caller) throw new Error('Unauthorized')

    // Crear cliente admin para verificar rol y actualizar contraseña
    const serviceClient = createClient(supabaseUrl, supabaseServiceRoleKey)
    
    const { data: adminData } = await serviceClient.from('users').select('is_admin').eq('id', caller.id).single()
    if (!adminData?.is_admin) throw new Error('Permission denied: Not an administrator.')

    // 2. Obtener datos del cuerpo de la petición
    const { target_user_id, new_password } = await req.json()

    if (!target_user_id || !new_password) {
      throw new Error('target_user_id y new_password son requeridos')
    }
    if (new_password.length < 6) {
        throw new Error('La contraseña debe tener al menos 6 caracteres.')
    }

    // 3. Actualizar la contraseña del usuario usando el API de admin
    const { data: updateData, error: updateError } = await serviceClient.auth.admin.updateUserById(
      target_user_id,
      { password: new_password }
    )

    if (updateError) throw new Error(`Fallo al actualizar contraseña: ${updateError.message}`)

    // 4. Devolver respuesta exitosa
    return new Response(JSON.stringify({ success: true, user: updateData.user }), {
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