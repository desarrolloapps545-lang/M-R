import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { mode, startDate, endDate, user, dept, muni } = await req.json()
    const start = new Date(startDate)
    const end = new Date(endDate)
    const isWeekly = mode === 'weekly'

    // 1. Fetch Debtors
    let debtorsQuery = supabase.from('debtors').select('*')
    
    if (user && user !== 'Todos los Asesores') debtorsQuery = debtorsQuery.eq('asesor_name', user)
    if (muni && muni !== 'Todos los Municipios') debtorsQuery = debtorsQuery.eq('municipality', muni)
    if (dept && (!muni || muni === 'Todos los Municipios')) {
         const { data: deptMunis } = await supabase.from('municipalities').select('municipalities').eq('id', dept).single()
         if (deptMunis && deptMunis.municipalities && deptMunis.municipalities.length > 0) {
             debtorsQuery = debtorsQuery.in('municipality', deptMunis.municipalities)
         }
    }

    const { data: debtors, error: debtorsError } = await debtorsQuery
    if (debtorsError) {
        console.error("Debtors Query Error:", debtorsError);
        throw debtorsError
    }

    // Filter by payment term AND balance in memory
    const targetTerm = isWeekly ? 'SEMANAL' : 'DIARIO'
    const filteredDebtors = debtors.filter((d: any) => {
        // Check balance in memory to be safe against data types
        const balance = Number(d.balance) || 0
        if (balance <= 0) return false

        const term = d.payment_term
        if (!term) return false
        if (Array.isArray(term)) return term.some((t: any) => String(t).toUpperCase() === targetTerm)
        return String(term).toUpperCase() === targetTerm
    })

    // Create lookup maps
    const debtorNumMap = new Map() // debtor_number -> debtor
    filteredDebtors.forEach((d: any) => {
        if (d.debtor_number) debtorNumMap.set(d.debtor_number, d)
    })

    // 2. Fetch Payments in Range
    const { data: payments, error: paymentsError } = await supabase
        .from('payments')
        .select('*')
        .gte('created_at', start.toISOString())
        .lte('created_at', end.toISOString())
    
    if (paymentsError) {
        console.error("Payments Query Error:", paymentsError);
        throw paymentsError
    }

    // 3. Process
    const reportData: any[] = []
    const paymentsMap = new Set<string>() // key: debtorId|dateStr

    // Helper for Week Logic
    const getWeekLabel = (dateObj: Date) => {
        const d = dateObj.getDate()
        const m = dateObj.getMonth()
        const y = dateObj.getFullYear()
        const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
        let w = 4
        if (d <= 7) w = 1
        else if (d <= 14) w = 2
        else if (d <= 21) w = 3
        return `Semana ${w} - ${months[m]} ${y}`
    }

    // Map payments
    payments.forEach((p: any) => {
        // Resolve debtor
        const debtor = p.debtor_number ? debtorNumMap.get(p.debtor_number) : null
        
        if (!debtor) return
        
        // Determine date to use (payment_date preferred if valid DD-MM-YYYY)
        let pDate: Date
        if (p.payment_date && /^\d{2}-\d{2}-\d{4}$/.test(p.payment_date)) {
            const [d, m, y] = p.payment_date.split('-').map(Number)
            pDate = new Date(y, m - 1, d)
        } else {
            pDate = new Date(p.created_at)
        }

        let key = ''
        if (isWeekly) {
            key = `${debtor.debtor_number}|${getWeekLabel(pDate)}`
        } else {
            // Daily: DD-MM-YYYY
            const d = String(pDate.getDate()).padStart(2, '0')
            const m = String(pDate.getMonth() + 1).padStart(2, '0')
            const y = pDate.getFullYear()
            const dStr = `${d}-${m}-${y}`
            key = `${debtor.debtor_number}|${dStr}`
        }
        paymentsMap.add(key)
    })

    // Iterate Dates/Weeks
    const dateIterator = new Date(start)
    const processedWeeks = new Set<string>()

    while (dateIterator <= end) {
        let checkLabel = ''
        let checkDateStr = ''
        
        if (isWeekly) {
            checkLabel = getWeekLabel(dateIterator)
            if (processedWeeks.has(checkLabel)) {
                dateIterator.setDate(dateIterator.getDate() + 1)
                continue
            }
            processedWeeks.add(checkLabel)
        } else {
             const d = String(dateIterator.getDate()).padStart(2, '0')
             const m = String(dateIterator.getMonth() + 1).padStart(2, '0')
             const y = dateIterator.getFullYear()
             checkDateStr = `${d}-${m}-${y}`
        }

        // Check each debtor
        filteredDebtors.forEach((d: any) => {
            // Check if debtor was created before this date/week
            const created = new Date(d.created_at)
            if (created >= dateIterator) return // Too new

            const key = isWeekly ? `${d.debtor_number}|${checkLabel}` : `${d.debtor_number}|${checkDateStr}`
            
            if (!paymentsMap.has(key)) {
                // Missed Payment
                reportData.push({
                    id: d.debtor_number, // Use debtor_number as the ID for the frontend
                    name: d.name,
                    municipality: d.municipality,
                    asesor_name: d.asesor_name,
                    dateStr: isWeekly ? checkLabel : checkDateStr,
                    saleDate: d.sale_date || 'N/A',
                    nuevos: (d.credit_type === 'Nuevo' ? d.sale_value : 0),
                    represtes: (d.credit_type === 'Represte' ? d.sale_value : 0),
                    valor_cuota: d.valor_cuota,
                    abonos: 0,
                    balance: d.balance
                })
            }
        })
        dateIterator.setDate(dateIterator.getDate() + 1)
    }

    return new Response(JSON.stringify(reportData), { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 })
  } catch (err) {
    console.error("Function Error:", err);
    return new Response(JSON.stringify({ error: err.message }), { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 })
  }
})