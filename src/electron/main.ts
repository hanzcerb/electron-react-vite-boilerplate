import { app, BrowserWindow, shell } from 'electron'
import path from 'path'
import { isDev } from './util.js'

app.on('ready', () => {
  const mainWindow = new BrowserWindow({})
  // if Development use localhost, else use dist-react
  if (isDev()) {
    mainWindow.loadURL('http://localhost:5123')
  } else {
    mainWindow.loadFile(path.join(app.getAppPath(), '/dist-react/index.html'))
  }

  // Intercept request to open new window
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    // Check if URL is a safe external link
    if (url.startsWith('http://') || url.startsWith('https://')) {
      shell.openExternal(url)
    }
    return { action: 'deny' }
  })
})
