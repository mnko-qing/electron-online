
import { path } from 'path'
import { loginWindowConfig, mainWindowConfig } from './window.config'
import { app, Tray, Menu, ipcMain, session, BrowserWindow } from 'electron'

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
    const window = res ? mainWindowConfig : loginWindowConfig
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

function getSession() {
  return new Promise((resolve, reject) => {
    let isAutoSign = false
    session.defaultSession.cookies.get({}, (error, cookies) => {
      console.log(error, cookies)
      if( error ) reject(error) 
      if (cookies.length) {
        const cookie = JSON.parse(cookies[0].value)
        if (cookie.autoSign) {
          winURL += '/#/window'
          isAutoSign = true
        }
      } 
      resolve(isAutoSign)
    })
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
