export interface Emprestimo {
    id: number,
    livroId: number,
    nomeUsuario: string,
    dataEmprestimo: Date,
    dataDevolucao?: Date,
    devolvido: boolean
}

export type CreateEmprestimo = Omit<Emprestimo, 'id' | 'dataEmprestimo' | 'devolvido'>
export type UpdateEmprestimo = Pick<Emprestimo, 'devolvido'>