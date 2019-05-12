import { path } from 'path'
import { app, Tray, Menu, ipcMain, BrowserWindow } from 'electron'
import { 
  getSession,
  loginWindowConfig, 
  mainWindowConfig 
} from './window.config'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */

if (process.env.NODE_ENV !== 'development') {
  global.__static = path.join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow, tray

let winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9060`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  getSession().then( res => {
    let window = loginWindowConfig

    if (res) {
      window = mainWindowConfig
      winURL += '/#/window'
    }
    mainWindow = new BrowserWindow(window)
    mainWindow.webContents.closeDevTools()
    mainWindow.loadURL(winURL)
    mainWindow.on('close', event => { closeMainWindow(event) })
    mainWindow.on('closed', () => { mainWindow = null })
    !res && createTray()
  }).catch( error => {
    console.log(error)
  })
}

function createTray() {
  tray = new Tray('build/icons/icon.ico')
  const contextMenu = Menu.buildFromTemplate([
    { label: '打开', click() { openMainWindow() }},
    { type: 'separator' },
    {
      label: '退出', click() {
        tray.destroy()
        mainWindow.destroy()
      }
    }
  ])
  tray.setToolTip('在线协作')
  tray.setContextMenu(contextMenu)
  tray.on('double-click', () => { openMainWindow() })
}

function openMainWindow() {
  if (!mainWindow.isVisible()) {
    mainWindow.show()
  }
} 

function closeMainWindow(event) {
  mainWindow.hide()
  event.preventDefault()
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

ipcMain.on('resize', () => {
  mainWindow.setSize(mainWindowConfig.width, mainWindowConfig.height)
  mainWindow.setResizable(mainWindowConfig.resizable)
  mainWindow.setMinimizable(mainWindowConfig.minimizable)
  mainWindow.setMinimumSize(mainWindowConfig.minWidth,mainWindowConfig.minHeight)
  mainWindow.setMaximizable(mainWindowConfig.maximizable)
  mainWindow.center()
  tray.destroy()
})

ipcMain.on('close', event => { closeMainWindow(event) })

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})

 */
