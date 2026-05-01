export interface Emprestimo {
    id: number,
    livroId: number,
    nomeUsuario: string,
    dataEmprestimo: Date,
    dataDevolucao?: Date,
    devolvido: boolean
}

export type EmprestimoCreate = Omit<Emprestimo, 'id' | 'dataEmprestimo' | 'devolvido'>