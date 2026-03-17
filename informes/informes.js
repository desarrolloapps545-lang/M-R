// Credenciales de Supabase proporcionadas
const SUPABASE_PROJECT_ID = 'fiahwrkuouceyncxoukj';
const SUPABASE_KEY = 'sb_publishable_9lTA1sPLY9iSTASjrCgE6g_Cr1qQ_Re';
const SUPABASE_URL = `https://${SUPABASE_PROJECT_ID}.supabase.co`;

// Inicializar el cliente de Supabase
const sbClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Referencias Informes P&G
const btnReportPg = document.getElementById('btn-report-pg');
const btnPgDaily = document.getElementById('btn-pg-daily');
const btnPgWeekly = document.getElementById('btn-pg-weekly');
const btnPgFilterDate = document.getElementById('btn-pg-filter-date');
const pgFilterDateText = document.getElementById('pg-filter-date-text');
const pgFilterDept = document.getElementById('pg-filter-dept');
const pgFilterMuni = document.getElementById('pg-filter-muni');
const pgFilterUser = document.getElementById('pg-filter-user');
const btnGeneratePg = document.getElementById('btn-generate-pg');
const btnDownloadPg = document.getElementById('btn-download-pg');
const pgTableBody = document.getElementById('pg-table-body');
const pgReportBox = document.getElementById('pg-report-box');
// Referencias Informes PB (Payment Behavior)
const btnReportPb = document.getElementById('btn-report-pb');
const pbReportBox = document.getElementById('pb-report-box');
const btnPbDaily = document.getElementById('btn-pb-daily');
const btnPbWeekly = document.getElementById('btn-pb-weekly');
const btnPbFilterDate = document.getElementById('btn-pb-filter-date');
const pbFilterDateText = document.getElementById('pb-filter-date-text');
const pbFilterDept = document.getElementById('pb-filter-dept');
const pbFilterMuni = document.getElementById('pb-filter-muni');
const pbFilterUser = document.getElementById('pb-filter-user');
const btnGeneratePb = document.getElementById('btn-generate-pb');
const btnDownloadPb = document.getElementById('btn-download-pb');
const pbTableBody = document.getElementById('pb-table-body');
// Referencias Informes CR (Credits Report)
const btnReportCr = document.getElementById('btn-report-cr');
const crReportBox = document.getElementById('cr-report-box');
const btnCrDaily = document.getElementById('btn-cr-daily');
const btnCrWeekly = document.getElementById('btn-cr-weekly');
const btnCrFilterDate = document.getElementById('btn-cr-filter-date');
const crFilterDateText = document.getElementById('cr-filter-date-text');
const crFilterDept = document.getElementById('cr-filter-dept');
const crFilterMuni = document.getElementById('cr-filter-muni');
const crFilterUser = document.getElementById('cr-filter-user');
const btnGenerateCr = document.getElementById('btn-generate-cr');
const btnDownloadCr = document.getElementById('btn-download-cr');
const btnCrVencidos = document.getElementById('btn-cr-vencidos');
const btnMassEditCrDate = document.getElementById('btn-mass-edit-cr-date');
const crTableBody = document.getElementById('cr-table-body');
const crTotalDisplay = document.getElementById('cr-total-display');
const crSearchInput = document.getElementById('cr-search-input');
const btnCrClearSearch = document.getElementById('btn-cr-clear-search');
// Referencias Informes PM (Payments Report)
const btnReportPm = document.getElementById('btn-report-pm');
const pmReportBox = document.getElementById('pm-report-box');
const btnPmDaily = document.getElementById('btn-pm-daily');
const btnPmWeekly = document.getElementById('btn-pm-weekly');
const btnPmFilterDate = document.getElementById('btn-pm-filter-date');
const pmFilterDateText = document.getElementById('pm-filter-date-text');
const pmFilterDept = document.getElementById('pm-filter-dept');
const pmFilterMuni = document.getElementById('pm-filter-muni');
const pmFilterUser = document.getElementById('pm-filter-user');
const btnGeneratePm = document.getElementById('btn-generate-pm');
const btnDownloadPm = document.getElementById('btn-download-pm');
const btnMassEditPmDate = document.getElementById('btn-mass-edit-pm-date');
const pmSearchInput = document.getElementById('pm-search-input');
const btnPmClearSearch = document.getElementById('btn-pm-clear-search');
const pmTableBody = document.getElementById('pm-table-body');
const pmTotalCobroDisplay = document.getElementById('pm-total-cobro-display');
const pmTotalRecaudoDisplay = document.getElementById('pm-total-recaudo-display');
// Referencias Informes EX (Expenses Report)
const btnReportEx = document.getElementById('btn-report-ex');
const exReportBox = document.getElementById('ex-report-box');
const btnExDaily = document.getElementById('btn-ex-daily');
const btnExWeekly = document.getElementById('btn-ex-weekly');
const btnExFilterDate = document.getElementById('btn-ex-filter-date');
const exFilterDateText = document.getElementById('ex-filter-date-text');
const exFilterUser = document.getElementById('ex-filter-user');
const btnGenerateEx = document.getElementById('btn-generate-ex');
const btnDownloadEx = document.getElementById('btn-download-ex');
const exTableBody = document.getElementById('ex-table-body');
// Referencias Informes GN (General Report)
const btnReportGn = document.getElementById('btn-report-gn');
const gnReportBox = document.getElementById('gn-report-box');
const btnGnDaily = document.getElementById('btn-gn-daily');
const btnGnWeekly = document.getElementById('btn-gn-weekly');
const btnGnFilterDate = document.getElementById('btn-gn-filter-date');
const gnFilterDateText = document.getElementById('gn-filter-date-text');
const gnFilterUser = document.getElementById('gn-filter-user');
const btnGenerateGn = document.getElementById('btn-generate-gn');
const btnDownloadGn = document.getElementById('btn-download-gn');
const gnTableBody = document.getElementById('gn-table-body');
// Referencias Modales GN
const editExpensesModal = document.getElementById('editExpensesModal');
const editExpGas = document.getElementById('edit-exp-gas');
const editExpLunch = document.getElementById('edit-exp-lunch');
const editExpOtherVal = document.getElementById('edit-exp-other-val');
const editExpOtherDesc = document.getElementById('edit-exp-other-desc');
const btnSaveExpChanges = document.getElementById('btn-save-exp-changes');
const reportCreditsDetailBody = document.getElementById('report-credits-detail-body');
const reportCreditsTotal = document.getElementById('report-credits-total');
const reportPaymentsDetailBody = document.getElementById('report-payments-detail-body');
const reportPaymentsTotal = document.getElementById('report-payments-total');
const reportPaymentsCash = document.getElementById('report-payments-cash');
const reportPaymentsTransfer = document.getElementById('report-payments-transfer');
const btnDownloadReportPaymentsDetails = document.getElementById('download-report-payments-details-btn');
const btnDownloadReportCreditsDetails = document.getElementById('download-report-credits-details-btn');
// Referencias Modal Ver Gastos
const viewExpensesModal = document.getElementById('viewExpensesModal');
const viewExpGas = document.getElementById('view-exp-gas');
const viewExpLunch = document.getElementById('view-exp-lunch');
const viewExpOtherVal = document.getElementById('view-exp-other-val');
const viewExpOtherDesc = document.getElementById('view-exp-other-desc');
const viewExpTotal = document.getElementById('view-exp-total');
// Referencias Modal Fechas P&G
const pgDateSelectionModal = document.getElementById('pg-date-selection-modal');
const pgModalDateType = document.getElementById('pg-modal-date-type');
const pgModalDateInputsContainer = document.getElementById('pg-modal-date-inputs-container');
const pgDatePreview = document.getElementById('pg-date-preview');
const btnPgDateAccept = document.getElementById('btn-pg-date-accept');
const btnPgDateCancel = document.getElementById('btn-pg-date-cancel');
// Referencias Modal Edición Masiva Fechas
const massEditDateModal = document.getElementById('massEditDateModal');
const massNewDateInput = document.getElementById('mass-new-date-input');
const btnConfirmMassDate = document.getElementById('btn-confirm-mass-date');

// Referencias Modal Edición Masiva Créditos
const massEditCrModal = document.getElementById('massEditCrModal');
const massEditCrDateInput = document.getElementById('mass-edit-cr-date');
const massEditCrInterestsInput = document.getElementById('mass-edit-cr-interests');
const massEditCrInstallmentsInput = document.getElementById('mass-edit-cr-installments');
const btnConfirmMassCrEdit = document.getElementById('btn-confirm-mass-cr-edit');
// Referencias Modal Edición Individual Cobro
const editPmModal = document.getElementById('editPmModal');
const editPmDate = document.getElementById('edit-pm-date');
const editPmAmount = document.getElementById('edit-pm-amount');
const editPmMethod = document.getElementById('edit-pm-method');
const editPmMunicipality = document.getElementById('edit-pm-municipality');
const editPmAdvisor = document.getElementById('edit-pm-advisor');
const btnSavePmEdit = document.getElementById('btn-save-pm-edit');
// Referencias Modal Edición Individual Crédito
const editCrModal = document.getElementById('editCrModal');
const editCrDate = document.getElementById('edit-cr-date');
const editCrValue = document.getElementById('edit-cr-value');
const editCrInterests = document.getElementById('edit-cr-interests');
const editCrQuota = document.getElementById('edit-cr-quota');
const editCrBalance = document.getElementById('edit-cr-balance');
const editCrType = document.getElementById('edit-cr-type');
const editCrTerm = document.getElementById('edit-cr-term');
const editCrMunicipality = document.getElementById('edit-cr-municipality');
const editCrAdvisor = document.getElementById('edit-cr-advisor');
const btnSaveCrEdit = document.getElementById('btn-save-cr-edit');
const emptyStateMessage = document.getElementById('empty-state-message');

let currentPgReportData = []; // Datos para exportar P&G
let currentPgMode = null; // daily | weekly
let currentPbReportData = []; // Datos para exportar PB
let currentPbMode = null; // daily | weekly
let currentCrReportData = []; // Datos para exportar CR
let currentCrMode = null; // daily | weekly
let currentPmReportData = []; // Datos para exportar PM
let currentPmMode = null; // daily | weekly
let currentPmDebtorsMap = new Map(); // Mapa global para info de deudores en PM
let currentExReportData = []; // Datos para exportar EX
let currentExMode = null; // daily | weekly
let currentGnReportData = []; // Datos para exportar GN
let currentGnMode = null; // null | 'daily' | 'weekly'
let currentReportDateTarget = 'pg'; // 'pg' | 'pb' | 'cr' | 'pm' | 'ex' | 'gn'
let currentDownloadUser = null;
let currentDownloadDate = null;
let currentExpEditData = null; // Datos temporales para edición de gastos
let pendingReportUpdate = false; // Bandera para cambios pendientes
let currentReportContext = null; // Contexto unificado
let selectedPmIds = []; // IDs seleccionados para edición masiva
let currentPmEditData = null; // Datos del cobro que se está editando individualmente
let selectedCrIds = []; // IDs seleccionados para edición masiva de créditos
let currentCrEditData = null; // Datos del crédito que se está editando individualmente
let massEditContext = 'pm'; // 'pm' | 'cr' - Contexto para el modal de edición masiva

// Contexto global para detalles de créditos
let currentCreditsContext = {
    reportId: null,
    userName: null,
    dateStr: null,
    mode: null,
    collection: null
};

// Estado de fechas
let pgDateState = {
    type: 'specific',
    start: null,
    end: null,
    label: ''
};

// Helper para normalizar texto (quitar acentos y a minúsculas)
function normalizeText(text) {
    if (!text) return '';
    return text.toString().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

// Helper para fechas locales (Soluciona el desfase de -1/+1 día por zona horaria)
function getLocalDateKey(dateObj) {
    if (!dateObj || isNaN(dateObj.getTime())) return '';
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Helper para parsear fechas (Soporta ISO, YYYY-MM-DD, y DD-MM-YYYY)
function parseDateValue(value) {
    if (!value) return null;

    if (value instanceof Date) {
        return isNaN(value.getTime()) ? null : value;
    }

    if (typeof value !== 'string') return null;

    if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
        const [y, m, d] = value.split('-').map(Number);
        return new Date(y, m - 1, d);
    }

    if (/^\d{2}-\d{2}-\d{4}$/.test(value)) {
        const [d, m, y] = value.split('-').map(Number);
        return new Date(y, m - 1, d);
    }

    const d = new Date(value);
    return isNaN(d.getTime()) ? null : d;
}

// Función para ocultar pantalla de carga
function hideLoading() {
    const overlay = document.getElementById('loading-overlay-solid');
    if (overlay) {
        overlay.classList.add('fade-out');
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 2300);
    }
}

/**
 * Exporta un array de objetos a un archivo Excel.
 * @param {Array<Object>} data Los datos a exportar.
 * @param {string} filename El nombre del archivo (sin extensión).
 * @param {Object} columnMapping Un objeto que mapea claves de datos a cabeceras de Excel. ej: { name: 'CLIENTE' }
 */
function exportToExcel(data, filename, columnMapping) {
    if (!data || data.length === 0) {
        alert("No hay datos para exportar.");
        return;
    }

    const headers = Object.values(columnMapping);
    const sheetData = [headers]; // Empezar con las cabeceras

    data.forEach(row => {
        const rowData = [];
        Object.keys(columnMapping).forEach(key => {
            // El valor puede ser una fecha ya parseada o un string/número
            rowData.push(row[key]);
        });
        sheetData.push(rowData);
    });

    const ws = XLSX.utils.aoa_to_sheet(sheetData);

    // Aplicar formato de fecha a las celdas que contienen objetos Date
    const range = XLSX.utils.decode_range(ws['!ref']);
    for (let R = range.s.r + 1; R <= range.e.r; ++R) { // Empezar en 1 para saltar la cabecera
        for (let C = range.s.c; C <= range.e.c; ++C) {
            const cell_address = { c: C, r: R };
            const cell_ref = XLSX.utils.encode_cell(cell_address);
            const cell = ws[cell_ref];
            
            if (cell && cell.v instanceof Date) {
                cell.t = 'd'; // Tipo fecha
                cell.z = 'dd/mm/yyyy'; // Formato de fecha corta
            }
        }
    }

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Reporte");
    XLSX.writeFile(wb, `${filename}.xlsx`);
}

/**
 * Calcula el nombre del día de la semana en español a partir de una fecha en formato 'YYYY-MM-DD'.
 * @param {string} dateString La fecha en formato 'YYYY-MM-DD'.
 * @returns {string} El nombre del día ('Lunes', 'Martes', etc.).
 */
function getDayName(dateString) { // dateString is YYYY-MM-DD
    try {
        // Separar en partes para evitar problemas de zona horaria de new Date('YYYY-MM-DD')
        const parts = dateString.split('-').map(Number);
        // new Date(año, mes (0-11), día) crea una fecha en la zona horaria local.
        const date = new Date(parts[0], parts[1] - 1, parts[2]);
        if (isNaN(date.getTime())) throw new Error('Valor de fecha inválido.');

        const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        return days[date.getDay()];
    } catch (e) {
        throw new Error(`Error al procesar la fecha '${dateString}': ${e.message}`);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Ocultar carga al iniciar
    setTimeout(hideLoading, 1000);

    // ==========================================
    // LÓGICA INFORMES P&G (PROFIT & LOSS)
    // ==========================================

    // 1. Lógica de Filtrado y Control de Tiempo

    btnPgDaily.addEventListener('click', () => {
        currentPgMode = 'daily';
        btnPgDaily.className = 'btn-primary';
        btnPgWeekly.className = 'btn-secondary';
        pgFilterDateText.innerText = 'Seleccionar Fecha'; // Limpiar fecha al cambiar modo
    });

    btnPgWeekly.addEventListener('click', () => {
        currentPgMode = 'weekly';
        btnPgWeekly.className = 'btn-primary';
        btnPgDaily.className = 'btn-secondary';
        pgFilterDateText.innerText = 'Seleccionar Fecha'; // Limpiar fecha al cambiar modo
    });

    // Función auxiliar para ocultar todos los reportes y resetear botones
    function hideAllReportBoxes() {
        pgReportBox.style.display = 'none';
        pbReportBox.style.display = 'none';
        crReportBox.style.display = 'none';
        pmReportBox.style.display = 'none';
        exReportBox.style.display = 'none';
        gnReportBox.style.display = 'none';
        
        emptyStateMessage.style.display = 'none'; // Ocultar mensaje vacío
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        // Limpiar textos de fecha en todos los reportes
        pgFilterDateText.innerText = '';
        pbFilterDateText.innerText = '';
        crFilterDateText.innerText = '';
        pmFilterDateText.innerText = '';
        exFilterDateText.innerText = '';
        gnFilterDateText.innerText = '';
    }

    // Navegación interna de reportes
    btnReportPg.addEventListener('click', () => {
        hideAllReportBoxes();
        pgReportBox.style.display = 'block';
        btnReportPg.classList.add('active');
        loadPgFilters();
    });

    btnReportPb.addEventListener('click', () => {
        hideAllReportBoxes();
        pbReportBox.style.display = 'block';
        btnReportPb.classList.add('active');
        loadPbFilters();
    });

    btnReportCr.addEventListener('click', () => {
        hideAllReportBoxes();
        crReportBox.style.display = 'block';
        btnReportCr.classList.add('active');
        loadCrFilters();
    });

    btnReportPm.addEventListener('click', () => {
        hideAllReportBoxes();
        pmReportBox.style.display = 'block';
        btnReportPm.classList.add('active');
        loadPmFilters();
    });

    btnReportEx.addEventListener('click', () => {
        hideAllReportBoxes();
        exReportBox.style.display = 'block';
        btnReportEx.classList.add('active');
        loadExFilters();
    });

    btnReportGn.addEventListener('click', () => {
        hideAllReportBoxes();
        gnReportBox.style.display = 'block';
        btnReportGn.classList.add('active');
        loadGnFilters();

        // FIX: Asegurar que el encabezado de la tabla de cierres sea correcto al entrar
        const table = gnTableBody.closest('table');
        if (table && table.tHead && table.tHead.rows.length > 0) {
            table.tHead.rows[0].innerHTML = `
                <th>Asesor</th>
                <th>Créditos</th>
                <th>Ganancias</th>
                <th>Cobros</th>
                <th>Gastos</th>
                <th>Base Inicial</th>
                <th>Base Final</th>
                <th>Inyección</th>
                <th>Fecha</th>
            `;
        }
    });

    async function loadPgFilters() {
        // 1. Cargar Asesores
        const { data: users } = await sbClient.from('users').select('name')
            .neq('role', 'Administrador')
            .neq('role', 'Administrador maestro')
            .neq('role', 'Desarrollador');
        pgFilterUser.innerHTML = '<option value="">Todos los Asesores</option>';
        if (users) {
            users.forEach(u => pgFilterUser.innerHTML += `<option value="${u.name}">${u.name}</option>`);
        }

        // 2. Cargar Departamentos
        const { data: deptsData, error } = await sbClient.from('municipalities').select('id, municipalities');
        
        if (error) {
            console.error('Error cargando departamentos:', error);
            return;
        }

        pgFilterDept.innerHTML = '<option value="">Todos los Departamentos</option>';
        deptsData.forEach(dept => {
            const option = document.createElement('option');
            option.value = dept.id;
            option.textContent = dept.id;
            pgFilterDept.appendChild(option);
        });

        if (deptsData.length === 1) {
            pgFilterDept.value = deptsData[0].id;
            pgFilterDept.disabled = true;
            pgFilterDept.dispatchEvent(new Event('change'));
        } else {
            pgFilterDept.disabled = false;
        }
    }

    // --- Lógica de Filtrado Dinámico de Municipios por Usuario ---

    pgFilterUser.addEventListener('change', () => {
        updateUserMunicipalities(pgFilterUser.value, 'pg-filter-muni');
    });

    async function updateUserMunicipalities(userName, targetSelectId) {
        const select = document.getElementById(targetSelectId);
        if (!select) return;

        select.innerHTML = '<option value="">Cargando...</option>';
        select.disabled = true;

        if (!userName) {
            select.innerHTML = '<option value="">Todos los Municipios</option>';
            select.disabled = false;
            
            if (pgFilterDept.value) {
                pgFilterDept.dispatchEvent(new Event('change'));
            }
            return;
        }

        const { data: user, error } = await sbClient
            .from('users')
            .select('assigned_municipality')
            .eq('name', userName)
            .single();

        if (error || !user) {
            select.innerHTML = '<option value="">Error al cargar</option>';
            select.disabled = false;
            return;
        }

        const assigned = user.assigned_municipality || [];
        let list = [];
        if (Array.isArray(assigned)) list = assigned;
        else if (typeof assigned === 'string') list = assigned.split(',').map(s => s.trim());

        select.innerHTML = '<option value="">Todos los Municipios</option>';
        list.forEach(m => {
            const opt = document.createElement('option');
            opt.value = m;
            opt.textContent = m;
            select.appendChild(opt);
        });
        select.disabled = false;
    }

    // Lógica de Municipios dependiente de Dept
    pgFilterDept.addEventListener('change', async () => {
        pgFilterMuni.innerHTML = '<option value="">Todos los Municipios</option>';
        if (!pgFilterDept.value) return;
        
        const { data } = await sbClient.from('municipalities').select('municipalities').eq('id', pgFilterDept.value).single();
        if (data) {
            data.municipalities.forEach(m => pgFilterMuni.innerHTML += `<option value="${m}">${m}</option>`);
        }
    });

    // --- Lógica Modal de Fechas ---

    btnPgFilterDate.addEventListener('click', () => {
        currentReportDateTarget = 'pg';
        const mode = currentPgMode || 'daily';
        pgModalDateType.innerHTML = '';
        
        if (mode === 'daily') {
            pgModalDateType.innerHTML += '<option value="specific">Día Específico</option>';
            pgModalDateType.innerHTML += '<option value="range">Rango de Fechas</option>';
            pgModalDateType.innerHTML += '<option value="all">Mostrar Todo</option>';
            pgModalDateType.innerHTML += '<option value="all_period">Todo el Periodo (Diario)</option>';
        } else {
            pgModalDateType.innerHTML += '<option value="month">Mes Completo</option>';
            pgModalDateType.innerHTML += '<option value="range">Rango Personalizado</option>';
            pgModalDateType.innerHTML += '<option value="all">Mostrar Todo</option>';
            pgModalDateType.innerHTML += '<option value="all_period">Todo el Periodo (Semanal)</option>';
        }

        pgModalDateType.value = pgDateState.type;
        if (!pgModalDateType.value) pgModalDateType.selectedIndex = 0;

        updatePgModalView();
        pgDateSelectionModal.style.display = 'block';
    });

    btnPbFilterDate.addEventListener('click', () => {
        currentReportDateTarget = 'pb';
        const mode = currentPbMode || 'daily';
        pgModalDateType.innerHTML = '';
        
        if (mode === 'daily') {
            pgModalDateType.innerHTML += '<option value="specific">Día Específico</option>';
            pgModalDateType.innerHTML += '<option value="range">Rango de Fechas</option>';
            pgModalDateType.innerHTML += '<option value="all">Mostrar Todo</option>';
            pgModalDateType.innerHTML += '<option value="all_period">Todo el Periodo (Diario)</option>';
        } else {
            pgModalDateType.innerHTML += '<option value="month">Mes Completo</option>';
            pgModalDateType.innerHTML += '<option value="range">Rango Personalizado</option>';
            pgModalDateType.innerHTML += '<option value="all_period">Todo el Periodo (Semanal)</option>';
        }
        pgModalDateType.selectedIndex = 0;
        updatePgModalView();
        pgDateSelectionModal.style.display = 'block';
    });

    btnCrFilterDate.addEventListener('click', () => {
        currentReportDateTarget = 'cr';
        const mode = currentCrMode || 'daily';
        pgModalDateType.innerHTML = '';
        
        if (mode === 'daily') {
            pgModalDateType.innerHTML += '<option value="specific">Día Específico</option>';
            pgModalDateType.innerHTML += '<option value="range">Rango de Fechas</option>';
            pgModalDateType.innerHTML += '<option value="all">Mostrar Todo</option>';
            pgModalDateType.innerHTML += '<option value="all_period">Todo el Periodo (Diario)</option>';
        } else {
            pgModalDateType.innerHTML += '<option value="month">Mes Completo</option>';
            pgModalDateType.innerHTML += '<option value="range">Rango Personalizado</option>';
            pgModalDateType.innerHTML += '<option value="all_period">Todo el Periodo (Semanal)</option>';
        }
        pgModalDateType.selectedIndex = 0;
        updatePgModalView();
        pgDateSelectionModal.style.display = 'block';
    });

    btnPmFilterDate.addEventListener('click', () => {
        currentReportDateTarget = 'pm';
        const mode = currentPmMode || 'daily';
        pgModalDateType.innerHTML = '';
        
        if (mode === 'daily') {
            pgModalDateType.innerHTML += '<option value="specific">Día Específico</option>';
            pgModalDateType.innerHTML += '<option value="range">Rango de Fechas</option>';
            pgModalDateType.innerHTML += '<option value="all">Mostrar Todo</option>';
            pgModalDateType.innerHTML += '<option value="all_period">Todo el Periodo (Diario)</option>';
        } else {
            pgModalDateType.innerHTML += '<option value="month">Mes Completo</option>';
            pgModalDateType.innerHTML += '<option value="range">Rango Personalizado</option>';
            pgModalDateType.innerHTML += '<option value="all_period">Todo el Periodo (Semanal)</option>';
        }
        pgModalDateType.selectedIndex = 0;
        updatePgModalView();
        pgDateSelectionModal.style.display = 'block';
    });

    btnExFilterDate.addEventListener('click', () => {
        currentReportDateTarget = 'ex';
        const mode = currentExMode || 'daily';
        pgModalDateType.innerHTML = '';
        
        if (mode === 'daily') {
            pgModalDateType.innerHTML += '<option value="specific">Día Específico</option>';
            pgModalDateType.innerHTML += '<option value="range">Rango de Fechas</option>';
            pgModalDateType.innerHTML += '<option value="all">Mostrar Todo</option>';
            pgModalDateType.innerHTML += '<option value="all_period">Todo el Periodo (Diario)</option>';
        } else {
            pgModalDateType.innerHTML += '<option value="month">Mes Completo</option>';
            pgModalDateType.innerHTML += '<option value="range">Rango Personalizado</option>';
            pgModalDateType.innerHTML += '<option value="all_period">Todo el Periodo (Semanal)</option>';
        }
        pgModalDateType.selectedIndex = 0;
        updatePgModalView();
        pgDateSelectionModal.style.display = 'block';
    });

    btnGnFilterDate.addEventListener('click', () => {
        currentReportDateTarget = 'gn';
        const mode = currentGnMode || 'daily';
        pgModalDateType.innerHTML = '';
        
        if (mode === 'daily') {
            pgModalDateType.innerHTML += '<option value="specific">Día Específico</option>';
            pgModalDateType.innerHTML += '<option value="range">Rango de Fechas</option>';
            pgModalDateType.innerHTML += '<option value="all">Mostrar Todo</option>';
            pgModalDateType.innerHTML += '<option value="all_period">Todo el Periodo (Diario)</option>';
        } else {
            pgModalDateType.innerHTML += '<option value="month">Mes Completo</option>';
            pgModalDateType.innerHTML += '<option value="range">Rango Personalizado</option>';
            pgModalDateType.innerHTML += '<option value="all_period">Todo el Periodo (Semanal)</option>';
        }
        pgModalDateType.selectedIndex = 0;
        updatePgModalView();
        pgDateSelectionModal.style.display = 'block';
    });

    pgModalDateType.addEventListener('change', updatePgModalView);

    function updatePgModalView() {
        const type = pgModalDateType.value;
        pgModalDateInputsContainer.innerHTML = '';
        const now = new Date();
        const todayISO = getLocalDateKey(now);
        const currentMonthISO = now.toISOString().slice(0, 7);

        if (type === 'specific') {
            pgModalDateInputsContainer.innerHTML = `
                <label>Seleccionar Día:</label>
                <input type="date" id="pg-input-day" value="${todayISO}" class="pg-date-input">
            `;
        } else if (type === 'range') {
            pgModalDateInputsContainer.innerHTML = `
                <label>Desde:</label>
                <input type="date" id="pg-input-start" value="${todayISO}" class="pg-date-input">
                <label>Hasta:</label>
                <input type="date" id="pg-input-end" value="${todayISO}" class="pg-date-input">
            `;
        } else if (type === 'month') {
            pgModalDateInputsContainer.innerHTML = `
                <label>Seleccionar Mes:</label>
                <input type="month" id="pg-input-month" value="${currentMonthISO}" class="pg-date-input">
            `;
        } else if (type === 'week_of_month') {
            pgModalDateInputsContainer.innerHTML = `
                <label>Mes:</label>
                <input type="month" id="pg-input-month-week" value="${currentMonthISO}" class="pg-date-input">
                <label>Semana:</label>
                <select id="pg-input-week-num" class="pg-date-input">
                    <option value="1">Semana 1 (1-7)</option>
                    <option value="2">Semana 2 (8-14)</option>
                    <option value="3">Semana 3 (15-21)</option>
                    <option value="4">Semana 4 (22-Fin)</option>
                </select>
            `;
        } else if (type === 'all' || type === 'all_period') {
            pgModalDateInputsContainer.innerHTML = '<p>Se mostrarán todos los registros disponibles.</p>';
        }

        document.querySelectorAll('.pg-date-input').forEach(input => {
            input.addEventListener('change', updatePgDatePreview);
            input.addEventListener('input', updatePgDatePreview);
        });
        updatePgDatePreview();
    }

    function updatePgDatePreview() {
        const type = pgModalDateType.value;
        let text = '';
        
        if (type === 'specific') {
            const val = document.getElementById('pg-input-day').value;
            text = val ? `Día: ${val}` : '--';
        } else if (type === 'range') {
            const start = document.getElementById('pg-input-start').value;
            const end = document.getElementById('pg-input-end').value;
            text = (start && end) ? `Del ${start} al ${end}` : '--';
        } else if (type === 'month') {
            const val = document.getElementById('pg-input-month').value;
            text = val ? `Todo el mes: ${val}` : '--';
        } else if (type === 'week_of_month') {
            const month = document.getElementById('pg-input-month-week').value;
            const week = document.getElementById('pg-input-week-num').value;
            text = month ? `Semana ${week} de ${month}` : '--';
        } else if (type === 'all' || type === 'all_period') {
            text = 'Todos los registros';
        }
        
        pgDatePreview.innerText = text;
    }

    btnPgDateAccept.addEventListener('click', () => {
        const type = pgModalDateType.value;
        let start = new Date();
        let end = new Date();
        let label = pgDatePreview.innerText;

        if (type === 'specific') {
            const val = document.getElementById('pg-input-day').value;
            if (!val) return alert('Seleccione una fecha');
            const [y, m, d] = val.split('-').map(Number);
            start = new Date(y, m - 1, d);
            end = new Date(y, m - 1, d);
        } else if (type === 'range') {
            const sVal = document.getElementById('pg-input-start').value;
            const eVal = document.getElementById('pg-input-end').value;
            if (!sVal || !eVal) return alert('Seleccione ambas fechas');
            const [sy, sm, sd] = sVal.split('-').map(Number);
            const [ey, em, ed] = eVal.split('-').map(Number);
            start = new Date(sy, sm - 1, sd);
            end = new Date(ey, em - 1, ed);
        } else if (type === 'month') {
            const val = document.getElementById('pg-input-month').value;
            if (!val) return alert('Seleccione un mes');
            const [year, month] = val.split('-');
            start = new Date(year, month - 1, 1);
            end = new Date(year, month, 0);
        } else if (type === 'week_of_month') {
            const val = document.getElementById('pg-input-month-week').value;
            const week = parseInt(document.getElementById('pg-input-week-num').value);
            if (!val) return alert('Seleccione un mes');
            const [year, month] = val.split('-');
            
            start = new Date(year, month - 1, 1);
            end = new Date(year, month - 1, 1);

            if (week === 1) { start.setDate(1); end.setDate(7); } 
            else if (week === 2) { start.setDate(8); end.setDate(14); } 
            else if (week === 3) { start.setDate(15); end.setDate(21); } 
            else { start.setDate(22); end = new Date(year, month, 0); }
        } else if (type === 'all' || type === 'all_period') {
            start = new Date(2000, 0, 1);
            end = new Date(2100, 11, 31);
        }

        start.setHours(0,0,0,0);
        end.setHours(23,59,59,999);

        pgDateState = { type, start, end, label };
        
        if (currentReportDateTarget === 'pg') pgFilterDateText.innerText = label;
        else if (currentReportDateTarget === 'pb') pbFilterDateText.innerText = label;
        else if (currentReportDateTarget === 'cr') crFilterDateText.innerText = label;
        else if (currentReportDateTarget === 'pm') pmFilterDateText.innerText = label;
        else if (currentReportDateTarget === 'ex') exFilterDateText.innerText = label;
        else if (currentReportDateTarget === 'gn') gnFilterDateText.innerText = label;
        
        pgDateSelectionModal.style.display = 'none';
    });

    btnPgDateCancel.addEventListener('click', () => {
        pgDateSelectionModal.style.display = 'none';
    });

    // 2. Generación del Reporte
    btnGeneratePg.addEventListener('click', generatePgReport);

    async function generatePgReport() {
        pgTableBody.innerHTML = '<tr><td colspan="8" style="text-align:center;">Cargando...</td></tr>';

        const mode = currentPgMode || 'daily';
        const user = pgFilterUser.value;
        const dept = pgFilterDept.value;
        const muni = pgFilterMuni.value;
        const startDate = pgDateState.start;
        const endDate = pgDateState.end;

        if (!startDate || !endDate) {
            pgTableBody.innerHTML = '<tr><td colspan="8" style="text-align:center;">Seleccione un rango de fechas.</td></tr>';
            return;
        }

        try {
            const { data: { session } } = await sbClient.auth.getSession();
            const { data, error } = await sbClient.functions.invoke('pg', {
                body: { mode, startDate: startDate.toISOString(), endDate: endDate.toISOString(), user, dept, muni },
                headers: { Authorization: `Bearer ${session?.access_token}` }
            });

            if (error) throw error;

            currentPgReportData = data; // Guardar para exportar

            if (!data || data.length === 0) {
                pgTableBody.innerHTML = '<tr><td colspan="8" style="text-align:center;">No se encontraron registros.</td></tr>';
                return;
            }

            let html = '';
            data.forEach(row => {
                html += `<tr><td>${row.date}</td><td>${row.user}</td><td>${row.muni}</td><td>$${(row.cobro || 0).toLocaleString('es-CO')}</td><td>$${(row.gastos || 0).toLocaleString('es-CO')}</td><td>$${(row.creditos || 0).toLocaleString('es-CO')}</td><td>$${(row.ganancia || 0).toLocaleString('es-CO')}</td><td>$${(row.cobroReal || 0).toLocaleString('es-CO')}</td></tr>`;
            });
            pgTableBody.innerHTML = html;

        } catch (err) {
            console.error(err);
            pgTableBody.innerHTML = `<tr><td colspan="8" style="text-align:center; color:red;">Error: ${err.message}</td></tr>`;
        }
    }

    function showInputModal(title, label, initialValue, onConfirm) {
        const modalId = 'generic-input-modal';
        let modal = document.getElementById(modalId);

        if (modal) {
            modal.remove(); // Remove previous instance to avoid event listener issues
        }

        modal = document.createElement('div');
        modal.id = modalId;
        modal.className = 'modal'; // Use existing modal styles
        modal.style.cssText = 'display:flex; justify-content:center; align-items:center; z-index: 10001;';

        modal.innerHTML = `
            <div class="modal-content" style="max-width: 400px;">
                <span class="close-btn">&times;</span>
                <h3 style="margin-top:0; color:#16233c;">${title}</h3>
                <label for="generic-input-value" style="margin-top:15px;">${label}</label>
                <input type="number" id="generic-input-value" value="${initialValue}" step="any" style="margin-top:5px;">
                <div style="display: flex; justify-content: flex-end; gap: 10px; margin-top: 20px;">
                    <button id="btn-cancel-generic-input" class="btn btn-secondary">Cancelar</button>
                    <button id="btn-save-generic-input" class="btn btn-primary">Guardar</button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        const close = () => {
            const m = document.getElementById(modalId);
            if (m) m.style.display = 'none';
        };

        modal.querySelector('.close-btn').onclick = close;
        modal.querySelector('#btn-cancel-generic-input').onclick = close;
        
        modal.querySelector('#btn-save-generic-input').onclick = () => {
            const inputVal = document.getElementById('generic-input-value').value;
            const val = parseFloat(inputVal);
            if (isNaN(val)) {
                alert("Valor inválido. Por favor, ingrese un número.");
                return;
            }
            onConfirm(val);
            close();
        };
    }

    // Funciones globales para acciones P&G
    window.openPgInjection = async (reportId, userName, currentFinalBase, mode) => {
        const collection = mode === 'daily' ? 'reports' : 'wreports';

        // Leer el reporte para verificar si ya existe una base original guardada.
        const { data: report, error: reportError } = await sbClient.from(collection).select('og_final_base, final_base').eq('report_number', reportId).single();
        if (reportError) {
            return alert("Error al leer el reporte para inyección: " + reportError.message);
        }

        showInputModal('Inyectar / Editar Base Final', 'Nuevo valor para la Base Final:', currentFinalBase, (val) => {
            const updatePayload = {
                final_base: val
            };

            // Si no hay una base original guardada (es la primera inyección),
            // se guarda la base final calculada actual como la original.
            if (report.og_final_base === null) {
                updatePayload.og_final_base = parseFloat(report.final_base); // Usar el valor de la BD, no el del botón
            }
            
            // Establecer contexto para el modal
            currentReportContext = { reportId, collection, userName, mode };

            // Llamar al modal de confirmación
            showMandatoryUpdateModal('Inyección (Nueva Base Final)', val, val, async () => {
                const { error } = await sbClient.from(collection).update(updatePayload).eq('report_number', reportId);

                if (error) {
                    alert("Error al actualizar: " + error.message);
                } else {
                    // Refrescar tablas sin alerta
                    if (document.getElementById('pg-report-box').style.display === 'block') generatePgReport();
                    if (document.getElementById('gn-report-box').style.display === 'block') generateGnReport();
                }
            });
        });
    };

    window.editFinalBaseDirectly = async (reportId, userName, currentFinalBase, mode) => {
        showInputModal('Editar Base Final Directamente', 'Nuevo valor para la Base Final:', currentFinalBase, (val) => {
            const collection = mode === 'daily' ? 'reports' : 'wreports';
            
            // Establecer contexto para el modal
            currentReportContext = { reportId, collection, userName, mode };

            // Llamar al modal de confirmación
            showMandatoryUpdateModal('Edición Base Final', val, val, async () => {
                const { error } = await sbClient.from(collection).update({
                    final_base: val
                }).eq('report_number', reportId);

                if (error) {
                    alert("Error al actualizar: " + error.message);
                } else {
                    // Refrescar tablas sin alerta
                    if (document.getElementById('gn-report-box').style.display === 'block') generateGnReport();
                }
            });
        });
    };

    window.editInitialBase = async (reportId, currentVal, mode) => {
        showInputModal('Editar Base Inicial', 'Nuevo valor para la Base Inicial:', currentVal, async (val) => {
            const collection = mode === 'daily' ? 'reports' : 'wreports';

            try {
                // Obtener reporte para recalcular final_base y obtener contexto
                const { data: report, error: reportError } = await sbClient.from(collection).select('*').eq('report_number', reportId).single();
                if (reportError || !report) throw new Error(reportError?.message || "Reporte no encontrado");

                // Establecer contexto para el modal
                currentReportContext = { reportId, collection, userName: report.user_name, mode };

                const payments = parseFloat(report.payments_report) || 0;
                const credits = parseFloat(report.credits_report) || 0;
                const expenses = parseFloat(report.expense_report) || 0;
                const newFinalBase = (payments + val) - (credits + expenses);

                // Llamar al modal de confirmación
                showMandatoryUpdateModal('Base Inicial', val, newFinalBase, async () => {
                    const { error } = await sbClient.from(collection).update({
                        initial_base: val,
                        final_base: newFinalBase
                    }).eq('report_number', reportId);

                    if (error) {
                        alert("Error al actualizar: " + error.message);
                    } else {
                        // Refrescar tablas sin alerta
                        if (document.getElementById('pg-report-box').style.display === 'block') generatePgReport();
                        if (document.getElementById('gn-report-box').style.display === 'block') generateGnReport();
                    }
                });

            } catch (e) {
                alert("Error preparando la actualización: " + e.message);
            }
        });
    };

    window.openPgExpenses = async (reportId, userName, dateStr, mode) => {
        const collection = mode === 'daily' ? 'expenses' : 'wexpenses';
        const datePart = dateStr.split('T')[0]; // YYYY-MM-DD
        
        // Buscar gastos que coincidan con usuario y fecha
        const { data: expenses, error } = await sbClient.from(collection)
            .select('*')
            .eq('user_name', userName)
            .gte('created_at', datePart + 'T00:00:00')
            .lte('created_at', datePart + 'T23:59:59');
            
        if (error) return alert("Error cargando gastos: " + error.message);
        
        if (!expenses || expenses.length === 0) return alert("No se encontraron registros de gastos para este reporte.");
        
        const exp = expenses[0];
        
        currentExpEditData = { ...exp, reportId, collection, parentCollection: mode === 'daily' ? 'reports' : 'wreports' };
        
        editExpGas.value = exp.fuel || 0;
        editExpLunch.value = exp.lunch || 0;
        
        if (exp.others && Array.isArray(exp.others) && exp.others.length > 0) {
            editExpOtherVal.value = exp.others[0] || 0;
            editExpOtherDesc.value = exp.others[1] || '';
        } else {
            editExpOtherVal.value = 0;
            editExpOtherDesc.value = '';
        }
        
        const total = (parseFloat(exp.fuel)||0) + (parseFloat(exp.lunch)||0) + (parseFloat(exp.others?.[0])||0);
        const display = document.getElementById('edit-exp-total-display');
        if(display) display.innerText = '$ ' + total.toLocaleString();
        
        // Configurar contexto global para el modal de gastos
        currentReportContext = {
            reportId,
            collection,
            userName,
            dateStr,
            mode
        };

        // Resetear bandera y configurar interceptor
        pendingReportUpdate = false;
        setupModalCloseInterceptor(editExpensesModal, 'expenses');

        editExpensesModal.style.display = 'block';
    };

    // 3. Descarga Excel
    btnDownloadPg.addEventListener('click', () => {
        const dataToExport = currentPgReportData.map(row => ({
            ...row,
            // Las fechas pueden ser etiquetas de semana, se dejan como texto.
            cobro: parseFloat(row.cobro) || 0,
            gastos: parseFloat(row.gastos) || 0,
            creditos: parseFloat(row.creditos) || 0,
            ganancia: parseFloat(row.ganancia) || 0,
            cobroReal: parseFloat(row.cobroReal) || 0
        }));
        const mapping = {
            date: 'FECHA',
            user: 'ASESOR',
            muni: 'MUNICIPIO',
            cobro: 'COBRO REAL',
            gastos: 'GASTOS',
            creditos: 'CREDITOS',
            ganancia: 'GANANCIA',
            cobroReal: 'RECAUDO'
        };
        exportToExcel(dataToExport, 'Reporte_PG', mapping);
    });

    // ==========================================
    // LÓGICA INFORME COMPORTAMIENTO DE PAGO (PB)
    // ==========================================

    btnPbDaily.addEventListener('click', () => {
        currentPbMode = 'daily';
        btnPbDaily.className = 'btn-primary';
        btnPbWeekly.className = 'btn-secondary';
        pbFilterDateText.innerText = 'Seleccionar Fecha';
    });

    btnPbWeekly.addEventListener('click', () => {
        currentPbMode = 'weekly';
        btnPbWeekly.className = 'btn-primary';
        btnPbDaily.className = 'btn-secondary';
        pbFilterDateText.innerText = 'Seleccionar Fecha';
    });

    async function loadPbFilters() {
        const { data: users } = await sbClient.from('users').select('name')
            .neq('role', 'Administrador').neq('role', 'Administrador maestro').neq('role', 'Desarrollador');
        pbFilterUser.innerHTML = '<option value="">Todos los Asesores</option>';
        if (users) users.forEach(u => pbFilterUser.innerHTML += `<option value="${u.name}">${u.name}</option>`);

        const { data: deptsData } = await sbClient.from('municipalities').select('id, municipalities');
        pbFilterDept.innerHTML = '<option value="">Todos los Departamentos</option>';
        if (deptsData) {
            deptsData.forEach(dept => {
                const option = document.createElement('option');
                option.value = dept.id;
                option.textContent = dept.id;
                pbFilterDept.appendChild(option);
            });
            if (deptsData.length === 1) {
                pbFilterDept.value = deptsData[0].id;
                pbFilterDept.disabled = true;
                pbFilterDept.dispatchEvent(new Event('change'));
            } else {
                pbFilterDept.disabled = false;
            }
        }
    }

    pbFilterDept.addEventListener('change', async () => {
        pbFilterMuni.innerHTML = '<option value="">Todos los Municipios</option>';
        if (!pbFilterDept.value) return;
        const { data } = await sbClient.from('municipalities').select('municipalities').eq('id', pbFilterDept.value).single();
        if (data) data.municipalities.forEach(m => pbFilterMuni.innerHTML += `<option value="${m}">${m}</option>`);
    });

    pbFilterUser.addEventListener('change', () => {
        updateUserMunicipalities(pbFilterUser.value, 'pb-filter-muni');
    });

    btnGeneratePb.addEventListener('click', generatePaymentBehaviorReport);

    async function generatePaymentBehaviorReport() {
        pbTableBody.innerHTML = '<tr><td colspan="9" style="text-align:center;">Cargando...</td></tr>';

        const mode = currentPbMode || 'daily';
        const user = pbFilterUser.value;
        const dept = pbFilterDept.value;
        const muni = pbFilterMuni.value;
        const startDate = pgDateState.start;
        const endDate = pgDateState.end;

        if (!startDate || !endDate) {
            pbTableBody.innerHTML = '<tr><td colspan="9" style="text-align:center;">Seleccione un rango de fechas.</td></tr>';
            return;
        }

        try {
            const { data: { session } } = await sbClient.auth.getSession();
            const { data, error } = await sbClient.functions.invoke('payment-behavior', {
                body: { mode, startDate: startDate.toISOString(), endDate: endDate.toISOString(), user, dept, muni },
                headers: { Authorization: `Bearer ${session?.access_token}` }
            });

            if (error) throw error;

            // Post-process for export (add dateObj for Excel sorting if needed)
            currentPbReportData = data.map(r => {
                // Try to parse dateStr back to object for export logic
                let dObj = null;
                if (r.dateStr.includes('Semana')) {
                    // Weekly label, keep null or approx
                } else {
                    const [d, m, y] = r.dateStr.split('-').map(Number);
                    dObj = new Date(y, m - 1, d);
                }
                return { ...r, dateObj: dObj };
            });

            if (!data || data.length === 0) {
                pbTableBody.innerHTML = '<tr><td colspan="9" style="text-align:center;">Todos los clientes realizaron sus pagos en las fechas seleccionadas.</td></tr>';
                return;
            }

            let html = '';
            data.forEach(row => {
                html += `<tr>
                    <td>${row.name || 'N/A'}</td>
                    <td>${row.municipality || 'N/A'}</td>
                    <td>${row.asesor_name || 'N/A'}</td>
                    <td>${row.saleDate}</td>
                    <td>$${(row.nuevos || 0).toLocaleString('es-CO')}</td>
                    <td>$${(row.represtes || 0).toLocaleString('es-CO')}</td>
                    <td>$${(row.valor_cuota || 0).toLocaleString('es-CO')}</td>
                    <td style="text-align:center; cursor:pointer;" onclick="toggleMissedPaymentDetails(this.querySelector('i'), '${row.id}', '${row.dateStr}', '${mode === 'weekly' ? 'Semanal' : 'Diario'}')">
                        <i class="fas fa-chevron-down dropdown-toggle"></i>
                    </td>
                    <td>$${(row.balance || 0).toLocaleString('es-CO')}</td>
                </tr>`;
            });
            pbTableBody.innerHTML = html;

        } catch (err) {
            console.error(err);
            pbTableBody.innerHTML = `<tr><td colspan="9" style="text-align:center; color:red;">Error: ${err.message}</td></tr>`;
        }
    }

    // Helper to get last N payments for dropdown
    async function getLastPaymentsForDebtor(debtorId, refDate, n, isWeekly) {
        try {
            const { data: paymentsSnap, error } = await sbClient
                .from('payments')
                .select('*')
                .eq('debtor_number', debtorId);
            
            if (error) throw error;

            let payments = paymentsSnap.map(d => {
                const dateObj = parseDateValue(d.payment_date) || (d.created_at ? new Date(d.created_at) : new Date(0));
                return { ...d, dateObj };
            });

            // Filter payments strictly BEFORE the reference date/time
            if (refDate) {
                payments = payments.filter(p => p.dateObj < refDate);
            }

            // Sort descending
            payments.sort((a, b) => b.dateObj - a.dateObj);
            payments = payments.slice(0, n);

            const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
            
            return payments.map(p => {
                const d = p.dateObj;
                const dateStr = `${String(d.getDate()).padStart(2,'0')}-${String(d.getMonth()+1).padStart(2,'0')}-${d.getFullYear()}`;
                
                let weekNum = 0;
                if (isWeekly) {
                    const day = d.getDate();
                    if (day <= 7) weekNum = 1;
                    else if (day <= 14) weekNum = 2;
                    else if (day <= 21) weekNum = 3;
                    else weekNum = 4;
                }

                return {
                    date: dateStr,
                    quotaVal: Number(p.valor_cuota) || 0,
                    amount: Number(p.payment_amount) || 0,
                    weekNum: weekNum,
                    month: months[d.getMonth()]
                };
            });
        } catch (e) {
            console.error("Error fetching history:", e);
            return [];
        }
    }

    // Expose toggle function globally
    window.toggleMissedPaymentDetails = async (btn, debtorId, dateStr, mode) => {
        const tr = btn.closest('tr');
        const nextTr = tr.nextElementSibling;
        
        if (nextTr && nextTr.classList.contains('history-dropdown-row')) {
            nextTr.remove();
            btn.classList.remove('fa-chevron-up');
            btn.classList.add('fa-chevron-down');
            return;
        }

        btn.classList.remove('fa-chevron-down');
        btn.classList.add('fa-chevron-up');

        const newRow = document.createElement('tr');
        newRow.className = 'history-dropdown-row';
        const cell = document.createElement('td');
        cell.colSpan = 9;
        cell.innerHTML = '<div class="history-table-container"><div class="spinner" style="width:20px; height:20px; margin:0 auto;"></div></div>';
        newRow.appendChild(cell);
        tr.parentNode.insertBefore(newRow, tr.nextSibling);

        // Parse dateStr back to object for comparison
        let refDate = new Date();
        if (dateStr.includes('-')) {
             const [d, m, y] = dateStr.split('-').map(Number);
             refDate = new Date(y, m - 1, d);
        }
        // If weekly label, refDate is roughly now or end of that week, logic handles it loosely

        const isWeekly = mode === 'Semanal';
        const limit = isWeekly ? 4 : 15;

        const history = await getLastPaymentsForDebtor(debtorId, refDate, limit, isWeekly);
        
        const { data: debtorData } = await sbClient.from('debtors').select('*').eq('debtor_number', debtorId).single();
        currentHistoryData = { debtor: { ...debtorData, name: debtorData.name || 'Cliente' }, payments: history, mode: mode };

        let tableHtml = `<div style="display:flex; justify-content:flex-end; margin-bottom:8px;"><button class="history-download-btn" onclick="currentDownloadContext='payment_behavior_history'; downloadFormatModal.style.display='flex';"><i class="fas fa-download"></i></button></div>`;
        tableHtml += `<table class="history-table"><thead><tr>`;
        
        if (isWeekly) {
            tableHtml += `<th>Semana</th><th>Mes</th><th>Fecha Pago</th><th>Valor Cuota</th><th>Abono</th>`;
        } else {
            tableHtml += `<th>Fecha Pago</th><th>Valor Cuota</th><th>Abono</th>`;
        }
        tableHtml += `</tr></thead><tbody>`;

        if (history.length === 0) {
            tableHtml += `<tr><td colspan="${isWeekly?5:3}" style="text-align:center;">No hay pagos anteriores recientes.</td></tr>`;
        } else {
            history.forEach(h => {
                if (isWeekly) {
                    tableHtml += `<tr><td>${h.weekNum}</td><td>${h.month}</td><td>${h.date}</td><td>$${h.quotaVal.toLocaleString('es-CO')}</td><td>$${h.amount.toLocaleString('es-CO')}</td></tr>`;
                } else {
                    tableHtml += `<tr><td>${h.date}</td><td>$${h.quotaVal.toLocaleString('es-CO')}</td><td>$${h.amount.toLocaleString('es-CO')}</td></tr>`;
                }
            });
        }
        tableHtml += `</tbody></table>`;

        cell.querySelector('.history-table-container').innerHTML = tableHtml;
    };

    btnDownloadPb.addEventListener('click', async () => {
        if (!currentPbReportData || currentPbReportData.length === 0) {
            return alert("No hay datos para exportar.");
        }

        const mode = currentPbMode;
        const refDate = pgDateState.end || new Date();

        if (mode !== 'daily' && mode !== 'weekly') {
            // Fallback to original simple export
            const dataToExport = currentPbReportData.map(row => ({
                name: row.name,
                municipality: row.municipality,
                asesor_name: row.asesor_name,
                saleDate: parseDateValue(row.saleDate),
                missedDate: row.dateStr.includes('Semana') ? row.dateStr : parseDateValue(row.dateStr),
                nuevos: parseFloat(row.nuevos) || 0,
                represtes: parseFloat(row.represtes) || 0,
                valor_cuota: parseFloat(row.valor_cuota) || 0,
                balance: parseFloat(row.balance) || 0
            }));
            const mapping = {
                name: 'CLIENTE', municipality: 'MUNICIPIO', asesor_name: 'ASESOR',
                saleDate: 'FECHA PRESTAMO', missedDate: 'FECHA FALTA', nuevos: 'NUEVOS',
                represtes: 'REPRESTES', valor_cuota: 'VALOR CUOTA', balance: 'SALDO'
            };
            exportToExcel(dataToExport, 'Reporte_Comportamiento_Pago', mapping);
            return;
        }

        // --- New logic for daily/weekly modes ---

        // 1. Get all payments for all clients in the report.
        const debtorIds = currentPbReportData.map(row => row.id);
        const { data: allPayments, error: paymentsError } = await sbClient
            .from('payments')
            .select('debtor_number, payment_amount, payment_date, created_at')
            .in('debtor_number', debtorIds);

        if (paymentsError) {
            console.error("Error fetching payments for export:", paymentsError);
            return alert("Error al obtener historial de pagos.");
        }

        // 2. Group payments by debtor and sort them by date (desc)
        const paymentsByDebtor = new Map();
        (allPayments || []).forEach(p => {
            const debtorId = p.debtor_number;
            if (!paymentsByDebtor.has(debtorId)) {
                paymentsByDebtor.set(debtorId, []);
            }
            const dateObj = parseDateValue(p.payment_date || p.created_at);
            if (dateObj) {
                dateObj.setHours(0, 0, 0, 0);
                paymentsByDebtor.get(debtorId).push({
                    date: dateObj,
                    amount: Number(p.payment_amount) || 0
                });
            }
        });
        paymentsByDebtor.forEach(payments => payments.sort((a, b) => b.date - a.date));

        // 3. Determine the date headers based on the mode
        let sortedDateHeaders = [];
        const allDates = new Set();

        if (mode === 'daily') {
            // Get all payment dates before or on the refDate
            (allPayments || []).forEach(p => {
                const dateObj = parseDateValue(p.payment_date || p.created_at);
                if (dateObj && dateObj <= refDate) {
                    dateObj.setHours(0, 0, 0, 0);
                    allDates.add(dateObj.getTime());
                }
            });
            
            sortedDateHeaders = Array.from(allDates)
                .map(time => new Date(time))
                .sort((a, b) => b - a) // Descending to get the latest
                .slice(0, 15)         // Take the last 15
                .sort((a, b) => a - b); // Ascending for column order
        } else { // weekly mode
            const monthAgo = new Date(refDate);
            monthAgo.setDate(monthAgo.getDate() - 30);

            // For each client, get their last 4 payments within the window
            paymentsByDebtor.forEach(payments => {
                const clientPaymentsInWindow = payments.filter(p => p.date >= monthAgo && p.date <= refDate);
                const last4 = clientPaymentsInWindow.slice(0, 4);
                last4.forEach(p => allDates.add(p.date.getTime()));
            });

            sortedDateHeaders = Array.from(allDates).map(time => new Date(time)).sort((a, b) => a - b);
        }

        // 4. Build the Excel data
        const baseHeaders = ['CLIENTE', 'MUNICIPIO', 'ASESOR', 'FECHA PRESTAMO', 'FECHA FALTA', 'NUEVOS', 'REPRESTES', 'VALOR CUOTA', 'SALDO'];
        const finalHeaders = [...baseHeaders, ...sortedDateHeaders];

        const dataRows = currentPbReportData.map(clientReportData => {
            const clientPaymentHistory = paymentsByDebtor.get(clientReportData.id) || [];
            const paymentMap = new Map(clientPaymentHistory.map(p => [p.date.getTime(), p.amount]));
            
            const baseRowData = [
                clientReportData.name, clientReportData.municipality, clientReportData.asesor_name,
                parseDateValue(clientReportData.saleDate),
                clientReportData.dateStr.includes('Semana') ? clientReportData.dateStr : parseDateValue(clientReportData.dateStr),
                parseFloat(clientReportData.nuevos) || 0, parseFloat(clientReportData.represtes) || 0,
                parseFloat(clientReportData.valor_cuota) || 0, parseFloat(clientReportData.balance) || 0
            ];
            
            const paymentRowData = sortedDateHeaders.map(headerDate => paymentMap.get(headerDate.getTime()) ?? '');
            return [...baseRowData, ...paymentRowData];
        });

        // 5. Generate the Excel file
        const sheetData = [finalHeaders, ...dataRows];
        const ws = XLSX.utils.aoa_to_sheet(sheetData);

        const range = XLSX.utils.decode_range(ws['!ref']);
        for (let R = 0; R <= range.e.r; ++R) {
            for (let C = 0; C <= range.e.c; ++C) {
                const cell = ws[XLSX.utils.encode_cell({ c: C, r: R })];
                if (cell && cell.v instanceof Date) {
                    cell.t = 'd';
                    cell.z = 'dd/mm/yyyy';
                }
            }
        }

        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Reporte");
        XLSX.writeFile(wb, `Reporte_Comportamiento_Pago.xlsx`);
    });

    // ==========================================
    // LÓGICA INFORME DE CRÉDITOS (CR)
    // ==========================================

    btnCrDaily.addEventListener('click', () => {
        currentCrMode = 'daily';
        btnCrDaily.className = 'btn-primary';
        btnCrWeekly.className = 'btn-secondary';
        crFilterDateText.innerText = 'Seleccionar Fecha';
    });

    btnCrWeekly.addEventListener('click', () => {
        currentCrMode = 'weekly';
        btnCrWeekly.className = 'btn-primary';
        btnCrDaily.className = 'btn-secondary';
        crFilterDateText.innerText = 'Seleccionar Fecha';
    });

    async function loadCrFilters() {
        const { data: users } = await sbClient.from('users').select('name')
            .neq('role', 'Administrador').neq('role', 'Administrador maestro').neq('role', 'Desarrollador');
        crFilterUser.innerHTML = '<option value="">Todos los Asesores</option>';
        if (users) users.forEach(u => crFilterUser.innerHTML += `<option value="${u.name}">${u.name}</option>`);

        const { data: deptsData } = await sbClient.from('municipalities').select('id, municipalities');
        crFilterDept.innerHTML = '<option value="">Todos los Departamentos</option>';
        if (deptsData) {
            deptsData.forEach(dept => {
                const option = document.createElement('option');
                option.value = dept.id;
                option.textContent = dept.id;
                crFilterDept.appendChild(option);
            });
            if (deptsData.length === 1) {
                crFilterDept.value = deptsData[0].id;
                crFilterDept.disabled = true;
                crFilterDept.dispatchEvent(new Event('change'));
            } else {
                crFilterDept.disabled = false;
            }
        }
    }

    crFilterDept.addEventListener('change', async () => {
        crFilterMuni.innerHTML = '<option value="">Todos los Municipios</option>';
        if (!crFilterDept.value) return;
        const { data } = await sbClient.from('municipalities').select('municipalities').eq('id', crFilterDept.value).single();
        if (data) data.municipalities.forEach(m => crFilterMuni.innerHTML += `<option value="${m}">${m}</option>`);
    });

    crFilterUser.addEventListener('change', () => {
        updateUserMunicipalities(crFilterUser.value, 'cr-filter-muni');
    });

    btnGenerateCr.addEventListener('click', generateCreditsReport);

    btnCrVencidos?.addEventListener('click', async () => {
        if (!currentCrMode) {
            alert('Por favor, seleccione un modo (Diario o Semanal) antes de buscar vencidos.');
            return;
        }

        crTableBody.innerHTML = '<tr><td colspan="9" style="text-align: center;">Buscando créditos vencidos...</td></tr>';
        crTotalDisplay.innerText = '$0';

        try {
            let query = sbClient
                .from('debtors')
                .select('*')
                .gt('balance', 0);

            const user = crFilterUser.value;
            const muni = crFilterMuni.value;
            const dept = crFilterDept.value;

            if (user) {
                query = query.eq('asesor_name', user);
            }
            if (muni) {
                query = query.eq('municipality', muni);
            } else if (dept) {
                const { data: deptData } = await sbClient.from('municipalities').select('municipalities').eq('id', dept).single();
                if (deptData && deptData.municipalities) {
                    query = query.in('municipality', deptData.municipalities);
                }
            }

            const { data: filteredCredits, error } = await query;

            if (error) throw error;

            if (!filteredCredits || filteredCredits.length === 0) {
                crTableBody.innerHTML = '<tr><td colspan="9" style="text-align: center;">No se encontraron créditos activos con los filtros aplicados.</td></tr>';
                return;
            }

            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const targetTerm = currentCrMode === 'weekly' ? 'SEMANAL' : 'DIARIO';

            const vencidos = filteredCredits.filter(c => {
                const pTerm = Array.isArray(c.payment_term) ? c.payment_term[0] : c.payment_term;
                const termString = String(pTerm || '').toUpperCase();

                if (termString !== targetTerm) return false;

                const saleDate = parseDateValue(c.sale_date || c.created_at);
                const numPayments = Number(c.number_of_payments) || 0;

                if (saleDate && numPayments > 0 && pTerm) {
                    let expirationDate = new Date(saleDate);

                    if (termString === 'DIARIO') {
                        expirationDate.setDate(expirationDate.getDate() + numPayments);
                    } else if (termString === 'SEMANAL') {
                        expirationDate.setDate(expirationDate.getDate() + (numPayments * 7));
                    } else {
                        return false;
                    }
                    return expirationDate < today;
                }
                return false;
            });

            currentCrReportData = vencidos;
            renderCrTable(vencidos);
            btnCrClearSearch.style.display = 'inline-block';

        } catch (err) {
            console.error("Error fetching overdue credits:", err);
            crTableBody.innerHTML = `<tr><td colspan="9" style="text-align: center; color: red;">Error al buscar créditos vencidos: ${err.message}</td></tr>`;
        }
    });

    async function generateCreditsReport() {
        crTableBody.innerHTML = '<tr><td colspan="9">Cargando...</td></tr>';
        crTotalDisplay.innerText = '$0';
        btnMassEditCrDate.style.display = 'none';
        document.getElementById('cr-select-all').checked = false;
        crSearchInput.value = '';
        btnCrClearSearch.style.display = 'none';

        let query = sbClient.from('debtors').select('*');

        if (pgDateState.start && pgDateState.end) {
            query = query.gte('created_at', pgDateState.start.toISOString())
                         .lte('created_at', pgDateState.end.toISOString());
        }

        if (crFilterUser.value) query = query.eq('asesor_name', crFilterUser.value);
        
        if (crFilterMuni.value) {
            query = query.eq('municipality', crFilterMuni.value);
        } else if (crFilterDept.value) {
             const { data: deptData } = await sbClient.from('municipalities').select('municipalities').eq('id', crFilterDept.value).single();
             if (deptData && deptData.municipalities) {
                 query = query.in('municipality', deptData.municipalities);
             }
        }

        const { data: credits, error } = await query;

        if (error) {
            crTableBody.innerHTML = `<tr><td colspan="9">Error: ${error.message}</td></tr>`;
            return;
        }

        // Filtrar por modo (Diario/Semanal)
        const isWeekly = currentCrMode === 'weekly';
        const targetTerm = isWeekly ? 'SEMANAL' : 'DIARIO';

        const filteredCredits = (credits || []).filter(c => {
            const term = c.payment_term;
            if (!term) return false;
            if (Array.isArray(term)) {
                return term.some(t => String(t).toUpperCase() === targetTerm);
            }
            return String(term).toUpperCase() === targetTerm;
        });

        currentCrReportData = filteredCredits;
        renderCrTable(filteredCredits);
    }

    function renderCrTable(data) {
        crTableBody.innerHTML = '';
        let total = 0;

        if (!data || data.length === 0) {
            crTableBody.innerHTML = '<tr><td colspan="9">No se encontraron registros.</td></tr>';
            return;
        }

        if (data.length > 0) {
            btnMassEditCrDate.style.display = 'inline-block';
        }

        data.forEach(c => {
            const val = parseFloat(c.sale_value) || 0;
            total += val;
            const isNew = (c.credit_type || '').toLowerCase().includes('nuevo');
            const debtorId = c.debtor_number;

            // Lógica de ESTADO (Semaforización)
            let estado = 'GRIS';
            let estadoColor = '#95a5a6'; // Gris por defecto
            const pTerm = Array.isArray(c.payment_term) ? c.payment_term[0] : c.payment_term;
            const remaining = Number(c.remaining_payments) || 0;
            const saleDate = parseDateValue(c.sale_date || c.created_at);
            const numPayments = Number(c.number_of_payments) || 0;
            const saldo = Number(c.balance) || 0;

            if (saleDate && numPayments > 0 && pTerm) {
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                let expirationDate = new Date(saleDate);

                if (String(pTerm).toUpperCase() === 'DIARIO') {
                    expirationDate.setDate(expirationDate.getDate() + numPayments);
                } else if (String(pTerm).toUpperCase() === 'SEMANAL') {
                    expirationDate.setDate(expirationDate.getDate() + (numPayments * 7));
                }

                if (expirationDate < today && saldo > 0) {
                    estado = 'ROJO';
                    estadoColor = '#e74c3c';
                }
            }

            if (estado !== 'ROJO') {
                if ((String(pTerm).toUpperCase() === 'DIARIO' && remaining === 1) || (String(pTerm).toUpperCase() === 'SEMANAL' && remaining === 5)) {
                    estado = 'VERDE';
                    estadoColor = '#2ecc71';
                } else if ((String(pTerm).toUpperCase() === 'DIARIO' && saldo === 20000) || (String(pTerm).toUpperCase() === 'SEMANAL' && saldo === 40000)) {
                    estado = 'AMARILLO';
                    estadoColor = '#f1c40f';
                }
            }
            
            const row = document.createElement('tr');
            row.innerHTML = `
                <td style="text-align: center;"><input type="checkbox" class="cr-row-checkbox" value="${debtorId}"></td>
                <td>${c.name || ''}</td>
                <td>${new Date(c.created_at).toLocaleDateString()}</td>
                <td>${c.asesor_name || ''}</td>
                <td>${c.municipality || ''}</td>
                <td>${isNew ? '$' + val.toLocaleString() : '-'}</td>
                <td>${!isNew ? '$' + val.toLocaleString() : '-'}</td>
                <td style="text-align: center;">
                    <span style="background-color: ${estadoColor}; color: white; padding: 4px 8px; border-radius: 12px; font-weight: bold; font-size: 0.85em;">
                        ${estado}
                    </span>
                </td>
                <td>
                    <button class="btn-action-small btn-primary" onclick="openCrEditModal('${debtorId}')" title="Editar Crédito"><i class="fas fa-pencil-alt"></i></button>
                </td>
            `;
            crTableBody.appendChild(row);
        });
        crTotalDisplay.innerText = '$' + total.toLocaleString();

        // Eventos checkboxes
        document.querySelectorAll('.cr-row-checkbox').forEach(cb => {
            cb.addEventListener('change', updateCrSelectionState);
        });
    }

    // Lógica de Búsqueda en CR
    crSearchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') performCrSearch();
    });

    function performCrSearch() {
        const searchTerm = normalizeText(crSearchInput.value);
        if (!searchTerm) return;

        const filteredData = currentCrReportData.filter(c => 
            (c.name && normalizeText(c.name).includes(searchTerm)) || 
            (c.cedula && String(c.cedula).includes(searchTerm))
        );
        renderCrTable(filteredData);
        btnCrClearSearch.style.display = 'inline-block';
    }

    btnCrClearSearch.addEventListener('click', () => {
        crSearchInput.value = '';
        btnCrClearSearch.style.display = 'none';
        renderCrTable(currentCrReportData);
    });

    // Evento Seleccionar Todos CR
    document.getElementById('cr-select-all').addEventListener('change', (e) => {
        const checked = e.target.checked;
        document.querySelectorAll('.cr-row-checkbox').forEach(cb => cb.checked = checked);
        updateCrSelectionState();
    });

    function updateCrSelectionState() {
        const selected = document.querySelectorAll('.cr-row-checkbox:checked');
        selectedCrIds = Array.from(selected).map(cb => cb.value);
        btnMassEditCrDate.innerHTML = selectedCrIds.length > 0 ? `<i class="fas fa-edit"></i> Edición Masiva (${selectedCrIds.length})` : '<i class="fas fa-edit"></i> Edición Masiva';
    }

    // Abrir modal edición masiva CR
    btnMassEditCrDate.addEventListener('click', () => {
        if (selectedCrIds.length === 0) return alert('Seleccione al menos un crédito.');
        // Resetear inputs del nuevo modal
        massEditCrDateInput.value = '';
        massEditCrInterestsInput.value = '';
        massEditCrInstallmentsInput.value = '';
        massEditCrModal.style.display = 'block';
    });

    // Guardar cambios de edición masiva de créditos
    btnConfirmMassCrEdit.addEventListener('click', async () => {
        const newDateVal = massEditCrDateInput.value;
        const interestIncrease = parseFloat(massEditCrInterestsInput.value) || 0;
        const installmentIncrease = parseInt(massEditCrInstallmentsInput.value) || 0;
    
        if (!newDateVal && interestIncrease === 0 && installmentIncrease === 0) {
            return alert('No se ha especificado ningún cambio.');
        }
    
        const count = selectedCrIds.length;
        if (!confirm(`¿Está seguro de aplicar estos cambios a ${count} créditos?`)) return;
    
        btnConfirmMassCrEdit.disabled = true;
        btnConfirmMassCrEdit.innerText = 'Actualizando...';
    
        try {
            // 1. Obtener los créditos activos seleccionados para calcular los nuevos valores
            const { data: activeCredits, error: fetchError } = await sbClient
                .from('debtors')
                .select('debtor_number, interests, balance, remaining_payments, number_of_payments, created_at')
                .in('debtor_number', selectedCrIds);

            if (fetchError) throw fetchError;

            if (activeCredits && activeCredits.length > 0) {
                // 2. Mapear los datos incluyendo los campos obligatorios para el upsert (debtor_number y created_at)
                const updates = activeCredits.map(credit => {
                    const updateObj = {
                        debtor_number: credit.debtor_number,
                        interests: (parseFloat(credit.interests) || 0) + interestIncrease,
                        balance: (parseFloat(credit.balance) || 0) + interestIncrease,
                        created_at: credit.created_at, // Crucial para evitar el error de "null value violates not-null constraint"
                        remaining_payments: (parseInt(credit.remaining_payments) || 0) + installmentIncrease,
                        number_of_payments: (parseInt(credit.number_of_payments) || 0) + installmentIncrease
                    };

                    if (newDateVal) {
                        const [y, m, d] = newDateVal.split('-');
                        updateObj.sale_date = `${d}-${m}-${y}`;
                        updateObj.created_at = new Date(parseInt(y), parseInt(m) - 1, parseInt(d), 12, 0, 0).toISOString();
                    }
                    return updateObj;
                });

                // 3. Ejecutar la actualización masiva directamente
                const { error: updateError } = await sbClient.from('debtors').upsert(updates, { onConflict: 'debtor_number' });
                if (updateError) throw updateError;
            }
    
            alert('Actualización masiva completada exitosamente.');
            massEditCrModal.style.display = 'none';
            generateCreditsReport(); // Refresh the table
    
        } catch (err) {
            alert('Error durante la actualización masiva: ' + (err.message));
        } finally {
            btnConfirmMassCrEdit.disabled = false;
            btnConfirmMassCrEdit.innerText = 'Aplicar Cambios';
        }
    });

    // Abrir modal edición individual CR
    window.openCrEditModal = async (debtorNumber) => {
        const { data: credit, error } = await sbClient.from('debtors').select('*').eq('debtor_number', debtorNumber).single();
        
        if (error || !credit) return alert('Error al cargar crédito: ' + (error?.message || 'No encontrado'));

        currentCrEditData = credit;
        document.getElementById('edit-cr-modal-title').innerText = `Edicion (credito) de ${credit.name || 'N/A'}`;

        // Pre-llenar campos
        const dateObj = parseDateValue(credit.sale_date || credit.created_at);
        editCrDate.value = dateObj ? getLocalDateKey(dateObj) : '';
        
        editCrValue.value = credit.sale_value;
        editCrInterests.value = credit.interests;
        editCrQuota.value = credit.valor_cuota;
        editCrBalance.value = credit.balance;
        editCrType.value = credit.credit_type || 'Nuevo';
        editCrTerm.value = (Array.isArray(credit.payment_term) ? credit.payment_term[0] : credit.payment_term) || 'Diario';

        // Cargar municipios y asesores
        const loadLocationData = async () => {
            const { data: deptsData } = await sbClient.from('municipalities').select('municipalities');
            const allMunis = deptsData ? deptsData.flatMap(d => d.municipalities) : [];
            allMunis.sort();

            editCrMunicipality.innerHTML = '<option value="">Seleccione...</option>';
            allMunis.forEach(m => {
                const opt = document.createElement('option');
                opt.value = m;
                opt.textContent = m;
                editCrMunicipality.appendChild(opt);
            });
            if (credit.municipality) editCrMunicipality.value = credit.municipality;

            const loadAdvisors = async (muni) => {
                editCrAdvisor.innerHTML = '<option value="">Cargando...</option>';
                if (!muni) return;
                const { data: advisors } = await sbClient.from('users').select('name').contains('assigned_municipality', [muni])
                    .not('role', 'in', '("Administrador", "Administrador maestro", "Desarrollador")');
                
                editCrAdvisor.innerHTML = '<option value="">Seleccione asesor</option>';
                if (advisors) {
                    advisors.forEach(adv => {
                        const opt = document.createElement('option');
                        opt.value = adv.name;
                        opt.textContent = adv.name;
                        editCrAdvisor.appendChild(opt);
                    });
                }
                if (credit.asesor_name) editCrAdvisor.value = credit.asesor_name;
            };

            await loadAdvisors(credit.municipality);
            editCrMunicipality.onchange = () => loadAdvisors(editCrMunicipality.value);
        };

        await loadLocationData();
        editCrModal.style.display = 'block';
    };

    btnDownloadCr.addEventListener('click', () => {
        const dataToExport = currentCrReportData.map(c => {
            // Recalcular estado para el excel
            let estado = 'GRIS';
            const pTerm = Array.isArray(c.payment_term) ? c.payment_term[0] : c.payment_term;
            const remaining = Number(c.remaining_payments) || 0;
            const saleDate = parseDateValue(c.sale_date || c.created_at);
            const numPayments = Number(c.number_of_payments) || 0;
            const saldo = Number(c.balance) || 0;

            if (saleDate && numPayments > 0 && pTerm) {
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                let expirationDate = new Date(saleDate);

                if (String(pTerm).toUpperCase() === 'DIARIO') {
                    expirationDate.setDate(expirationDate.getDate() + numPayments);
                } else if (String(pTerm).toUpperCase() === 'SEMANAL') {
                    expirationDate.setDate(expirationDate.getDate() + (numPayments * 7));
                }

                if (expirationDate < today && saldo > 0) {
                    estado = 'ROJO';
                }
            }

            if (estado !== 'ROJO') {
                if ((String(pTerm).toUpperCase() === 'DIARIO' && remaining === 1) || (String(pTerm).toUpperCase() === 'SEMANAL' && remaining === 5)) {
                    estado = 'VERDE';
                } else if ((String(pTerm).toUpperCase() === 'DIARIO' && saldo === 20000) || (String(pTerm).toUpperCase() === 'SEMANAL' && saldo === 40000)) {
                    estado = 'AMARILLO';
                }
            }

            return {
                name: c.name,
                fecha: parseDateValue(c.created_at),
                asesor_name: c.asesor_name,
                municipality: c.municipality,
                nuevo: (c.credit_type || '').toLowerCase().includes('nuevo') ? (parseFloat(c.sale_value) || 0) : 0,
                represte: !(c.credit_type || '').toLowerCase().includes('nuevo') ? (parseFloat(c.sale_value) || 0) : 0,
                estado: estado
            };
        });

        const mapping = {
            name: 'CLIENTE',
            fecha: 'FECHA',
            asesor_name: 'ASESOR',
            municipality: 'MUNICIPIO',
            nuevo: 'NUEVO',
            represte: 'REPRESTE',
            estado: 'ESTADO'
        };
        exportToExcel(dataToExport, 'Reporte_Creditos', mapping);
    });

    // ==========================================
    // LÓGICA INFORME DE COBROS (PM)
    // ==========================================

    btnPmDaily.addEventListener('click', () => {
        currentPmMode = 'daily';
        btnPmDaily.className = 'btn-primary';
        btnPmWeekly.className = 'btn-secondary';
        pmFilterDateText.innerText = 'Seleccionar Fecha';
    });

    btnPmWeekly.addEventListener('click', () => {
        currentPmMode = 'weekly';
        btnPmWeekly.className = 'btn-primary';
        btnPmDaily.className = 'btn-secondary';
        pmFilterDateText.innerText = 'Seleccionar Fecha';
    });

    async function loadPmFilters() {
        const { data: users } = await sbClient.from('users').select('name')
            .neq('role', 'Administrador').neq('role', 'Administrador maestro').neq('role', 'Desarrollador');
        pmFilterUser.innerHTML = '<option value="">Todos los Asesores</option>';
        if (users) users.forEach(u => pmFilterUser.innerHTML += `<option value="${u.name}">${u.name}</option>`);

        const { data: deptsData } = await sbClient.from('municipalities').select('id, municipalities');
        pmFilterDept.innerHTML = '<option value="">Todos los Departamentos</option>';
        if (deptsData) {
            deptsData.forEach(dept => {
                const option = document.createElement('option');
                option.value = dept.id;
                option.textContent = dept.id;
                pmFilterDept.appendChild(option);
            });
            if (deptsData.length === 1) {
                pmFilterDept.value = deptsData[0].id;
                pmFilterDept.disabled = true;
                pmFilterDept.dispatchEvent(new Event('change'));
            } else {
                pmFilterDept.disabled = false;
            }
        }
    }

    pmFilterDept.addEventListener('change', async () => {
        pmFilterMuni.innerHTML = '<option value="">Todos los Municipios</option>';
        if (!pmFilterDept.value) return;
        const { data } = await sbClient.from('municipalities').select('municipalities').eq('id', pmFilterDept.value).single();
        if (data) data.municipalities.forEach(m => pmFilterMuni.innerHTML += `<option value="${m}">${m}</option>`);
    });

    pmFilterUser.addEventListener('change', () => {
        updateUserMunicipalities(pmFilterUser.value, 'pm-filter-muni');
    });

    btnGeneratePm.addEventListener('click', generatePmReport);

    async function generatePmReport() {
        pmTableBody.innerHTML = '<tr><td colspan="8" style="text-align:center;">Cargando...</td></tr>';
        pmTotalCobroDisplay.innerText = '$0';
        pmTotalRecaudoDisplay.innerText = '$0';
        btnMassEditPmDate.style.display = 'none';
        document.getElementById('pm-select-all').checked = false;
        pmSearchInput.value = '';
        btnPmClearSearch.style.display = 'none';


        let query = sbClient.from('payments').select('*');

        if (pgDateState.start && pgDateState.end) {
            query = query.gte('created_at', pgDateState.start.toISOString())
                         .lte('created_at', pgDateState.end.toISOString());
        }

        if (pmFilterUser.value) query = query.eq('user_name', pmFilterUser.value);
        
        if (pmFilterMuni.value) {
            query = query.eq('municipality', pmFilterMuni.value);
        } else if (pmFilterDept.value) {
             const { data: deptData } = await sbClient.from('municipalities').select('municipalities').eq('id', pmFilterDept.value).single();
             if (deptData && deptData.municipalities) {
                 query = query.in('municipality', deptData.municipalities);
             }
        }

        const { data: payments, error } = await query;

        if (error) {
            pmTableBody.innerHTML = `<tr><td colspan="8" style="text-align:center; color:red;">Error: ${error.message}</td></tr>`;
            return;
        }

        if (!payments || payments.length === 0) {
            pmTableBody.innerHTML = '<tr><td colspan="8" style="text-align:center;">No se encontraron registros.</td></tr>';
            return;
        }

        // Obtener valor cuota y tipo de pago de los deudores asociados
        const debtorNumbers = [...new Set(payments.map(p => p.debtor_number).filter(n => n))];
        currentPmDebtorsMap.clear(); // Limpiar mapa global
        if (debtorNumbers.length > 0) {
            const { data: debtors } = await sbClient.from('debtors').select('debtor_number, valor_cuota, payment_term').in('debtor_number', debtorNumbers);
            if (debtors) {
                debtors.forEach(d => currentPmDebtorsMap.set(d.debtor_number, {
                    valor_cuota: d.valor_cuota,
                    payment_term: d.payment_term
                }));
            }
        }

        // Filtrar pagos según el modo (Diario/Semanal)
        const isWeekly = currentPmMode === 'weekly';
        const targetTerm = isWeekly ? 'SEMANAL' : 'DIARIO';

        const filteredPayments = payments.filter(p => {
            const debtorInfo = currentPmDebtorsMap.get(p.debtor_number);
            if (!debtorInfo || !debtorInfo.payment_term) return false;

            const term = debtorInfo.payment_term;
            if (Array.isArray(term)) {
                return term.some(t => String(t).toUpperCase() === targetTerm);
            }
            return String(term).toUpperCase() === targetTerm;
        });

        currentPmReportData = filteredPayments;
        renderPmTable(currentPmReportData);
    }

    function renderPmTable(paymentsToRender) {
        pmTableBody.innerHTML = '';
        
        let totalCobro = 0; 
        let totalRecaudo = 0;

        if (!paymentsToRender || paymentsToRender.length === 0) {
            pmTableBody.innerHTML = '<tr><td colspan="8" style="text-align:center;">No se encontraron registros con los filtros aplicados.</td></tr>';
            return;
        }
        // Mostrar botón de edición masiva si hay datos
        if (paymentsToRender.length > 0) {
            btnMassEditPmDate.style.display = 'inline-block';
        }

        paymentsToRender.forEach(p => {
            const abono = parseFloat(p.payment_amount) || 0;
            const debtorInfo = currentPmDebtorsMap.get(p.debtor_number);
            const cuota = debtorInfo ? (parseFloat(debtorInfo.valor_cuota) || 0) : 0;
            
            totalRecaudo += abono;
            totalCobro += cuota;

            // Usar payment_number como ID único
            const payId = p.payment_number;

            const row = document.createElement('tr');
            row.innerHTML = `
                <td style="text-align: center;"><input type="checkbox" class="pm-row-checkbox" value="${payId}"></td>
                <td>${p.debtor_name || ''}</td>
                <td>${new Date(p.created_at).toLocaleDateString()}</td>
                <td>${p.user_name || ''}</td>
                <td>${p.municipality || ''}</td>
                <td>$${cuota.toLocaleString()}</td>
                <td>$${abono.toLocaleString()}</td>
                <td>
                    <div style="display: flex; gap: 5px; justify-content: center;">
                        <button class="btn-action-small btn-primary" onclick="openPmEditModal('${payId}')" title="Editar Cobro"><i class="fas fa-pencil-alt"></i></button>
                        <button class="btn-action-small btn-danger" onclick="deletePmPayment('${payId}', ${abono}, '${p.debtor_number}')" title="Eliminar Cobro"><i class="fas fa-trash"></i></button>
                    </div>
                </td>
            `;
            pmTableBody.appendChild(row);
        });

        pmTotalCobroDisplay.innerText = '$' + totalCobro.toLocaleString();
        pmTotalRecaudoDisplay.innerText = '$' + totalRecaudo.toLocaleString();

        // Re-asignar eventos de checkboxes
        document.querySelectorAll('.pm-row-checkbox').forEach(cb => {
            cb.addEventListener('change', updatePmSelectionState);
        });
    }

    // Lógica de Búsqueda en PM
    pmSearchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') performPmSearch();
    });

    function performPmSearch() {
        const searchTerm = normalizeText(pmSearchInput.value);
        if (!searchTerm) return;

        const filteredData = currentPmReportData.filter(p => 
            normalizeText(p.debtor_name).includes(searchTerm) || 
            (p.cedula && p.cedula.includes(searchTerm))
        );
        renderPmTable(filteredData);
        btnPmClearSearch.style.display = 'inline-block';
    }

    // Evento Seleccionar Todos
    document.getElementById('pm-select-all').addEventListener('change', (e) => {
        const checked = e.target.checked;
        document.querySelectorAll('.pm-row-checkbox').forEach(cb => cb.checked = checked);
        updatePmSelectionState();
    });

    function updatePmSelectionState() {
        const selected = document.querySelectorAll('.pm-row-checkbox:checked');
        selectedPmIds = Array.from(selected).map(cb => cb.value);
        btnMassEditPmDate.innerText = selectedPmIds.length > 0 ? `Editar Fechas (${selectedPmIds.length})` : 'Editar Fechas';
    }

    // Abrir modal para edición masiva
    btnMassEditPmDate.addEventListener('click', () => {
        if (selectedPmIds.length === 0) return alert('Seleccione al menos un pago.');
        massEditContext = 'pm'; // Establecer contexto
        massNewDateInput.value = '';
        massEditDateModal.style.display = 'block';
    });

    // Abrir modal para edición individual (reutiliza lógica masiva con 1 ID)
    window.openSinglePmDateEdit = (paymentId) => {
        selectedPmIds = [paymentId];
        massNewDateInput.value = '';
        massEditDateModal.style.display = 'block';
    };

    // Abrir modal para edición individual completa
    window.openPmEditModal = async (paymentId) => {
        const { data: payment, error } = await sbClient
            .from('payments')
            .select('*')
            .eq('payment_number', paymentId)
            .single();

        if (error || !payment) {
            return alert('Error al cargar el cobro: ' + (error?.message || 'No encontrado.'));
        }

        currentPmEditData = payment;
        document.getElementById('edit-pm-modal-title').innerText = `Edicion (cobro) de ${payment.debtor_name || 'N/A'}`;

        // Formatear fecha para el input type="date" (YYYY-MM-DD)
        const dateObj = parseDateValue(payment.created_at);
        editPmDate.value = dateObj ? getLocalDateKey(dateObj) : '';
        
        editPmAmount.value = payment.payment_amount;
        editPmMethod.value = payment.payment_method || 'Efectivo';

        // Cargar y seleccionar municipio/asesor
        const loadLocationData = async () => {
            // 1. Cargar todos los municipios de todos los departamentos
            const { data: deptsData } = await sbClient.from('municipalities').select('municipalities');
            const allMunis = deptsData ? deptsData.flatMap(d => d.municipalities) : [];
            allMunis.sort();

            editPmMunicipality.innerHTML = '<option value="">Seleccione...</option>';
            allMunis.forEach(m => {
                const opt = document.createElement('option');
                opt.value = m;
                opt.textContent = m;
                editPmMunicipality.appendChild(opt);
            });

            // 2. Pre-seleccionar municipio actual
            if (payment.municipality) {
                editPmMunicipality.value = payment.municipality;
            }

            // 3. Función para cargar asesores según el municipio
            const loadAdvisors = async (muni) => {
                editPmAdvisor.innerHTML = '<option value="">Cargando...</option>';
                if (!muni) {
                    editPmAdvisor.innerHTML = '<option value="">Seleccione municipio</option>';
                    return;
                }

                const { data: advisors } = await sbClient.from('users')
                    .select('name')
                    .contains('assigned_municipality', [muni])
                    .not('role', 'in', '("Administrador", "Administrador maestro", "Desarrollador")');

                editPmAdvisor.innerHTML = '<option value="">Seleccione asesor</option>';
                if (advisors) {
                    advisors.forEach(adv => {
                        const opt = document.createElement('option');
                        opt.value = adv.name;
                        opt.textContent = adv.name;
                        editPmAdvisor.appendChild(opt);
                    });
                }
                // Pre-seleccionar asesor actual si existe en la lista
                if (payment.user_name && Array.from(editPmAdvisor.options).some(o => o.value === payment.user_name)) {
                    editPmAdvisor.value = payment.user_name;
                }
            };

            // 4. Cargar asesores iniciales y configurar evento de cambio
            await loadAdvisors(payment.municipality);
            editPmMunicipality.onchange = () => loadAdvisors(editPmMunicipality.value);
        };

        await loadLocationData();
        editPmModal.style.display = 'block';
    };

    // Nueva función para eliminar cobro desde el informe
    window.deletePmPayment = async (paymentId, amount, debtorNumber) => {
        if (!confirm('¿Está seguro de eliminar este cobro? El saldo del crédito aumentará.')) return;

        try {
            // 1. Eliminar el pago
            const { error: deleteError } = await sbClient
                .from('payments')
                .delete()
                .eq('payment_number', paymentId);

            if (deleteError) throw new Error('Error al eliminar el pago: ' + deleteError.message);

            // 2. Actualizar el deudor (Revertir saldo)
            const { data: debtor } = await sbClient.from('debtors').select('balance, remaining_payments').eq('debtor_number', debtorNumber).single();
            
            if (debtor) {
                const newBalance = (parseFloat(debtor.balance) || 0) + parseFloat(amount);
                const newRemaining = (parseInt(debtor.remaining_payments) || 0) + 1;
                await sbClient.from('debtors').update({ balance: newBalance, remaining_payments: newRemaining }).eq('debtor_number', debtorNumber);
            }

            alert('Cobro eliminado correctamente.');
            generatePmReport(); // Recargar tabla
        } catch (err) {
            alert(err.message);
        }
    };

    // Guardar edición individual
    btnSavePmEdit.addEventListener('click', async () => { // MODIFICADO: Usa JS en lugar de Edge Function
        if (!currentPmEditData) return;

        const newDate = editPmDate.value; // YYYY-MM-DD
        const newAmount = parseFloat(editPmAmount.value);
        const newMethod = editPmMethod.value;
        const newMunicipality = editPmMunicipality.value;
        const newAdvisor = editPmAdvisor.value;

        if (!newDate || isNaN(newAmount) || newAmount < 0 || !newMunicipality || !newAdvisor) {
            return alert('Todos los campos (Fecha, Abono, Municipio, Asesor) son obligatorios y deben ser válidos.');
        }

        if (!confirm('¿Está seguro de guardar estos cambios? Esto afectará el saldo del crédito asociado.')) return;

        btnSavePmEdit.disabled = true;
        btnSavePmEdit.innerText = 'Guardando...';

        try {
            const oldAmount = parseFloat(currentPmEditData.payment_amount) || 0;
            const debtorNumber = currentPmEditData.debtor_number;
            const paymentNumber = currentPmEditData.payment_number;

            // 1. Calcular diferencia de monto y nuevo saldo
            const amountDifference = newAmount - oldAmount;

            const { data: debtor, error: debtorError } = await sbClient
                .from('debtors')
                .select('balance')
                .eq('debtor_number', debtorNumber)
                .single();

            if (debtorError) throw new Error('No se pudo encontrar el crédito asociado: ' + debtorError.message);

            const currentBalance = parseFloat(debtor.balance) || 0;
            const newBalance = currentBalance - amountDifference;

            // 2. Preparar datos de fecha
            const [y, m, d] = newDate.split('-').map(Number);
            const newDateObj = new Date(y, m - 1, d, 12, 0, 0); // Hora 12 para evitar saltos de TZ
            const newDateISO = newDateObj.toISOString();
            const dayStr = String(d).padStart(2, '0');
            const monthStr = String(m).padStart(2, '0');
            const newDateText = `${dayStr}-${monthStr}-${y}`; // DD-MM-YYYY
            const newDayName = getDayName(newDate);

            // 3. Actualizar el pago
            const { error: paymentUpdateError } = await sbClient
                .from('payments')
                .update({
                    payment_amount: newAmount,
                    payment_method: newMethod,
                    payment_date: newDateText,
                    created_at: newDateISO,
                    payment_day: newDayName,
                    municipality: newMunicipality,
                    user_name: newAdvisor
                })
                .eq('payment_number', paymentNumber);

            if (paymentUpdateError) throw new Error('Error al actualizar el pago: ' + paymentUpdateError.message);

            // 4. Actualizar el saldo del deudor
            const { error: debtorUpdateError } = await sbClient.from('debtors').update({ balance: newBalance }).eq('debtor_number', debtorNumber);
            if (debtorUpdateError) throw new Error('Error al actualizar el saldo del crédito: ' + debtorUpdateError.message);

            alert('Cobro actualizado correctamente.');
            editPmModal.style.display = 'none';
            
            // Si estamos en la vista de Cierres (GN), refrescar el modal de detalles.
            // Si no, refrescar la tabla de Cobros (PM).
            if (gnReportBox.style.display === 'block' && currentReportContext.reportId) {
                openReportPaymentsDetails(currentReportContext.reportId, currentReportContext.userName, currentReportContext.dateStr, currentReportContext.mode);
            } else {
                generatePmReport(); // Recargar
            }
        } catch (err) {
            alert('Error al actualizar: ' + err.message);
        } finally {
            btnSavePmEdit.disabled = false;
            btnSavePmEdit.innerText = 'Guardar Cambios';
        }
    });

    // Guardar edición individual CR (Edge Function)
    btnSaveCrEdit.addEventListener('click', async () => {
        if (!currentCrEditData) return;

        // Preparar fecha DD-MM-YYYY
        let saleDateText = null;
        let saleDateISO = null;
        if (editCrDate.value) {
            const [y, m, d] = editCrDate.value.split('-');
            saleDateText = `${d}-${m}-${y}`;
            const dateObj = new Date(y, m - 1, d, 12, 0, 0);
            saleDateISO = dateObj.toISOString();
        }

        const updates = {
            sale_date: saleDateText,
            created_at: saleDateISO, // Actualizar timestamp también para reportes
            sale_value: editCrValue.value,
            interests: editCrInterests.value,
            valor_cuota: editCrQuota.value,
            balance: editCrBalance.value,
            credit_type: editCrType.value,
            payment_term: [editCrTerm.value],
            municipality: editCrMunicipality.value,
            asesor_name: editCrAdvisor.value
        };

        btnSaveCrEdit.disabled = true;
        btnSaveCrEdit.innerText = 'Guardando...';

        const { data: { session } } = await sbClient.auth.getSession();
        const { error } = await sbClient.functions.invoke('update-credit', {
            body: { credit_id: currentCrEditData.debtor_number, updates: updates },
            headers: { Authorization: `Bearer ${session?.access_token}` }
        });

        btnSaveCrEdit.disabled = false;
        btnSaveCrEdit.innerText = 'Guardar Cambios';

        if (error) return alert('Error al actualizar crédito: ' + error.message);
        alert('Crédito actualizado correctamente.');
        editCrModal.style.display = 'none';
        
        // Si estamos en la vista de Cierres (GN), refrescar el modal de detalles.
        // Si no, refrescar la tabla de Créditos (CR).
        if (gnReportBox.style.display === 'block' && currentCreditsContext.reportId) {
            openReportCreditsDetails(currentCreditsContext.reportId, currentCreditsContext.userName, currentCreditsContext.dateStr, currentCreditsContext.mode);
        } else {
            generateCreditsReport();
        }
    });

    // Confirmar cambio de fecha
    btnConfirmMassDate.addEventListener('click', async () => {
        const newDateVal = massNewDateInput.value;
        if (!newDateVal) return alert('Seleccione una fecha válida.');
        
        const count = massEditContext === 'pm' ? selectedPmIds.length : selectedCrIds.length;
        if (!confirm(`¿Está seguro de cambiar la fecha de ${count} registros a ${newDateVal}?`)) return;

        btnConfirmMassDate.disabled = true;
        btnConfirmMassDate.innerText = 'Actualizando...';

        try {
            // Construir fecha ISO (manteniendo hora 12:00 para evitar saltos de zona horaria)
            const [y, m, d] = newDateVal.split('-').map(Number);
            const newDateObj = new Date(y, m - 1, d, 12, 0, 0);
            const newDateISO = newDateObj.toISOString();
            
            // Formato texto DD-MM-YYYY para payment_date
            const dayStr = String(d).padStart(2, '0');
            const monthStr = String(m).padStart(2, '0');
            const newDateText = `${dayStr}-${monthStr}-${y}`;

            let error = null;

            if (massEditContext === 'pm') {
                // Actualizar Pagos
                const res = await sbClient
                    .from('payments')
                    .update({ payment_date: newDateText, created_at: newDateISO })
                    .in('payment_number', selectedPmIds);
                error = res.error;
            } else if (massEditContext === 'cr') {
                // Actualizar Créditos
                const res = await sbClient
                    .from('debtors')
                    .update({ sale_date: newDateText, created_at: newDateISO })
                    .in('debtor_number', selectedCrIds);
                error = res.error;
            }

            if (error) throw error;

            alert('Fechas actualizadas correctamente.');
            massEditDateModal.style.display = 'none';
            
            if (massEditContext === 'pm') generatePmReport();
            else generateCreditsReport();

        } catch (err) {
            console.error(err);
            alert('Error al actualizar: ' + err.message);
        } finally {
            btnConfirmMassDate.disabled = false;
            btnConfirmMassDate.innerText = 'Guardar Cambios';
        }
    });

    btnPmClearSearch.addEventListener('click', () => {
        pmSearchInput.value = '';
        btnPmClearSearch.style.display = 'none';
        renderPmTable(currentPmReportData);
    });

    btnDownloadPm.addEventListener('click', () => {
        const dataToExport = currentPmReportData.map(p => {
            const debtorInfo = currentPmDebtorsMap.get(p.debtor_number);
            const cuota = debtorInfo ? (parseFloat(debtorInfo.valor_cuota) || 0) : 0;
            return {
                debtor_name: p.debtor_name,
                fecha: parseDateValue(p.created_at),
                user_name: p.user_name,
                municipality: p.municipality,
                cuota: cuota,
                abono: parseFloat(p.payment_amount) || 0
            };
        });

        const mapping = {
            debtor_name: 'CLIENTE',
            fecha: 'FECHA',
            user_name: 'ASESOR',
            municipality: 'MUNICIPIO',
            cuota: 'CUOTA',
            abono: 'ABONO'
        };
        exportToExcel(dataToExport, 'Reporte_Cobros', mapping);
    });

    // ==========================================
    // LÓGICA INFORME DE OTROS GASTOS (EX)
    // ==========================================

    btnExDaily.addEventListener('click', () => {
        currentExMode = 'daily';
        btnExDaily.className = 'btn-primary';
        btnExWeekly.className = 'btn-secondary';
        exFilterDateText.innerText = 'Seleccionar Fecha';
    });

    btnExWeekly.addEventListener('click', () => {
        currentExMode = 'weekly';
        btnExWeekly.className = 'btn-primary';
        btnExDaily.className = 'btn-secondary';
        exFilterDateText.innerText = 'Seleccionar Fecha';
    });

    async function loadExFilters() {
        const { data: users } = await sbClient.from('users').select('name')
            .neq('role', 'Administrador').neq('role', 'Administrador maestro').neq('role', 'Desarrollador');
        exFilterUser.innerHTML = '<option value="">Todos los Asesores</option>';
        if (users) users.forEach(u => exFilterUser.innerHTML += `<option value="${u.name}">${u.name}</option>`);
    }

    btnGenerateEx.addEventListener('click', generateExReport);

    async function generateExReport() {
        exTableBody.innerHTML = '<tr><td colspan="6">Cargando...</td></tr>';

        const user = exFilterUser.value;
        const isWeekly = currentExMode === 'weekly';
        
        // Get Date Range from pgDateState
        const startDate = pgDateState.start;
        const endDate = pgDateState.end;

        if (!startDate || !endDate) {
             exTableBody.innerHTML = '<tr><td colspan="6">Seleccione un rango de fechas.</td></tr>';
             return;
        }

        try {
            const collectionName = isWeekly ? 'wexpenses' : 'expenses';
            let query = sbClient.from(collectionName)
                .select('*')
                .gte('created_at', startDate.toISOString())
                .lte('created_at', endDate.toISOString());
            
            if (user) {
                query = query.eq('user_name', user);
            }

            const { data: records, error } = await query;
            if (error) throw error;

            // Sort by date desc
            records.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

            currentExReportData = records; // Guardar para descarga

            let html = '';
            records.forEach(r => {
                const othersVal = (r.others && r.others.length > 0) ? (parseFloat(r.others[0]) || 0) : 0;
                const fuelVal = parseFloat(r.fuel) || 0;
                const lunchVal = parseFloat(r.lunch) || 0;
                if (othersVal === 0 && fuelVal === 0 && lunchVal === 0) return;

                const othersDesc = (r.others && r.others.length > 1) ? r.others[1] : 'N/A';
                
                let dateStr = 'N/A';
                if (r.created_at) dateStr = new Date(r.created_at).toLocaleDateString();

                html += `<tr>
                    <td>${r.user_name || 'N/A'}</td>
                    <td>${dateStr}</td>
                    <td>$${fuelVal.toLocaleString('es-CO')}</td>
                    <td>$${lunchVal.toLocaleString('es-CO')}</td>
                    <td>$${othersVal.toLocaleString('es-CO')}</td>
                    <td>${othersDesc}</td>
                </tr>`;
            });

            exTableBody.innerHTML = html || '<tr><td colspan="6" style="text-align:center;">No se encontraron registros.</td></tr>';
        } catch (error) {
            console.error("Error generating EX report:", error);
            exTableBody.innerHTML = `<tr><td colspan="6" style="text-align:center; color:red;">Error: ${error.message}</td></tr>`;
        }
    }

    btnDownloadEx.addEventListener('click', () => {
        const dataToExport = currentExReportData.map(r => ({
            user_name: r.user_name,
            fecha: parseDateValue(r.created_at),
            fuel: parseFloat(r.fuel) || 0,
            lunch: parseFloat(r.lunch) || 0,
            otros: (r.others && r.others.length > 0) ? (parseFloat(r.others[0]) || 0) : 0,
            descripcion: (r.others && r.others.length > 1) ? r.others[1] : ''
        }));

        const mapping = {
            user_name: 'ASESOR',
            fecha: 'FECHA',
            fuel: 'GASOLINA',
            lunch: 'ALMUERZO',
            otros: 'OTROS',
            descripcion: 'DESCRIPCION'
        };
        exportToExcel(dataToExport, 'Reporte_Gastos', mapping);
    });

    // ==========================================
    // LÓGICA INFORME GENERAL (GN)
    // ==========================================

    btnGnDaily.addEventListener('click', () => {
        currentGnMode = 'daily';
        btnGnDaily.className = 'btn-primary';
        btnGnWeekly.className = 'btn-secondary';
        gnFilterDateText.innerText = 'Seleccionar Fecha';
    });

    btnGnWeekly.addEventListener('click', () => {
        currentGnMode = 'weekly';
        btnGnWeekly.className = 'btn-primary';
        btnGnDaily.className = 'btn-secondary';
        gnFilterDateText.innerText = 'Seleccionar Fecha';
    });

    async function loadGnFilters() {
        const { data: users } = await sbClient.from('users').select('name')
            .neq('role', 'Administrador').neq('role', 'Administrador maestro').neq('role', 'Desarrollador');
        gnFilterUser.innerHTML = '<option value="">Todos los Asesores</option>';
        if (users) users.forEach(u => gnFilterUser.innerHTML += `<option value="${u.name}">${u.name}</option>`);
    }

    btnGenerateGn.addEventListener('click', generateGnReport);

    async function generateGnReport() {
        gnTableBody.innerHTML = '<tr><td colspan="9">Cargando...</td></tr>';

        const mode = currentGnMode || 'daily';
        const tableName = mode === 'daily' ? 'reports' : 'wreports';
        
        let query = sbClient.from(tableName).select('*');

        // Filtro de Fechas
        if (pgDateState.start && pgDateState.end) {
            query = query.gte('created_at', pgDateState.start.toISOString())
                         .lte('created_at', pgDateState.end.toISOString());
        }

        // Filtro de Usuario
        if (gnFilterUser.value) {
            query = query.eq('user_name', gnFilterUser.value);
        }

        const { data: reports, error } = await query;

        // Actualizar encabezados de tabla GN para eliminar columna DIA
        const table = gnTableBody.closest('table');
        if (table && table.tHead && table.tHead.rows.length > 0) {
            table.tHead.rows[0].innerHTML = `
                <th>Asesor</th>
                <th>Créditos</th>
                <th>Ganancias</th>
                <th>Cobros</th>
                <th>Gastos</th>
                <th>Base Inicial</th>
                <th>Base Final</th>
                <th>Inyección</th>
                <th>Fecha</th>
            `;
        }

        if (error) {
            gnTableBody.innerHTML = `<tr><td colspan="9">Error: ${error.message}</td></tr>`;
            return;
        }

        currentGnReportData = reports;
        gnTableBody.innerHTML = '';

        if (!reports || reports.length === 0) {
            gnTableBody.innerHTML = '<tr><td colspan="9">No se encontraron registros.</td></tr>';
            return;
        }

        // Calcular intereses (Ganancias) para cada reporte
        const reportsWithInterests = await Promise.all(reports.map(async (r) => {
            let totalInterests = 0;
            try {
                const reportDate = new Date(r.created_at);
                let startDate, endDate;
                if (mode === 'weekly') {
                    const end = new Date(reportDate); end.setHours(23, 59, 59, 999);
                    const start = new Date(reportDate); start.setDate(start.getDate() - 6); start.setHours(0, 0, 0, 0);
                    startDate = start.toISOString(); endDate = end.toISOString();
                } else {
                    const start = new Date(reportDate); start.setHours(0, 0, 0, 0);
                    const end = new Date(reportDate); end.setHours(23, 59, 59, 999);
                    startDate = start.toISOString(); endDate = end.toISOString();
                }

                const { data: debtors } = await sbClient.from('debtors')
                    .select('interests, payment_term')
                    .eq('asesor_name', r.user_name)
                    .gte('created_at', startDate)
                    .lte('created_at', endDate);

                if (debtors) {
                    const targetTerm = mode === 'weekly' ? 'SEMANAL' : 'DIARIO';
                    debtors.forEach(d => {
                        const term = d.payment_term;
                        let match = false;
                        if (Array.isArray(term)) match = term.some(t => String(t).toUpperCase() === targetTerm);
                        else match = String(term) && String(term).toUpperCase() === targetTerm;
                        if (match) totalInterests += (parseFloat(d.interests) || 0);
                    });
                }
            } catch (e) { console.error("Error calculating interests", e); }
            return { ...r, totalInterests };
        }));

        // Ordenar por fecha descendente
        reportsWithInterests.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

        const fmt = (val) => '$ ' + (parseFloat(val) || 0).toLocaleString('es-CO');
        const fmtDate = (dateStr) => {
            if (!dateStr) return '';
            return new Date(dateStr).toLocaleDateString();
        };

        reportsWithInterests.forEach(r => {
            const hasInjection = r.og_final_base !== null && r.og_final_base !== undefined;
            const baseFinalDisplayValue = hasInjection ? r.og_final_base : r.final_base;
            const injectionDisplayValue = hasInjection ? r.final_base : null;

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${r.user_name || ''}</td>
                <td>
                    ${fmt(r.credits_report)}
                    <button class="btn-action-small btn-primary" onclick="openReportCreditsDetails('${r.report_number}', '${r.user_name}', '${r.created_at}', '${currentGnMode || 'daily'}')"><i class="fas fa-eye"></i></button>
                </td>
                <td>${fmt(r.totalInterests)}</td>
                <td>
                    ${fmt(r.payments_report)}
                    <button class="btn-action-small btn-primary" onclick="openReportPaymentsDetails('${r.report_number}', '${r.user_name}', '${r.created_at}', '${currentGnMode || 'daily'}')"><i class="fas fa-eye"></i></button>
                </td>
                <td>
                    ${fmt(r.expense_report)}
                    <button class="btn-action-small btn-primary" onclick="openPgExpenses('${r.report_number}', '${r.user_name}', '${r.created_at}', '${currentGnMode || 'daily'}')"><i class="fas fa-pencil-alt"></i></button>
                </td>
                <td>
                    ${fmt(r.initial_base)}
                    <button class="btn-action-small btn-secondary" onclick="editInitialBase('${r.report_number}', '${r.initial_base}', '${currentGnMode || 'daily'}')"><i class="fas fa-pencil-alt"></i></button>
                </td>
                <td>
                    ${fmt(baseFinalDisplayValue)}
                    <button class="btn-action-small btn-info" onclick="editFinalBaseDirectly('${r.report_number}', '${r.user_name}', '${r.final_base}', '${currentGnMode || 'daily'}')" title="Editar Base Final Directamente"><i class="fas fa-edit"></i></button>
                </td>
                <td>
                    ${injectionDisplayValue !== null ? fmt(injectionDisplayValue) : '-'}
                    <button class="btn-action-small btn-warning" onclick="openPgInjection('${r.report_number}', '${r.user_name}', '${r.final_base}', '${currentGnMode || 'daily'}')" title="Inyección/Guardar Original"><i class="fas fa-syringe"></i></button>
                </td>
                <td>${fmtDate(r.created_at)}</td>
            `;
            gnTableBody.appendChild(row);
        });
    }

    gnTableBody.addEventListener('click', async (e) => {
        // Lógica vacía por ahora
    });

    function updateEditExpTotal() {
        const gas = parseFloat(editExpGas.value) || 0;
        const lunch = parseFloat(editExpLunch.value) || 0;
        const other = parseFloat(editExpOtherVal.value) || 0;
        document.getElementById('edit-exp-total-display').innerText = '$ ' + (gas + lunch + other).toLocaleString();
    }
    editExpGas.addEventListener('input', updateEditExpTotal);
    editExpLunch.addEventListener('input', updateEditExpTotal);
    editExpOtherVal.addEventListener('input', updateEditExpTotal);

    btnSaveExpChanges.addEventListener('click', async () => {
        if (!currentExpEditData) return;
        
        const newFuel = parseFloat(editExpGas.value) || 0;
        const newLunch = parseFloat(editExpLunch.value) || 0;
        const newOtherVal = parseFloat(editExpOtherVal.value) || 0;
        const newOtherDesc = editExpOtherDesc.value || '';
        
        const newTotal = newFuel + newLunch + newOtherVal;
        
        const updates = {
            fuel: newFuel,
            lunch: newLunch,
            others: [newOtherVal, newOtherDesc],
            total_expenses: newTotal
        };
        
        try {
            // 1. Actualizar tabla de gastos
            const { error: expError } = await sbClient
                .from(currentExpEditData.collection)
                .update(updates)
                .eq('user_name', currentExpEditData.user_name)
                .eq('created_at', currentExpEditData.created_at);
            
            if (expError) throw expError;

            // 2. Marcar cambio pendiente (No actualizar reporte aún)
            pendingReportUpdate = true;

        } catch (e) {
            alert("Error: " + e.message);
        }
    });

    // Lógica para abrir detalles de créditos
    window.openReportCreditsDetails = async (reportId, userName, dateStr, mode) => {
        const modal = document.getElementById('view-report-credits-modal');
        const tbody = document.getElementById('report-credits-detail-body');
        const totalSpan = document.getElementById('report-credits-total');
        const interestsSpan = document.getElementById('report-credits-interests-total');
        
        // Verificar si es una recarga (modal ya abierto)
        const isRefresh = modal.style.display === 'block';

        tbody.innerHTML = '<tr><td colspan="12" style="text-align:center;">Cargando...</td></tr>';
        totalSpan.innerText = '$0';
        if (interestsSpan) interestsSpan.innerText = '$0';
        modal.style.display = 'block';

        // Solo resetear bandera y configurar interceptor si es apertura inicial
        if (!isRefresh) {
            pendingReportUpdate = false;
            setupModalCloseInterceptor(modal, 'credits');
        }

        const collection = mode === 'daily' ? 'reports' : 'wreports';
        currentCreditsContext = { reportId, userName, dateStr, mode, collection };
        currentReportContext = currentCreditsContext; // Sync global context

        try {
            // Calcular Rango de Fechas
            const reportDate = new Date(dateStr);
            let startDate, endDate;

            if (mode === 'weekly') {
                // Si es semanal, dateStr suele ser la fecha de creación del reporte (fin de semana o momento de cierre)
                // Calculamos la semana hacia atrás
                const end = new Date(reportDate);
                end.setHours(23, 59, 59, 999);
                const start = new Date(reportDate);
                start.setDate(start.getDate() - 6); // Retroceder 6 días
                start.setHours(0, 0, 0, 0);
                startDate = start.toISOString();
                endDate = end.toISOString();
            } else {
                // Diario
                const start = new Date(reportDate);
                start.setHours(0, 0, 0, 0);
                const end = new Date(reportDate);
                end.setHours(23, 59, 59, 999);
                startDate = start.toISOString();
                endDate = end.toISOString();
            }

            // Consultar Créditos
            const { data: credits, error } = await sbClient
                .from('debtors')
                .select('*')
                .eq('asesor_name', userName)
                .gte('created_at', startDate)
                .lte('created_at', endDate);

            if (error) throw error;

            // Filtrar por Payment Term
            const targetTerm = mode === 'weekly' ? 'SEMANAL' : 'DIARIO';
            const filteredCredits = credits.filter(c => {
                const term = c.payment_term;
                if (Array.isArray(term)) {
                    return term.some(t => String(t).toUpperCase() === targetTerm);
                }
                return String(term) && String(term).toUpperCase() === targetTerm;
            });

            currentCreditsContext.data = filteredCredits; // Guardar para descarga

            // Renderizar Tabla
            tbody.innerHTML = '';
            let total = 0;
            let totalInterests = 0;
            
            if (filteredCredits.length === 0) {
                tbody.innerHTML = '<tr><td colspan="12" style="text-align:center;">No se encontraron créditos.</td></tr>';
            } else {
                filteredCredits.forEach(c => {
                    total += (parseFloat(c.sale_value) || 0);
                    totalInterests += (parseFloat(c.interests) || 0);
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${c.name || ''}</td>
                        <td>${c.cedula || ''}</td>
                        <td>$ ${(parseFloat(c.sale_value)||0).toLocaleString()}</td>
                        <td>$ ${(parseFloat(c.interests)||0).toLocaleString()}</td>
                        <td>$ ${(parseFloat(c.total_credit_value)||0).toLocaleString()}</td>
                        <td>${c.number_of_payments || ''}</td>
                        <td>$ ${(parseFloat(c.valor_cuota)||0).toLocaleString()}</td>
                        <td>${c.credit_type || ''}</td>
                        <td>${c.payment_term || ''}</td>
                        <td>${c.municipality || ''}</td>
                        <td>
                            <div style="display: flex; gap: 5px; justify-content: center;">
                                <button class="btn-action-small btn-primary" onclick="openCrEditModal('${c.debtor_number}')" title="Editar Crédito"><i class="fas fa-pencil-alt"></i></button>
                                <button class="btn-action-small btn-danger" onclick="deleteCreditFromDetails('${c.debtor_number}')" title="Eliminar Crédito"><i class="fas fa-trash"></i></button>
                            </div>
                        </td>
                    `;
                    tbody.appendChild(row);
                });
            }
            totalSpan.innerText = '$ ' + total.toLocaleString('es-CO');
            if (interestsSpan) interestsSpan.innerText = '$ ' + totalInterests.toLocaleString('es-CO');

        } catch (e) {
            console.error(e);
            tbody.innerHTML = `<tr><td colspan="12" style="color:red;">Error: ${e.message}</td></tr>`;
        }
    };

    // Nueva función para eliminar crédito desde detalles de cierre
    window.deleteCreditFromDetails = async (debtorNumber) => {
        if (!confirm('¿Está seguro de eliminar este crédito y TODOS sus pagos asociados? Esta acción es irreversible y afectará el cierre.')) return;

        try {
            // 1. Eliminar pagos asociados
            await sbClient.from('payments').delete().eq('debtor_number', debtorNumber);

            // 2. Eliminar el crédito
            const { error: deleteError } = await sbClient.from('debtors').delete().eq('debtor_number', debtorNumber);
            if (deleteError) throw deleteError;

            // 3. Marcar cambio pendiente y refrescar
            pendingReportUpdate = true;
            alert('Crédito eliminado. Cierre el modal para recalcular el reporte.');

            // Refrescar la vista del modal
            const { reportId, userName, dateStr, mode } = currentCreditsContext;
            openReportCreditsDetails(reportId, userName, dateStr, mode);

        } catch (e) {
            alert('Error al eliminar el crédito: ' + e.message);
        }
    };

    // Descarga Excel de Detalles de Créditos
    btnDownloadReportCreditsDetails.addEventListener('click', () => {
        if (!currentCreditsContext || !currentCreditsContext.data) return alert("No hay datos para descargar.");

        const dataToExport = currentCreditsContext.data.map(c => ({
            name: c.name,
            cedula: c.cedula,
            sale_value: parseFloat(c.sale_value) || 0,
            interests: parseFloat(c.interests) || 0,
            total_credit_value: parseFloat(c.total_credit_value) || 0,
            number_of_payments: c.number_of_payments,
            valor_cuota: parseFloat(c.valor_cuota) || 0,
            credit_type: c.credit_type,
            payment_term: Array.isArray(c.payment_term) ? c.payment_term.join(', ') : c.payment_term,
            municipality: c.municipality
        }));

        const mapping = {
            name: 'CLIENTE', cedula: 'CEDULA', sale_value: 'CREDITO', interests: 'INTERESES',
            total_credit_value: "VALOR TOTAL", number_of_payments: 'CUOTAS', valor_cuota: 'VALOR CUOTA',
            credit_type: "TIPO DE CREDITO", payment_term: "TIPO DE PAGO", municipality: 'MUNICIPIO'
        };

        const filename = `Detalle_Creditos_${currentCreditsContext.userName}_${getLocalDateKey(new Date(currentCreditsContext.dateStr))}`;
        exportToExcel(dataToExport, filename, mapping);
    });

    // Lógica para abrir detalles de cobros
    window.openReportPaymentsDetails = async (reportId, userName, dateStr, mode) => {
        const modal = document.getElementById('view-report-payments-modal');
        const tbody = document.getElementById('report-payments-detail-body');
        const totalSpan = document.getElementById('report-payments-total');
        const cashSpan = document.getElementById('report-payments-cash');
        const transferSpan = document.getElementById('report-payments-transfer');
        
        // Corrección de Encabezados
        const table = tbody.closest('table');
        if (table) {
            let thead = table.querySelector('thead');
            if (!thead) {
                thead = document.createElement('thead');
                table.insertBefore(thead, table.firstChild);
            }
            thead.style.cssText = "position: sticky; top: 0; background: white; z-index: 1;";
            thead.innerHTML = `
                <tr>
                    <th>Fecha</th>
                    <th>Cliente</th>
                    <th>Cédula</th>
                    <th>Abono</th>
                    <th>Método</th>
                    <th>Municipio</th>
                    <th>Acciones</th>
                </tr>
            `;
        }

        // Verificar si es una recarga
        const isRefresh = modal.style.display === 'block';

        tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;">Cargando...</td></tr>';
        totalSpan.innerText = '$0';
        if (cashSpan) cashSpan.innerText = '$0';
        if (transferSpan) transferSpan.innerText = '$0';
        modal.style.display = 'block';

        // Solo resetear bandera y configurar interceptor si es apertura inicial
        if (!isRefresh) {
            pendingReportUpdate = false;
            setupModalCloseInterceptor(modal, 'payments');
        }

        const collection = mode === 'daily' ? 'reports' : 'wreports';
        currentCreditsContext = { reportId, userName, dateStr, mode, collection };
        currentReportContext = currentCreditsContext; // Sync global context

        try {
            // Calcular Rango de Fechas
            const reportDate = new Date(dateStr);
            let startDate, endDate;

            if (mode === 'weekly') {
                const end = new Date(reportDate);
                end.setHours(23, 59, 59, 999);
                const start = new Date(reportDate);
                start.setDate(start.getDate() - 6);
                start.setHours(0, 0, 0, 0);
                startDate = start.toISOString();
                endDate = end.toISOString();
            } else {
                const start = new Date(reportDate);
                start.setHours(0, 0, 0, 0);
                const end = new Date(reportDate);
                end.setHours(23, 59, 59, 999);
                startDate = start.toISOString();
                endDate = end.toISOString();
            }

            // Consultar Pagos
            const { data: payments, error } = await sbClient
                .from('payments')
                .select('*')
                .eq('user_name', userName)
                .gte('created_at', startDate)
                .lte('created_at', endDate);

            if (error) throw error;
            
            const debtorNumbers = [...new Set(payments.map(p => p.debtor_number).filter(Boolean))];
            let debtorsMap = new Map();
            if (debtorNumbers.length > 0) {
                const { data: debtors } = await sbClient
                    .from('debtors')
                    .select('debtor_number, payment_term')
                    .in('debtor_number', debtorNumbers);
                
                if (debtors) {
                    debtors.forEach(d => debtorsMap.set(d.debtor_number, d.payment_term));
                }
            }

            // Filtrar por Payment Term
            const targetTerm = mode === 'weekly' ? 'SEMANAL' : 'DIARIO';
            const filteredPayments = payments.filter(p => {
                const term = debtorsMap.get(p.debtor_number);
                if (!term) return false;
                if (Array.isArray(term)) {
                    return term.some(t => String(t).toUpperCase() === targetTerm);
                }
                return String(term).toUpperCase() === targetTerm;
            });

            currentCreditsContext.paymentsData = filteredPayments; // Guardar para descarga

            // Renderizar Tabla
            tbody.innerHTML = '';
            let total = 0;
            let totalCash = 0;
            let totalTransfer = 0;
            
            if (filteredPayments.length === 0) {
                tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;">No se encontraron cobros.</td></tr>';
            } else {
                filteredPayments.forEach(p => {
                    const amount = parseFloat(p.payment_amount) || 0;
                    total += amount;
                    if (p.payment_method === 'Transferencia') {
                        totalTransfer += amount;
                    } else {
                        totalCash += amount;
                    }

                    // Corrección de orden de columnas: Fecha primero
                    const dateDisplay = p.payment_date || new Date(p.created_at).toLocaleDateString();

                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${dateDisplay}</td>
                        <td>${p.debtor_name || ''}</td>
                        <td>${p.cedula || ''}</td>
                        <td>$ ${amount.toLocaleString()}</td>
                        <td>${p.payment_method || 'Efectivo'}</td>
                        <td>${p.municipality || ''}</td>
                        <td>
                            <div style="display: flex; gap: 5px; justify-content: center;">
                                <button class="btn-action-small btn-primary" onclick="openPmEditModal('${p.payment_number}')" title="Editar Cobro"><i class="fas fa-pencil-alt"></i></button>
                                <button class="btn-action-small btn-danger" onclick="deletePaymentFromDetails('${p.payment_number}', ${amount}, '${p.debtor_number}')" title="Eliminar Cobro"><i class="fas fa-trash"></i></button>
                            </div>
                        </td>
                    `;
                    tbody.appendChild(row);
                });
            }
            totalSpan.innerText = '$ ' + total.toLocaleString('es-CO');
            if (cashSpan) cashSpan.innerText = '$ ' + totalCash.toLocaleString('es-CO');
            if (transferSpan) transferSpan.innerText = '$ ' + totalTransfer.toLocaleString('es-CO');

        } catch (e) {
            console.error(e);
            tbody.innerHTML = `<tr><td colspan="7" style="color:red;">Error: ${e.message}</td></tr>`;
        }
    };

    // Nueva función para eliminar cobro desde detalles de cierre
    window.deletePaymentFromDetails = async (paymentId, amount, debtorNumber) => {
        if (!confirm('¿Está seguro de eliminar este cobro? El saldo del crédito aumentará y se afectará el cierre.')) return;

        try {
            // 1. Eliminar el pago
            const { error: deleteError } = await sbClient.from('payments').delete().eq('payment_number', paymentId);
            if (deleteError) throw new Error('Error al eliminar el pago: ' + deleteError.message);

            // 2. Revertir saldo en el deudor
            if (debtorNumber) {
                const { data: debtor } = await sbClient.from('debtors').select('balance, remaining_payments').eq('debtor_number', debtorNumber).single();
                if (debtor) {
                    const newBalance = (parseFloat(debtor.balance) || 0) + parseFloat(amount);
                    const newRemaining = (parseInt(debtor.remaining_payments) || 0) + 1;
                    await sbClient.from('debtors').update({ balance: newBalance, remaining_payments: newRemaining }).eq('debtor_number', debtorNumber);
                }
            }

            // 3. Marcar cambio pendiente y refrescar
            pendingReportUpdate = true;
            alert('Cobro eliminado. Cierre el modal para recalcular el reporte.');

            // Refrescar la vista del modal
            const { reportId, userName, dateStr, mode } = currentCreditsContext;
            openReportPaymentsDetails(reportId, userName, dateStr, mode);

        } catch (err) {
            alert(err.message);
        }
    };

    // --- Lógica de Intercepción de Cierre y Modal Obligatorio ---

    function setupModalCloseInterceptor(modal, type) {
        // Buscar TODOS los botones en el modal
        const buttons = modal.querySelectorAll('button');
        
        buttons.forEach(btn => {
            const text = btn.innerText.trim().toLowerCase();
            const onclick = btn.getAttribute('onclick') || '';
            // Identificar botones de cierre (por texto o por acción de ocultar)
            // Excluir botones de acción (guardar, descargar, editar, etc.)
            const isActionBtn = text.includes('guardar') || text.includes('descargar') || btn.classList.contains('btn-success') || btn.classList.contains('btn-action-small') || btn.querySelector('i');
            
            if (!isActionBtn && (text === 'cerrar' || text === 'cancelar' || onclick.includes("display='none'") || onclick.includes('display = \'none\''))) {
                
                btn.innerText = "Cerrar"; // Renombrar a Cerrar
                
                // Reemplazar nodo para eliminar eventos inline
                const newBtn = btn.cloneNode(true);
                newBtn.removeAttribute('onclick'); 
                btn.parentNode.replaceChild(newBtn, btn);
                
                // Asignar nuevo evento de cierre controlado
                newBtn.onclick = (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleDetailModalClose(modal, type);
                };
            }
        });

        // Interceptar clic en el fondo (backdrop)
        modal.onclick = (e) => {
            if (e.target === modal) {
                handleDetailModalClose(modal, type);
            }
        };
    }

    async function handleDetailModalClose(modal, type) {
        // Si no hay cambios pendientes, simplemente cerrar el modal.
        if (!pendingReportUpdate) {
            modal.style.display = 'none';
            return;
        }

        // Calcular y mostrar modal obligatorio siempre al cerrar
        try {
            const { reportId, collection, userName, dateStr, mode } = currentReportContext;
            const reportCollection = mode === 'daily' ? 'reports' : 'wreports';
            
            // 1. Calcular nuevos totales según el tipo
            let newTotal = 0;
            
            if (type === 'credits') {
                // Calcular Créditos (Misma lógica de rango)
                const reportDate = new Date(dateStr);
                let startDate, endDate;
                if (mode === 'weekly') {
                    const end = new Date(reportDate); end.setHours(23, 59, 59, 999);
                    const start = new Date(reportDate); start.setDate(start.getDate() - 6); start.setHours(0, 0, 0, 0);
                    startDate = start.toISOString(); endDate = end.toISOString();
                } else {
                    const start = new Date(reportDate); start.setHours(0, 0, 0, 0);
                    const end = new Date(reportDate); end.setHours(23, 59, 59, 999);
                    startDate = start.toISOString(); endDate = end.toISOString();
                }

                const { data: allCredits } = await sbClient.from('debtors').select('sale_value, payment_term').eq('asesor_name', userName).gte('created_at', startDate).lte('created_at', endDate);
                const targetTerm = mode === 'weekly' ? 'SEMANAL' : 'DIARIO';
                newTotal = (allCredits || []).reduce((sum, c) => {
                    const term = c.payment_term;
                    let match = false;
                    if (Array.isArray(term)) match = term.some(t => String(t).toUpperCase() === targetTerm);
                    else match = String(term) && String(term).toUpperCase() === targetTerm;
                    return match ? sum + (parseFloat(c.sale_value) || 0) : sum;
                }, 0);

            } else if (type === 'payments') {
                // Calcular Cobros
                const { data: allPayments } = await getAllPaymentsForReport(userName, dateStr, mode);
                newTotal = (allPayments || []).reduce((sum, p) => sum + (parseFloat(p.payment_amount) || 0), 0);
            } else if (type === 'expenses') {
                // Calcular Gastos
                const expCollection = mode === 'daily' ? 'expenses' : 'wexpenses';
                const datePart = dateStr.split('T')[0];
                
                const { data: expenses } = await sbClient.from(expCollection)
                    .select('total_expenses')
                    .eq('user_name', userName)
                    .gte('created_at', datePart + 'T00:00:00')
                    .lte('created_at', datePart + 'T23:59:59');
                    
                newTotal = (expenses || []).reduce((sum, e) => sum + (parseFloat(e.total_expenses)||0), 0);
            }

            // 2. Calcular Base Final
            const { data: report } = await sbClient.from(reportCollection).select('*').eq('report_number', reportId).single();
            if (!report) throw new Error("Reporte no encontrado");

            const initialBase = parseFloat(report.initial_base) || 0;
            let payments = parseFloat(report.payments_report) || 0;
            let credits = parseFloat(report.credits_report) || 0;
            let expenses = parseFloat(report.expense_report) || 0;

            if (type === 'credits') credits = newTotal;
            if (type === 'payments') payments = newTotal;
            if (type === 'expenses') expenses = newTotal;

            const finalBase = (payments + initialBase) - (credits + expenses);

            // 3. Mostrar Modal Obligatorio
            const typeLabel = type === 'credits' ? 'Créditos' : (type === 'payments' ? 'Cobros' : 'Gastos');
            showMandatoryUpdateModal(typeLabel, newTotal, finalBase, async () => {
                const updatePayload = { final_base: finalBase };
                if (type === 'credits') updatePayload.credits_report = newTotal;
                if (type === 'payments') updatePayload.payments_report = newTotal;
                if (type === 'expenses') updatePayload.expense_report = newTotal;
                
                if (report.og_final_base !== undefined && report.og_final_base !== null) {
                    updatePayload.og_final_base = finalBase;
                }

                await sbClient.from(reportCollection).update(updatePayload).eq('report_number', reportId);
                
                alert('Reporte actualizado correctamente.');
                pendingReportUpdate = false;
                modal.style.display = 'none'; // Cerrar detalle
                
                if (document.getElementById('pg-report-box').style.display === 'block') generatePgReport();
                if (document.getElementById('gn-report-box').style.display === 'block') generateGnReport();
            });

        } catch (e) {
            alert("Error calculando actualización: " + e.message);
            modal.style.display = 'none'; // Fallback close
        }
    }

    function showMandatoryUpdateModal(type, newValue, finalBaseValue, onConfirm) {
        const modalId = 'mandatory-update-modal';
        let modal = document.getElementById(modalId);
        
        if (!modal) {
            modal = document.createElement('div');
            modal.id = modalId;
            modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);z-index:10000;display:flex;justify-content:center;align-items:center;backdrop-filter:blur(5px);';
            document.body.appendChild(modal);
        }
        
        const userName = currentReportContext ? currentReportContext.userName : 'USUARIO';
        const mode = currentReportContext ? currentReportContext.mode : 'daily';
        const nextPeriod = mode === 'daily' ? 'dia' : 'semana';

        let title = `ACTUALIZAR DATOS DE CIERRE DE ${userName}`;
        let bodyHtml = '';

        const isInjection = type.toLowerCase().includes('inyección');
        const isFinalBaseEdit = type.toLowerCase().includes('edición base final');

        if (isInjection) {
            title = `PROXIMA INYECCION A ${userName.toUpperCase()}`;
            bodyHtml = `
                <div style="margin:20px 0;font-size:1.1em;background:#f4f7f9;padding:15px;border-radius:5px;text-align:left;">
                    <div style="margin-bottom:10px;display:flex;justify-content:space-between;">
                        <strong>Nueva base final:</strong> 
                        <span style="color:#28a745;font-weight:bold;">$ ${newValue.toLocaleString('es-CO')}</span>
                    </div>
                </div>
                <p style="font-size:0.9em; color:#6c757d; margin-top:15px; text-align: left;">Recuerde que la inyeccion se le mostrara a el como base inicial el proximo ${nextPeriod}.</p>
            `;
        } else if (isFinalBaseEdit) {
            bodyHtml = `
                <div style="margin:20px 0;font-size:1.1em;background:#f4f7f9;padding:15px;border-radius:5px;text-align:left;">
                    <div style="margin-bottom:10px;display:flex;justify-content:space-between;">
                        <strong>Nueva base final:</strong> 
                        <span style="color:#28a745;font-weight:bold;">$ ${newValue.toLocaleString('es-CO')}</span>
                    </div>
                </div>
            `;
        } else {
            bodyHtml = `
                <p style="font-size:1.1em; text-align:left; margin-bottom: 5px;">Cambios a realizar en el cierre:</p>
                <div style="margin:20px 0;font-size:1.1em;background:#f4f7f9;padding:15px;border-radius:5px;text-align:left;">
                    <div style="margin-bottom:10px;display:flex;justify-content:space-between;">
                        <strong>${type}:</strong> 
                        <span style="color:#28a745;font-weight:bold;">$ ${newValue.toLocaleString('es-CO')}</span>
                    </div>
                    <div style="display:flex;justify-content:space-between;">
                        <strong>Base final nueva calculada:</strong> 
                        <span style="color:#16233c;font-weight:bold;">$ ${finalBaseValue.toLocaleString('es-CO')}</span>
                    </div>
                </div>
            `;
        }

        modal.innerHTML = `
            <div style="background:white;padding:30px;border-radius:8px;text-align:center;max-width:500px;box-shadow:0 0 20px rgba(0,0,0,0.5);border: 2px solid #16233c;">
                <h3 style="color:#16233c;margin-top:0;text-transform:uppercase;">${title}</h3>
                ${bodyHtml}
                <button id="btn-confirm-mandatory-update" class="btn btn-primary" style="width:100%;font-size:1.1em;padding:12px;">Aceptar</button>
            </div>
        `;
        
        const btn = document.getElementById('btn-confirm-mandatory-update');
        btn.onclick = async () => {
            btn.innerText = "Procesando...";
            btn.disabled = true;
            await onConfirm();
            modal.style.display = 'none';
        };
        
        modal.style.display = 'flex';
    }

    async function getAllPaymentsForReport(userName, dateStr, mode) {
        const reportDate = new Date(dateStr);
        let startDate, endDate;

        if (mode === 'weekly') {
            const end = new Date(reportDate); end.setHours(23, 59, 59, 999);
            const start = new Date(reportDate); start.setDate(start.getDate() - 6); start.setHours(0, 0, 0, 0);
            startDate = start.toISOString(); endDate = end.toISOString();
        } else {
            const start = new Date(reportDate); start.setHours(0, 0, 0, 0);
            const end = new Date(reportDate); end.setHours(23, 59, 59, 999);
            startDate = start.toISOString(); endDate = end.toISOString();
        }

        const { data: payments, error } = await sbClient.from('payments').select('payment_amount, debtor_number').eq('user_name', userName).gte('created_at', startDate).lte('created_at', endDate);
        if (error) return { data: [], error };

        const debtorNumbers = [...new Set(payments.map(p => p.debtor_number).filter(Boolean))];
        let debtorsMap = new Map();
        if (debtorNumbers.length > 0) {
            const { data: debtors } = await sbClient.from('debtors').select('debtor_number, payment_term').in('debtor_number', debtorNumbers);
            if (debtors) debtors.forEach(d => debtorsMap.set(d.debtor_number, d.payment_term));
        }

        const targetTerm = mode === 'weekly' ? 'SEMANAL' : 'DIARIO';
        const filteredPayments = payments.filter(p => {
            const term = debtorsMap.get(p.debtor_number);
            if (!term) return false;
            if (Array.isArray(term)) return term.some(t => String(t).toUpperCase() === targetTerm);
            return String(term).toUpperCase() === targetTerm;
        });

        return { data: filteredPayments, error: null };
    }

    btnDownloadGn.addEventListener('click', () => {
        const dataToExport = currentGnReportData.map(r => {
            const hasInjection = r.og_final_base !== null && r.og_final_base !== undefined;
            const baseFinalDisplayValue = hasInjection ? r.og_final_base : r.final_base;
            const injectionDisplayValue = hasInjection ? r.final_base : null;
            return {
                user_name: r.user_name,
                credits_report: parseFloat(r.credits_report) || 0,
                payments_report: parseFloat(r.payments_report) || 0,
                expense_report: parseFloat(r.expense_report) || 0,
                initial_base: parseFloat(r.initial_base) || 0,
                final_base: parseFloat(baseFinalDisplayValue) || 0,
                inyeccion: injectionDisplayValue !== null ? (parseFloat(injectionDisplayValue) || 0) : '-',
                fecha: parseDateValue(r.created_at)
            };
        });

        const mapping = {
            user_name: 'ASESOR',
            credits_report: 'CREDITO',
            payments_report: 'COBRO',
            expense_report: 'GASTOS',
            initial_base: 'BASE INICIAL',
            final_base: 'BASE FINAL',
            inyeccion: 'INYECCION',
            fecha: 'FECHA'
        };
        exportToExcel(dataToExport, 'Reporte_Cierres', mapping);
    });

    // Inicializar la primera vista de reporte
    // btnReportPg.click(); // Eliminado para mostrar estado vacío inicial
});

// --- Observer para bloquear scroll del body cuando hay modales abiertos ---
const modalObserver = new MutationObserver(() => {
    const modals = document.querySelectorAll('.modal');
    const isAnyOpen = Array.from(modals).some(m => m.style.display === 'block' || m.style.display === 'flex');
    if (isAnyOpen) {
        document.body.classList.add('modal-open');
    } else {
        document.body.classList.remove('modal-open');
    }
});

document.querySelectorAll('.modal').forEach(modal => {
    modalObserver.observe(modal, { attributes: true, attributeFilter: ['style'] });
});