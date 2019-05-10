// import { Tray, Menu, ipcMain } from 'electron'

export const loginWindowConfig = {
  width: 450,
  height: 375,
  frame: false,
  resizable: false, 
  maximizable:false,
  transparent: true,
}

export const mainWindowConfig = {
  width: 1000,
  minWidth: 800,
  height: 700,
  minHeight: 600,
  frame: false,
  resizable:true,
  maximizable:true,
  minimizable: true,
  // transparent: true, 开启后无法调用maximize() 
  // 不会触发原生监听的window.on('maximize') 处处是坑
}



