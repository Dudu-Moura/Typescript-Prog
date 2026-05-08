import { z } from 'zod'

export const CreateLoginSchema = z.object({
    nome: z.string().min(2, 'Nome muito curto'),
    email: z.email('Email inválido'),
    senha: z.string().min(8, 'A senha é muito curta')
})


export type CreateLogin = z.infer<typeof CreateLoginSchema>