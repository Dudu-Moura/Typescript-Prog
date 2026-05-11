import { api } from './client'
import type { Livro } from '../types'

export interface CreateLivroInput {
  titulo: string
  autor: string
  descricao: string
  isbn: string
}

export async function listarLivros(disponivel?: boolean): Promise<Livro[]> {
  const params = disponivel === undefined ? {} : { disponivel }
  const { data } = await api.get<Livro[]>('/livros', { params })
  return data
}

export async function buscarLivro(id: number): Promise<Livro> {
  const { data } = await api.get<Livro>(`/livros/${id}`)
  return data
}

export async function criarLivro(input: CreateLivroInput): Promise<Livro> {
  const { data } = await api.post<Livro>('/livros', input)
  return data
}

export async function deletarLivro(id: number): Promise<void> {
  await api.delete(`/livros/${id}`)
}
