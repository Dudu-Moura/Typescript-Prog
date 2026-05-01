export interface Livro {
    id: number,
    titulo: string,
    descricao: string,
    autor: string,
    isbn: string,
    disponivel: boolean,
    criadoEm: Date
}

export type CreateLivroBody = Omit<Livro, 'id' | 'disponivel' | 'criadoEm'>
export type UpdateLivro = Pick<Livro, 'disponivel'>

