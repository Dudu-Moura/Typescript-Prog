import { api } from './client'
import type { AuthResponse } from '../types'

export async function login(email: string, senha: string) {
  const { data } = await api.post<AuthResponse>('/auth/login', { email, senha })
  return data
}

export async function registrar(nome: string, email: string, senha: string) {
  const { data } = await api.post<AuthResponse>('/auth/registrar', { nome, email, senha })
  return data
}
