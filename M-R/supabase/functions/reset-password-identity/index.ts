import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!

    // Crear cliente con rol de servicio para operaciones de admin
    const serviceClient = createClient(supabaseUrl, supabaseServiceRoleKey)

    // 1. Obtener datos del cuerpo de la petición
    const { name, email, role, new_password } = await req.json()

    if (!name || !email || !role || !new_password) {
      throw new Error('Faltan parámetros requeridos (name, email, role, new_password).')
    }
    if (new_password.length < 6) {
      throw new Error('La contraseña debe tener al menos 6 caracteres.')
    }

    // 2. Verificar la identidad del usuario en la tabla 'users'
    // ¡ADVERTENCIA DE SEGURIDAD! Este método de verificación es débil.
    // Se recomienda usar el flujo de recuperación por email de Supabase.
    const { data: userData, error: userError } = await serviceClient
      .from('users')
      .select('id')
      .match({ name: name, email: email, role: role })
      .single()

    if (userError || !userData) {
      console.error('Verification failed:', userError)
      throw new Error('Los datos de identidad no coinciden con ningún usuario registrado.')
    }

    const targetUserId = userData.id

    // 3. Actualizar la contraseña del usuario usando el API de admin
    const { data: updateData, error: updateError } = await serviceClient.auth.admin.updateUserById(
      targetUserId,
      { password: new_password }
    )

    if (updateError) {
      console.error('Password update failed:', updateError)
      throw new Error(`Fallo al actualizar la contraseña: ${updateError.message}`)
    }

    // 4. Devolver respuesta exitosa
    return new Response(JSON.stringify({ success: true, message: 'Contraseña actualizada para el usuario ' + targetUserId }), {
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