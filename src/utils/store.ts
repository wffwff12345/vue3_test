import { USER_KEY } from '@/constants/user'
export function setStore (key:any, value:any) {
  if (!key) {
    console.warn('本地存储的key不能为空')
    return
  }
  if (value) {
    value = typeof value !== 'string' ? JSON.stringify(value) : value
  }
  localStorage.setItem(key, value)
}
export function getStore (key:any):any {
  if (!key) {
    console.warn('本地存储的key不能为空')
    return
  }
  let data = localStorage.getItem(key)
  if (data) {
    data = JSON.parse(data)
  }
  return data
}
export function clearStore (key:any) {
  if (!key) {
    console.warn('本地存储的key不能为空')
    return
  }
  localStorage.removeItem(key)
}
export function setUser (value:any):void {
  setStore(USER_KEY, value)
}
export function getUser ():any {
  return getStore(USER_KEY)
}
export function clearUser ():void {
  clearStore(USER_KEY)
}
