// funcionalidad.js

document.addEventListener('DOMContentLoaded', () => {
    // Referencias DOM
    const sidebar = document.querySelector('.sidebar');
    const sidebarLogo = document.querySelector('.sidebar-logo');
    const welcomeView = document.getElementById('welcome-view');
    const workspaceViews = document.querySelectorAll('.workspace-view');
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
    const dashboardBtns = document.querySelectorAll('.dashboard-btn');
    const appContainer = document.getElementById('app-container');
    const btnOpenExportModal = document.getElementById('btn-open-export-modal');
    const loginContainer = document.getElementById('login-container');

    // 1. Lógica Barra Lateral (Colapsar/Expandir)
    if (sidebarLogo) {
        sidebarLogo.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
        });
    }

    const headerLogo = document.querySelector('.sidebar-toggle-mobile');
    if(headerLogo){
        headerLogo.addEventListener('click', () => {
            document.body.classList.toggle('sidebar-mobile-open');
        });
    } 

    // 2. Navegación desde Dashboard (Menú de Bienvenida)
    dashboardBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const targetId = btn.getAttribute('data-target');
            if (targetId) {
                navigateToWorkspace(targetId);
            }
        });
    });

    // 3. Navegación desde Sidebar
    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');
            
            // Si es logout, dejar que functions.js lo maneje (no prevenimos default si fuera enlace real, pero aquí son anchors)
            if (targetId === 'logout') return; 
            if (targetId === 'import' || targetId === 'export') return;

            navigateToWorkspace(targetId);
        });
    });

    // Export Logic (Check for element existance)
    if (btnOpenExportModal) {
      sidebarLinks.forEach(link => {
          if (link.getAttribute('data-target') === 'export') {
              link.addEventListener('click', () => btnOpenExportModal.click());
          }
      });
    }
    // Función principal de navegación
    function navigateToWorkspace(targetId) {
        // Ocultar Welcome View
        if (welcomeView) welcomeView.style.display = 'none';
        
        // Mostrar Sidebar (colapsada por defecto al entrar a un espacio)
        if (sidebar) {
            sidebar.style.display = 'flex';
            // Asegurar que esté colapsada al entrar (según prompt)
            if (!sidebar.classList.contains('collapsed')) {
                sidebar.classList.add('collapsed');
            }
        }

        // Ocultar todas las vistas de trabajo
        workspaceViews.forEach(view => {
            view.style.display = 'none';
        });

        // Mostrar vista objetivo
        const targetView = document.getElementById(targetId);
        if (targetView) {
            targetView.style.display = 'block';
            // Guardar persistencia
            localStorage.setItem('lastWorkspace', targetId);
        }

        // Actualizar estado activo en sidebar
        sidebarLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-target') === targetId) {
                link.classList.add('active');
            }
        });
    }

    // Función para inicializar la vista post-login (Dashboard)
    window.initDashboard = function() {
        if (loginContainer) loginContainer.style.display = 'none';
        if (appContainer) appContainer.style.display = 'flex';
        
        // Regla: Sidebar oculta en Welcome View
        if (sidebar) sidebar.style.display = 'none'; 
        
        if (welcomeView) welcomeView.style.display = 'flex';
        
        // Ocultar resto de workspaces
        workspaceViews.forEach(view => view.style.display = 'none');
    };

    // Exponer navegación globalmente para usarla desde functions.js si es necesario
    window.navigateToWorkspace = navigateToWorkspace;
});
