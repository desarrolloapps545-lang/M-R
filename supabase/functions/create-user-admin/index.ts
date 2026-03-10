import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'

Deno.serve(async (req) => {
  // Manejo de CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY')!;

    // 1. Verificar Autorización del que llama (Debe ser Admin)
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) throw new Error('Missing Authorization header');

    const anonClient = createClient(supabaseUrl, supabaseAnonKey, { global: { headers: { Authorization: authHeader } } });
    const { data: { user: caller }, error: userError } = await anonClient.auth.getUser();
    
    if (userError || !caller) throw new Error('Unauthorized');

    // Crear cliente admin para verificar rol y crear usuario
    const serviceClient = createClient(supabaseUrl, supabaseServiceRoleKey);
    
    const { data: adminData } = await serviceClient.from('users').select('is_admin').eq('id', caller.id).single();
    if (!adminData?.is_admin) throw new Error('Permission denied: Not an administrator.');

    // 2. Obtener datos del cuerpo
    const { email, password, name, cedula, role, municipios, is_admin } = await req.json();

    if (!email || !password) throw new Error('Email and password are required');

    // 3. Crear Usuario en Auth (Supabase Auth)
    const { data: authData, error: authError } = await serviceClient.auth.admin.createUser({
      email,
      password,
      email_confirm: true, // Confirmar automáticamente
      user_metadata: { name, cedula, role }
    });

    if (authError) throw authError;
    const newUserId = authData.user.id;

    // 4. Insertar/Actualizar datos en tabla pública 'users'
    // Usamos upsert para asegurar que los datos estén sincronizados
    const { error: publicError } = await serviceClient.from('users').upsert({
      id: newUserId,
      email,
      name,
      cedula,
      role,
      assigned_municipality: municipios, // Array de texto
      is_admin: is_admin,
      created_at: new Date().toISOString()
    });

    if (publicError) {
        // Si falla la inserción pública, intentamos borrar el usuario de Auth para no dejar registros huérfanos
        await serviceClient.auth.admin.deleteUser(newUserId);
        throw new Error(`Database error: ${publicError.message}`);
    }

    return new Response(JSON.stringify({ success: true, user: authData.user }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    });
  }
})