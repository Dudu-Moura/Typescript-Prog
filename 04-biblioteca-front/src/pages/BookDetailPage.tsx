import { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, BookMarked, Trash2, BookCheck, Calendar, Hash, User as UserIcon } from 'lucide-react'
import toast from 'react-hot-toast'
import { buscarLivro, deletarLivro } from '../api/livros'
import { realizarEmprestimo } from '../api/emprestimos'
import type { Livro } from '../types'
import { Loader } from '../components/Loader'
import { Badge } from '../components/Badge'
import { Button } from '../components/Button'
import { useAuth } from '../contexts/AuthContext'
import { extractErrorMessage, extractStatus } from '../lib/errors'

export function BookDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { isAuthenticated } = useAuth()
  const [livro, setLivro] = useState<Livro | null>(null)
  const [loading, setLoading] = useState(true)
  const [acting, setActing] = useState(false)

  useEffect(() => {
    if (!id) return
    setLoading(true)
    buscarLivro(Number(id))
      .then(setLivro)
      .catch((err) => {
        const status = extractStatus(err)
        if (status === 404) {
          navigate('/erro/404', { replace: true })
        } else {
          toast.error(extractErrorMessage(err))
        }
      })
      .finally(() => setLoading(false))
  }, [id, navigate])

  const handleEmprestimo = async () => {
    if (!livro) return
    setActing(true)
    try {
      await realizarEmprestimo(livro.id)
      toast.success('Empréstimo realizado!')
      setLivro({ ...livro, disponivel: false })
    } catch (err) {
      toast.error(extractErrorMessage(err))
    } finally {
      setActing(false)
    }
  }

  const handleDeletar = async () => {
    if (!livro) return
    if (!confirm(`Deletar "${livro.titulo}"?`)) return
    setActing(true)
    try {
      await deletarLivro(livro.id)
      toast.success('Livro removido')
      navigate('/livros')
    } catch (err) {
      toast.error(extractErrorMessage(err))
    } finally {
      setActing(false)
    }
  }

  if (loading) return <Loader />
  if (!livro) return null

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <Link
        to="/livros"
        className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-amber-400 transition mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Voltar ao acervo
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="rounded-3xl bg-ink-800/70 backdrop-blur-sm border border-white/10 shadow-2xl overflow-hidden"
      >
        <div className="relative p-8 sm:p-10 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent">
          <div className="flex flex-col sm:flex-row gap-6">
            <motion.div
              initial={{ rotate: -6, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 150 }}
              className="shrink-0 mx-auto sm:mx-0"
            >
              <div className="w-32 h-44 rounded-xl bg-gradient-to-br from-amber-500/30 to-amber-700/20 border border-amber-500/30 flex items-center justify-center shadow-xl">
                <BookMarked className="w-12 h-12 text-amber-400" />
              </div>
            </motion.div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-3">
                {livro.disponivel ? (
                  <Badge tone="success">Disponível</Badge>
                ) : (
                  <Badge tone="warning">Emprestado</Badge>
                )}
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-100 leading-tight">
                {livro.titulo}
              </h1>
              <p className="mt-2 text-lg text-slate-300 flex items-center gap-2">
                <UserIcon className="w-4 h-4 text-slate-500" />
                {livro.autor}
              </p>
              <p className="mt-1 text-sm text-slate-500 flex items-center gap-2 font-mono">
                <Hash className="w-3.5 h-3.5" />
                ISBN {livro.isbn}
              </p>
            </div>
          </div>
        </div>

        <div className="px-8 sm:px-10 py-8 border-t border-white/5">
          <h2 className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-3">
            Descrição
          </h2>
          <p className="text-slate-200 leading-relaxed whitespace-pre-wrap">{livro.descricao}</p>
        </div>

        {isAuthenticated && (
          <div className="px-8 sm:px-10 py-6 border-t border-white/5 bg-ink-900/30 flex flex-wrap gap-3 justify-end">
            <Button
              variant="danger"
              onClick={handleDeletar}
              disabled={acting || !livro.disponivel}
              title={!livro.disponivel ? 'Não é possível deletar um livro emprestado' : undefined}
            >
              <Trash2 className="w-4 h-4" />
              Deletar
            </Button>
            <Button onClick={handleEmprestimo} loading={acting} disabled={!livro.disponivel}>
              <BookCheck className="w-4 h-4" />
              Realizar empréstimo
            </Button>
          </div>
        )}
      </motion.div>

      {!isAuthenticated && (
        <div className="mt-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-sm text-amber-200 flex items-center gap-3">
          <Calendar className="w-4 h-4 shrink-0" />
          <span>
            Para realizar um empréstimo,{' '}
            <Link to="/login" className="underline font-medium hover:text-amber-100">
              entre na sua conta
            </Link>
            .
          </span>
        </div>
      )}
    </div>
  )
}
