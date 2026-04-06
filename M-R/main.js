const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    title: "M-R Gestión - Ingeniero Santiago Orrego Silva",
    icon: path.join(__dirname, 'img/logo.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      spellcheck: true
    }
  });

  // Carga tu archivo principal (ajusta el nombre si no es index.html)
  mainWindow.loadFile('index.html');

  // Configuración para permitir ventanas secundarias (Informes)
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    return {
      action: 'allow',
      overrideBrowserWindowOptions: {
        width: 1200,
        height: 800,
        autoHideMenuBar: true,
        title: "Informe - M-R"
      }
    };
  });

  // Opcional: Ocultar menú por defecto para apariencia de App
  Menu.setApplicationMenu(null);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});