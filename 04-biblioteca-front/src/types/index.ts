export interface Livro {
  id: number
  titulo: string
  autor: string
  descricao: string
  isbn: string
  disponivel: boolean
  ativo: boolean
  deletadoEm?: string | null
}

export interface Emprestimo {
  id: number
  livroId: number
  nomeUsuario: string
  dataEmprestimo: string
  dataDevolucao?: string | null
  devolvido: boolean
  livro?: Livro
}

export interface Usuario {
  id: number
  nome: string
  email: string
}

export interface AuthResponse {
  message: string
  token: string
}

export interface ApiError {
  message: string
  errors?: { path: string; message: string }[]
}

export interface JwtPayload {
  id: number
  nome: string
  email: string
  iat: number
  exp: number
}
