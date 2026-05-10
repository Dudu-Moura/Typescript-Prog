import { z } from 'zod'

export const RegisterSchema = z.object({
    nome: z.string().min(2, 'Nome muito curto'),
    email: z.email('Email inválido'),
    senha: z.string().min(8, 'A senha é muito curta')
})

export const LoginSchema = z.object({
    email: z.email('Email inválido'),
    senha: z.string().min(8, 'A senha é muito curta')
})

export type Register = z.infer<typeof RegisterSchema>
export type Login = z.infer<typeof LoginSchema>

