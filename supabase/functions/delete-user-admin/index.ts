// supabase/functions/delete-user-admin/index.ts
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'

Deno.serve(async (req) => {
  console.log("delete-user-admin function invoked.");
  // Manejar la solicitud de pre-vuelo CORS
  if (req.method === 'OPTIONS') {
    console.log("Handling OPTIONS request.");
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // 1. Get and validate environment variables
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY');
    const supabaseServiceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

    if (!supabaseUrl || !supabaseAnonKey || !supabaseServiceRoleKey) {
      console.error('Missing one or more Supabase environment variables.');
      return new Response(JSON.stringify({ error: 'Server configuration error.' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      });
    }
    console.log('Environment variables loaded.');

    // 2. Create service client for admin operations
    const serviceClient = createClient(supabaseUrl, supabaseServiceRoleKey);
    console.log('Service client created.');

    // 3. Get and validate Authorization header
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      console.error('Authorization header is missing.');
      return new Response(JSON.stringify({ error: 'Authorization header is required.' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 401,
      });
    }
    console.log('Authorization header found.');

    // 4. Get the user making the request from the token
    const { data: { user }, error: userError } = await createClient(
      supabaseUrl,
      supabaseAnonKey,
      { global: { headers: { Authorization: authHeader } } }
    ).auth.getUser();

    if (userError) {
      console.error('Error getting user from token:', userError);
      return new Response(JSON.stringify({ error: 'Invalid or expired token.', details: userError.message }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 401,
      });
    }
    console.log('Request initiated by user:', user.id);

    // 5. Security Check: Verify the user is an admin
    console.log(`Checking admin status for user ${user.id}...`);
    const { data: adminData, error: adminError } = await serviceClient
      .from('users')
      .select('is_admin')
      .eq('id', user.id)
      .single();

    if (adminError) {
        console.error("Error checking admin status:", adminError);
        throw new Error(`Database error while verifying permissions: ${adminError.message}`);
    }

    if (adminError || !adminData || !adminData.is_admin) {
      console.warn(`Permission denied for user ${user.id}. is_admin is false or record not found.`);
      return new Response(JSON.stringify({ error: 'Permission denied: Not an administrator.' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 403,
      });
    }
    console.log(`User ${user.id} is an admin. Proceeding...`);

    // 6. Get the target user ID from the request body
    const body = await req.json();
    const { target_user_id } = body;
    console.log("Request body:", body);

    if (!target_user_id) {
      console.error("target_user_id is missing from request body.");
      throw new Error('target_user_id is required in the request body.');
    }
    console.log(`Attempting to delete user with ID: ${target_user_id}`);

    // 7. Perform the deletion using the service client
    const { data: deletionData, error: deletionError } = await serviceClient.auth.admin.deleteUser(
      target_user_id
    );

    if (deletionError) {
      console.error("Supabase admin API deletion error:", JSON.stringify(deletionError, null, 2));
      // Lanza un error más detallado para que el catch lo capture.
      throw new Error(`Error from database during deletion: ${deletionError.message}.`);
    }

    // 8. Return a success response
    console.log("User deleted successfully:", JSON.stringify(deletionData, null, 2));
    return new Response(JSON.stringify({ message: 'User deleted successfully', data: deletionData }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });

  } catch (err) {
    console.error('Caught a top-level error in the function:', err)
    // Devuelve un objeto de error más completo al cliente.
    const errorResponse = {
      message: err.message,
      stack: err.stack, // El stack trace puede ser útil para depurar
      name: err.name,
    };
    return new Response(JSON.stringify({ error: errorResponse }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    })
  }
})
