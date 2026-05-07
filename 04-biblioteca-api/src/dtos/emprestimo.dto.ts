import { z } from 'zod'

export const CreateEmprestimoSchema = z.object({
    nomeUsuario: z.string().min(2),
    livroId: z.number().int().positive()
})

export const UpdateEmprestimoSchema = z.object({
    devolvido: z.boolean()
})

export type CreateEmprestimo = z.infer<typeof CreateEmprestimoSchema>
export type UpdateEmprestimo = z.infer<typeof UpdateEmprestimoSchema>