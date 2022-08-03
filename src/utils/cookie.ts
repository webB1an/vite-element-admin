import Cookies from 'js-cookie'

export function CookiesSet(name: string, value: string): void {
  Cookies.set(name, value)
}

export function CookiesGet(name: string): string {
  return Cookies.get(name) || ''
}
