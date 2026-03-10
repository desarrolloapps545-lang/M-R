import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'

/**
 * Calcula el nombre del día de la semana en español a partir de una fecha en formato 'YYYY-MM-DD'.
 * Esta función es robusta contra problemas de zona horaria al interpretar la fecha como local.
 * @param dateString La fecha en formato 'YYYY-MM-DD'.
 * @returns El nombre del día ('Lunes', 'Martes', etc.).
 */
function getDayName(dateString: string): string {
  try {
    // Separar en partes para evitar problemas de zona horaria de new Date('YYYY-MM-DD')
    const parts = dateString.split('-').map(Number);
    // new Date(año, mes (0-11), día) crea una fecha en la zona horaria local del servidor.
    const date = new Date(parts[0], parts[1] - 1, parts[2]);
    if (isNaN(date.getTime())) throw new Error('Valor de fecha inválido.');

    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    return days[date.getDay()];
  } catch (e) {
    throw new Error(`Error al procesar la fecha '${dateString}': ${e.message}`);
  }
}

Deno.serve(async (req) => {
  // Manejo de CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // 1. Obtener y validar los datos del cuerpo de la solicitud.
    const {
      payment_number,
      debtor_number,
      old_amount,
      new_amount,
      new_method,
      new_date, // Opcional: 'YYYY-MM-DD'
    } = await req.json()

    // Validación robusta de parámetros.
    if (
      !payment_number ||
      !debtor_number ||
      old_amount === undefined ||
      new_amount === undefined ||
      !new_method
    ) {
      throw new Error('Faltan parámetros requeridos: payment_number, debtor_number, old_amount, new_amount, o new_method.')
    }

    const new_amount_float = parseFloat(new_amount)
    const old_amount_float = parseFloat(old_amount)

    if (isNaN(new_amount_float) || isNaN(old_amount_float)) {
      throw new Error('Los montos (nuevo y anterior) deben ser números válidos.')
    }

    // 2. Determinar la fecha a usar.
    let formatted_date: string;
    let new_date_iso: string;

    if (new_date && /^\d{4}-\d{2}-\d{2}$/.test(new_date)) {
      // Usar la fecha proporcionada por el cliente.
      new_date_iso = new_date;
      const [y, m, d] = new_date.split('-');
      formatted_date = `${d}-${m}-${y}`; // Formato DD-MM-YYYY para la BD
    } else {
      // Si no se proporciona fecha, generar la actual (comportamiento anterior).
      const now = new Date();
      const offset = -5; // Colombia UTC-5
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const colTime = new Date(utc + (3600000 * offset));
      
      const year = colTime.getFullYear();
      const month = String(colTime.getMonth() + 1).padStart(2, '0');
      const day = String(colTime.getDate()).padStart(2, '0');
      
      new_date_iso = `${year}-${month}-${day}`; // YYYY-MM-DD para getDayName
      formatted_date = `${day}-${month}-${year}`; // DD-MM-YYYY para la BD
    }

    // 3. Calcular el día de la semana.
    const new_day = getDayName(new_date_iso);

    // 4. Llamar a la función de base de datos (RPC) para una actualización atómica.
    const { error: rpcError } = await supabase.rpc('update_payment_and_balance', {
      p_payment_number: payment_number,
      p_debtor_number: debtor_number,
      p_old_amount: old_amount_float,
      p_new_amount: new_amount_float,
      p_new_date: formatted_date, // Fecha generada en servidor
      p_new_day: new_day, // Se pasa el día calculado
      p_new_method: new_method,
    })

    if (rpcError) {
      // La función de la base de datos lanzará una excepción en caso de fallo, que se captura aquí.
      console.error('Error en la llamada RPC a la base de datos:', rpcError)
      throw new Error(`Error en la base de datos: ${rpcError.message}`)
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (err) {
    // Loguear el error completo en el servidor para una mejor depuración.
    console.error('Error crítico en la función update-payment:', err)
    return new Response(JSON.stringify({ error: err.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})