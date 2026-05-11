import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import toast from 'react-hot-toast'
import { Modal } from './Modal'
import { Input } from './Input'
import { Textarea } from './Textarea'
import { Button } from './Button'
import { criarLivro } from '../api/livros'
import { extractErrorMessage } from '../lib/errors'

const schema = z.object({
  titulo: z.string().min(1, 'Título obrigatório'),
  autor: z.string().min(1, 'Autor obrigatório'),
  descricao: z.string().min(10, 'Descrição muito curta (mínimo 10 caracteres)'),
  isbn: z.string().min(10, 'ISBN inválido').max(13, 'ISBN inválido')
})

type FormData = z.infer<typeof schema>

interface Props {
  open: boolean
  onClose: () => void
  onCreated: () => void
}

export function CreateBookModal({ open, onClose, onCreated }: Props) {
  const [submitting, setSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setSubmitting(true)
    try {
      await criarLivro(data)
      toast.success('Livro adicionado!')
      reset()
      onCreated()
    } catch (err) {
      toast.error(extractErrorMessage(err, 'Erro ao criar livro'))
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Modal open={open} onClose={onClose} title="Adicionar novo livro">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          label="Título"
          placeholder="Clean Code"
          error={errors.titulo?.message}
          {...register('titulo')}
        />
        <Input
          label="Autor"
          placeholder="Robert C. Martin"
          error={errors.autor?.message}
          {...register('autor')}
        />
        <Textarea
          label="Descrição"
          placeholder="Breve descrição do livro..."
          error={errors.descricao?.message}
          {...register('descricao')}
        />
        <Input
          label="ISBN"
          placeholder="9780132350884"
          error={errors.isbn?.message}
          {...register('isbn')}
        />

        <div className="flex justify-end gap-2 pt-2">
          <Button type="button" variant="ghost" onClick={onClose} disabled={submitting}>
            Cancelar
          </Button>
          <Button type="submit" loading={submitting}>
            Adicionar livro
          </Button>
        </div>
      </form>
    </Modal>
  )
}
