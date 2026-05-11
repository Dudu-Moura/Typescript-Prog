import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { UserPlus, Mail, Lock, User } from 'lucide-react'
import toast from 'react-hot-toast'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { useAuth } from '../contexts/AuthContext'
import { extractErrorMessage } from '../lib/errors'

const schema = z.object({
  nome: z.string().min(2, 'Nome muito curto'),
  email: z.string().email('Email inválido'),
  senha: z.string().min(8, 'A senha precisa ter pelo menos 8 caracteres')
})

type FormData = z.infer<typeof schema>

export function RegisterPage() {
  const navigate = useNavigate()
  const { register: signUp } = useAuth()
  const [submitting, setSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setSubmitting(true)
    try {
      await signUp(data.nome, data.email, data.senha)
      toast.success('Conta criada com sucesso!')
      navigate('/livros', { replace: true })
    } catch (err) {
      toast.error(extractErrorMessage(err, 'Não foi possível criar a conta'))
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0.8, rotate: 8 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/20 mb-4"
          >
            <UserPlus className="w-8 h-8 text-amber-400" />
          </motion.div>
          <h1 className="font-serif text-3xl font-semibold text-slate-100">Criar conta</h1>
          <p className="mt-2 text-sm text-slate-400">Cadastre-se para começar a explorar livros</p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 p-8 rounded-2xl bg-ink-800/70 backdrop-blur-sm border border-white/10 shadow-xl"
        >
          <Input
            label="Nome"
            placeholder="Seu nome"
            icon={<User className="w-4 h-4" />}
            error={errors.nome?.message}
            autoComplete="name"
            {...register('nome')}
          />
          <Input
            label="Email"
            type="email"
            placeholder="seu@email.com"
            icon={<Mail className="w-4 h-4" />}
            error={errors.email?.message}
            autoComplete="email"
            {...register('email')}
          />
          <Input
            label="Senha"
            type="password"
            placeholder="Mínimo 8 caracteres"
            icon={<Lock className="w-4 h-4" />}
            error={errors.senha?.message}
            autoComplete="new-password"
            {...register('senha')}
          />

          <Button type="submit" size="lg" loading={submitting} className="w-full mt-2">
            Criar conta
          </Button>

          <p className="text-center text-sm text-slate-400 pt-2">
            Já tem conta?{' '}
            <Link to="/login" className="text-amber-400 hover:text-amber-300 font-medium">
              Entrar
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
  )
}
