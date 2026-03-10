import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { rows } = await req.json()

    if (!rows || !Array.isArray(rows)) throw new Error('Datos inválidos')

    // Get latest numbers to ensure sequential IDs
    const { data: maxDebtorData } = await supabase
      .from('debtors')
      .select('debtor_number')
      .order('debtor_number', { ascending: false })
      .limit(1)
      .single()

    const { data: maxPaymentData } = await supabase
      .from('payments')
      .select('payment_number')
      .order('payment_number', { ascending: false })
      .limit(1)
      .single()

    let nextDebtorNum = (maxDebtorData?.debtor_number || 0) + 1
    let nextPaymentNum = (maxPaymentData?.payment_number || 0) + 1

    // 1. Upsert Clients
    const clientsMap = new Map()
    rows.forEach((r: any) => {
        if (r.cedula) {
            clientsMap.set(r.cedula, {
                cedula: r.cedula,
                name: r.nombre,
                phone: r.telefono,
                address: r.direccion,
                municipality: r.municipio,
                asesor_name: r.asesor,
                payment_term: [r.tipoPago],
                total_recaudo: r.recaudoTotal,
                imported: true
            })
        }
    })
    
    const clientsToUpsert = Array.from(clientsMap.values())
    if (clientsToUpsert.length > 0) {
        const { error: clientError } = await supabase.from('clients').upsert(clientsToUpsert, { onConflict: 'cedula' })
        if (clientError) throw clientError
    }

    // 2. Insert Debtors (Credits)
    const debtorsToInsert: any[] = []
    const cedulasWithNewCredit = new Set()

    rows.forEach((r: any) => {
        if (r.creditoNuevo > 0 || r.represte > 0) {
            const isNew = r.creditoNuevo > 0
            const saleValue = isNew ? r.creditoNuevo : r.represte
            
            debtorsToInsert.push({
                debtor_number: nextDebtorNum, // Assign sequential number
                cedula: r.cedula,
                name: r.nombre,
                phone: r.telefono,
                address: r.direccion,
                municipality: r.municipio,
                asesor_name: r.asesor,
                credit_type: isNew ? 'Nuevo' : 'Represte',
                balance: r.saldo,
                sale_value: saleValue,
                interests: r.interests,
                valor_cuota: r.valorCuota,
                number_of_payments: r.nroCuotas,
                remaining_payments: r.nroCuotas,
                payment_term: [r.tipoPago],
                imported: true,
                created_at: r.fechaPrestamo || new Date().toISOString(), // Use FECHA PRESTAMO or now
                sale_date: r.fechaPrestamoClean
            })
            cedulasWithNewCredit.add(r.cedula)
            nextDebtorNum++ // Increment for the next one
        }
    })

    let createdDebtors: any[] = []
    if (debtorsToInsert.length > 0) {
        const { data, error: debtorError } = await supabase
            .from('debtors')
            .insert(debtorsToInsert)
            .select('debtor_number, cedula') // Select number and cedula for linking
        if (debtorError) throw debtorError
        createdDebtors = data
    }

    // Create a map for quick lookup: cedula -> debtor_number
    const newDebtorMap = new Map()
    createdDebtors.forEach(d => newDebtorMap.set(d.cedula, d.debtor_number))

    // --- ENHANCED PAYMENT LINKING ---
    // 1. Get all cedulas that have a payment in the import file.
    const cedulasWithPayment = rows
      .filter((r: any) => r.abono > 0 && r.cedula)
      .map((r: any) => r.cedula)
    const uniqueCedulas = [...new Set(cedulasWithPayment)]

    // 2. Fetch all existing debtors for these cedulas to find the most recent credit.
    let existingDebtors: any[] = []
    if (uniqueCedulas.length > 0) {
        const { data } = await supabase
          .from('debtors')
          .select('cedula, debtor_number, created_at')
          .in('cedula', uniqueCedulas)
        existingDebtors = data || []
    }

    // 3. Create a map of cedula -> most recent debtor_number for existing credits.
    const existingDebtorMap = new Map()
    if (existingDebtors) {
      existingDebtors.forEach(d => {
        const existing = existingDebtorMap.get(d.cedula)
        if (!existing || new Date(d.created_at) > new Date(existing.created_at)) {
          existingDebtorMap.set(d.cedula, d.debtor_number)
        }
      })
    }

    // 3. Insert Payments
    const paymentsToInsert: any[] = []
    
    rows.forEach((r: any) => {
        if (r.abono > 0) {
            // Find debtor_number: 1st priority is a new credit from this batch, 2nd is the most recent existing one.
            const debtorNumber = newDebtorMap.get(r.cedula) || existingDebtorMap.get(r.cedula) || null

            let createdAt = r.fechaAbono
            let paymentDate = r.fechaAbonoClean

            if (!createdAt) {
                const now = new Date()
                createdAt = now.toISOString()
                const day = String(now.getUTCDate()).padStart(2, '0')
                const month = String(now.getUTCMonth() + 1).padStart(2, '0')
                const year = now.getUTCFullYear()
                paymentDate = `${day}-${month}-${year}`
            }

            paymentsToInsert.push({
                payment_number: nextPaymentNum, // Assign sequential number
                debtor_number: debtorNumber, // Link using debtor_number
                cedula: r.cedula,
                debtor_name: r.nombre,
                phone: r.telefono,
                valor_cuota: r.valorCuota,
                payment_amount: r.abono,
                payment_date: paymentDate, // Use FECHA ABONO clean date
                municipality: r.municipio,
                user_name: r.asesor,
                created_at: createdAt, // Use FECHA ABONO for timestamp or now
                payment_method: 'Efectivo',
                imported: true
            })
            nextPaymentNum++ // Increment for the next one
        }
    })

    if (paymentsToInsert.length > 0) {
        const { error: payError } = await supabase.from('payments').insert(paymentsToInsert)
        if (payError) throw payError
    }

    return new Response(JSON.stringify({ success: true, count: rows.length }), {
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
