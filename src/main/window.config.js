import { getSessionCookie } from './session.cookie'

export const loginWindowConfig = {
  width: 450,
  height: 375,
  frame: false,
  resizable: false, 
  maximizable: false,
  minimizable: false,
  transparent: true,  //必须要透明才能开发多边形窗口
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
  transparent: true, 
  // 开启后无法调用maximize() 
  // 不会触发原生监听的window.on('maximize') 处处是坑
}

export function getSession() {
  return new Promise((resolve, reject) => {
    let isAutoSign = false
    getSessionCookie().then( cookies => {
      if (cookies.length) {
        getSessionCookie({name:'userInfo'}).then(cookie => {
          const userInfo = JSON.parse(cookie[0].value)
          console.log('userInfo', userInfo)
          if (userInfo.autoSign) {
            isAutoSign = true
          }
          resolve(isAutoSign)
        })
      } else {
        resolve(isAutoSign)
      }
    }).catch(error => {
      console.log(error)
      reject(error)
    })
  })
}


