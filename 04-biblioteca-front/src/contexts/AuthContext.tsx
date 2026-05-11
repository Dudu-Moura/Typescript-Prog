import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { clearToken, getToken, setToken, setUnauthorizedHandler } from '../api/client'
import * as authApi from '../api/auth'
import { decodeJwt, isExpired } from '../lib/jwt'
import type { Usuario } from '../types'

interface AuthContextValue {
  user: Usuario | null
  isAuthenticated: boolean
  login: (email: string, senha: string) => Promise<void>
  register: (nome: string, email: string, senha: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<Usuario | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const token = getToken()
    if (!token) return
    const payload = decodeJwt(token)
    if (!payload || isExpired(payload)) {
      clearToken()
      return
    }
    setUser({ id: payload.id, nome: payload.nome, email: payload.email })
  }, [])

  useEffect(() => {
    setUnauthorizedHandler(() => {
      clearToken()
      setUser(null)
      toast.error('Sessão expirada. Faça login novamente.')
      navigate('/login')
    })
  }, [navigate])

  const login = async (email: string, senha: string) => {
    const { token } = await authApi.login(email, senha)
    setToken(token)
    const payload = decodeJwt(token)
    if (payload) setUser({ id: payload.id, nome: payload.nome, email: payload.email })
  }

  const register = async (nome: string, email: string, senha: string) => {
    const { token } = await authApi.registrar(nome, email, senha)
    setToken(token)
    const payload = decodeJwt(token)
    if (payload) setUser({ id: payload.id, nome: payload.nome, email: payload.email })
  }

  const logout = () => {
    clearToken()
    setUser(null)
    navigate('/login')
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth deve ser usado dentro de AuthProvider')
  return ctx
}
