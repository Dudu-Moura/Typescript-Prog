import type { JwtPayload } from '../types'

export function decodeJwt(token: string): JwtPayload | null {
  try {
    const base64 = token.split('.')[1]
    const json = atob(base64.replace(/-/g, '+').replace(/_/g, '/'))
    return JSON.parse(json) as JwtPayload
  } catch {
    return null
  }
}

export function isExpired(payload: JwtPayload | null): boolean {
  if (!payload) return true
  return payload.exp * 1000 < Date.now()
}
