import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { mode, startDate, endDate, user, dept, muni } = await req.json()

    const start = new Date(startDate)
    const end = new Date(endDate)
    const isWeekly = mode === 'weekly'

    // 1. Fetch Debtors (Lookback for active credits)
    const lookbackDate = new Date(start)
    lookbackDate.setDate(lookbackDate.getDate() - (isWeekly ? 365 : 180))

    let debtorsQuery = supabase.from('debtors').select('*')
      .gte('created_at', lookbackDate.toISOString())
      .lte('created_at', end.toISOString())

    if (user && user !== 'Todos los Asesores') debtorsQuery = debtorsQuery.eq('asesor_name', user)
    if (muni && muni !== 'Todos los Municipios') debtorsQuery = debtorsQuery.eq('municipality', muni)
    
    if (dept && (!muni || muni === 'Todos los Municipios')) {
        const { data: deptMunis } = await supabase.from('municipalities').select('municipalities').eq('id', dept).single()
        if (deptMunis && deptMunis.municipalities) {
            debtorsQuery = debtorsQuery.in('municipality', deptMunis.municipalities)
        }
    }

    const { data: debtors, error: debtorsError } = await debtorsQuery
    if (debtorsError) throw debtorsError

    // 2. Fetch Payments
    let paymentsQuery = supabase.from('payments').select('*')
      .gte('created_at', start.toISOString())
      .lte('created_at', end.toISOString())
    
    if (user && user !== 'Todos los Asesores') paymentsQuery = paymentsQuery.eq('user_name', user)
    if (muni && muni !== 'Todos los Municipios') paymentsQuery = paymentsQuery.eq('municipality', muni)
    if (dept && (!muni || muni === 'Todos los Municipios')) {
         const { data: deptMunis } = await supabase.from('municipalities').select('municipalities').eq('id', dept).single()
         if (deptMunis && deptMunis.municipalities) {
             paymentsQuery = paymentsQuery.in('municipality', deptMunis.municipalities)
         }
    }

    const { data: payments, error: paymentsError } = await paymentsQuery
    if (paymentsError) throw paymentsError

    // 3. Fetch Reports (Expenses)
    const reportTable = isWeekly ? 'wreports' : 'reports'
    let reportsQuery = supabase.from(reportTable).select('*')
      .gte('created_at', start.toISOString())
      .lte('created_at', end.toISOString())

    if (user && user !== 'Todos los Asesores') reportsQuery = reportsQuery.eq('user_name', user)
    
    const { data: reports, error: reportsError } = await reportsQuery
    if (reportsError) throw reportsError

    // Process Data
    const dataMap: any = {}
    const getKey = (dateStr: string, userName: string, muniName: string) => `${dateStr}|${userName}|${muniName}`

    const initRow = (key: string, dateStr: string, userName: string, muniName: string, sortTime: number) => {
        if (!dataMap[key]) {
            dataMap[key] = {
                date: dateStr,
                user: userName,
                muni: muniName,
                cobro: 0,
                creditos: 0,
                ganancia: 0,
                cobroReal: 0,
                gastos: 0,
                sortDate: sortTime
            }
        }
    }

    const isDiario = (term: any) => {
        if (!term) return false
        if (Array.isArray(term)) return term.some((t: any) => String(t).toUpperCase() === 'DIARIO')
        return String(term).toUpperCase() === 'DIARIO'
    }

    const isSemanal = (term: any) => {
        if (!term) return false
        if (Array.isArray(term)) return term.some((t: any) => String(t).toUpperCase() === 'SEMANAL')
        return String(term).toUpperCase() === 'SEMANAL'
    }

    const getWeekInfo = (dateObj: Date) => {
        const d = dateObj.getDate()
        const m = dateObj.getMonth()
        const y = dateObj.getFullYear()
        const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
        
        let w = 4
        if (d <= 7) w = 1
        else if (d <= 14) w = 2
        else if (d <= 21) w = 3
        
        const label = `Semana ${w} - ${months[m]} ${y}`
        const sortTime = new Date(y, m, (w - 1) * 7 + 1).getTime()
        return { label, sortTime }
    }

    const debtorsMap = new Map()
    const datesInRange: Date[] = []
    let currentDateIter = new Date(start)
    while (currentDateIter <= end) {
        datesInRange.push(new Date(currentDateIter))
        currentDateIter.setDate(currentDateIter.getDate() + 1)
    }

    // Process Debtors
    debtors.forEach((d: any) => {
        debtorsMap.set(d.debtor_number, d)

        if (isWeekly) {
            if (!isSemanal(d.payment_term)) return
        } else {
            if (!isDiario(d.payment_term)) return
        }

        const createdAt = new Date(d.created_at)

        // A. Creditos & Ganancia
        if (d.imported !== true && createdAt >= start && createdAt <= end) {
            let dateStr, sortTime
            if (isWeekly) {
                const info = getWeekInfo(createdAt)
                dateStr = info.label
                sortTime = info.sortTime
            } else {
                const day = String(createdAt.getDate()).padStart(2, '0')
                const month = String(createdAt.getMonth() + 1).padStart(2, '0')
                dateStr = `${day}-${month}-${createdAt.getFullYear()}`
                sortTime = createdAt.getTime()
            }

            const key = getKey(dateStr, d.asesor_name, d.municipality)
            initRow(key, dateStr, d.asesor_name, d.municipality, sortTime)
            dataMap[key].creditos += (Number(d.sale_value) || 0)
            dataMap[key].ganancia += (Number(d.interests) || 0)
        }

        // B. Cobro (Esperado)
        let effectiveDate = createdAt
        if (d.sale_date) {
             if (typeof d.sale_date === 'string') {
                 if (/^\d{1,2}-\d{1,2}-\d{4}$/.test(d.sale_date)) {
                     const parts = d.sale_date.split('-')
                     effectiveDate = new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0]))
                 } else if (/^\d{4}-\d{1,2}-\d{1,2}$/.test(d.sale_date)) {
                     const parts = d.sale_date.split('-')
                     effectiveDate = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]))
                 }
             }
        }

        const numDays = Number(d.number_of_payments) || 0
        const expirationDate = new Date(effectiveDate)
        if (isWeekly) expirationDate.setDate(expirationDate.getDate() + (numDays * 7))
        else expirationDate.setDate(expirationDate.getDate() + numDays)

        const activeStart = new Date(effectiveDate)
        activeStart.setDate(activeStart.getDate() + 1)
        activeStart.setHours(0,0,0,0)

        const activeEnd = new Date(expirationDate)
        activeEnd.setHours(23,59,59,999)

        const hasBalance = (Number(d.balance) || 0) > 0

        datesInRange.forEach(dayDate => {
            const dayStart = new Date(dayDate)
            dayStart.setHours(0,0,0,0)

            if (dayStart >= activeStart && (dayStart <= activeEnd || hasBalance)) {
                if (!isWeekly || (isWeekly && dayStart.getDay() === effectiveDate.getDay())) {
                    let dateStr, sortTime
                    if (isWeekly) {
                        const info = getWeekInfo(dayStart)
                        dateStr = info.label
                        sortTime = info.sortTime
                    } else {
                        const day = String(dayStart.getDate()).padStart(2, '0')
                        const month = String(dayStart.getMonth() + 1).padStart(2, '0')
                        dateStr = `${day}-${month}-${dayStart.getFullYear()}`
                        sortTime = dayStart.getTime()
                    }

                    const key = getKey(dateStr, d.asesor_name, d.municipality)
                    initRow(key, dateStr, d.asesor_name, d.municipality, sortTime)
                    dataMap[key].cobro += (Number(d.valor_cuota) || 0)
                }
            }
        })
    })

    // Process Payments
    payments.forEach((p: any) => {
        if (p.imported === true) return

        const debtor = debtorsMap.get(p.debtor_number)
        if (!debtor) return

        if (isWeekly) {
            if (!isSemanal(debtor.payment_term)) return
        } else {
            if (!isDiario(debtor.payment_term)) return
        }

        const date = new Date(p.created_at)
        let dateStr, sortTime
        if (isWeekly) {
            const info = getWeekInfo(date)
            dateStr = info.label
            sortTime = info.sortTime
        } else {
            const day = String(date.getDate()).padStart(2, '0')
            const month = String(date.getMonth() + 1).padStart(2, '0')
            dateStr = `${day}-${month}-${date.getFullYear()}`
            sortTime = date.getTime()
        }

        const key = getKey(dateStr, p.user_name, p.municipality)
        initRow(key, dateStr, p.user_name, p.municipality, sortTime)
        dataMap[key].cobroReal += (Number(p.payment_amount) || 0)
    })

    // Process Expenses
    const expensesMap: any = {}
    reports.forEach((r: any) => {
        let rDate, dateStr
        if (isWeekly) {
            rDate = new Date(r.created_at)
            const info = getWeekInfo(rDate)
            dateStr = info.label
        } else {
            const [d, m, y] = (r.report_date || '').split('-').map(Number)
            if (!d) return
            rDate = new Date(y, m - 1, d)
            dateStr = r.report_date
        }

        if (rDate >= start && rDate <= end) {
            expensesMap[`${dateStr}|${r.user_name}`] = (Number(r.expense_report) || 0)
        }
    })

    const expensesApplied = new Set()
    Object.values(dataMap).forEach((row: any) => {
        const expKey = `${row.date}|${row.user}`
        if (expensesMap[expKey] && !expensesApplied.has(expKey)) {
            row.gastos = expensesMap[expKey]
            expensesApplied.add(expKey)
        }
    })

    const sortedRows = Object.values(dataMap).sort((a: any, b: any) => b.sortDate - a.sortDate)

    return new Response(JSON.stringify(sortedRows), {
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