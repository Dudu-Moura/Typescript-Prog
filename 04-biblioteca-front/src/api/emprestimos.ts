import { api } from './client'
import type { Emprestimo } from '../types'

export async function listarEmprestimos(devolvido?: boolean): Promise<Emprestimo[]> {
  const params = devolvido === undefined ? {} : { devolvido }
  const { data } = await api.get<Emprestimo[]>('/emprestimos', { params })
  return data
}

export async function buscarEmprestimo(id: number): Promise<Emprestimo> {
  const { data } = await api.get<Emprestimo>(`/emprestimos/${id}`)
  return data
}

export async function realizarEmprestimo(livroId: number): Promise<Emprestimo> {
  const { data } = await api.post<Emprestimo>('/emprestimos', { livroId })
  return data
}

export async function devolverEmprestimo(id: number): Promise<void> {
  await api.patch(`/emprestimos/${id}/devolver`)
}
