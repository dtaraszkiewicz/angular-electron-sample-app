const { app, BrowserWindow } = require('electron');
require('update-electron-app')({
  repo: 'dtaraszkiewicz/angular-electron-sample-app'
});

if (require('electron-squirrel-startup')) app.quit();
// if first time install on windows, do not run application, rather
// let squirrel installer do its work
const setupEvents = require('./setup-events');
if (setupEvents.handleSquirrelEvent()) {
  process.exit();
}

let win;

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 1200, 
    height: 1200,
    backgroundColor: '#ffffff',
    webPreferences: {
      nodeIntegration: true,
		  backgroundThrottling: false
    }
  });

  win.loadURL(`file://${__dirname}/dist/angular-electron-sample-app/index.html`)

  win.maximize();

  // Event when the window is closed.
  win.on('closed', function () {
    win = null
  })
}

// Create window on electron intialization
app.on('ready', function () {
  createWindow();
  if (app.isPackaged === false) {
    win.webContents.openDevTools();
  }
})

// Quit when all windows are closed.
app.on('window-all-closed', function () {

  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', function () {
  // macOS specific close process
  if (win === null) {
    createWindow();
  }
})
