import { z } from 'zod'

const CreateLivroSchema = z.object({
    titulo: z.string().min(1),
    autor: z.string().min(1),
    descricao: z.string().min(10),
    isbn: z.string().min(10, 'ISBN inválido').max(13)
})

const UpdateLivroSchema = z.object({
    disponivel: z.boolean
})

export type CreateLivro = z.infer<typeof CreateLivroSchema>
export type UpdateLivro = z.infer<typeof UpdateLivroSchema> 