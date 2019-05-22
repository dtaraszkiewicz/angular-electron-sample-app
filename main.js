const { app, BrowserWindow, ipcMain } = require('electron');
const { os } = require('os');

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
  })


  win.loadURL(`file://${__dirname}/dist/angular-electron-sample-app/index.html`)

  win.webContents.openDevTools()

  // Event when the window is closed.
  win.on('closed', function () {
    win = null
  })
}

// Create window on electron intialization
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {

  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // macOS specific close process
  if (win === null) {
    createWindow()
  }
})

ipcMain.on('test', (event, arg) => {
  event.reply('testReply', 'reply')
})

ipcMain.on('getCPUTimes', (event, arg) => {
  const cpus = os.type();
  event.reply('cpuTimes', cpus);
})