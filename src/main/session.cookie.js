import { session } from 'electron'

export function setSessionCookie(options) {
  session.defaultSession.cookies.set({
    url: options.url || window.location.href,
    name: options.name,
    value: options.value,
    expirationDate: options.expirationDate
  }, error => {
    if (error) console.error(error)
  })
}

export function getSessionCookie(options) {
  return new Promise((resolve, reject) => {
    session.defaultSession.cookies.get(options || {}, (error, cookies) => {
      if(error) reject(error)
      resolve(cookies)
    })
  })
}

export function removeSessionCookie(options) {
  session.defaultSession.cookies.remove(options.url, options.name, error => {
    if (error) console.error(error)
  })
}