import { useCallback, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Bookmark, Calendar, CheckCircle2, RotateCcw } from 'lucide-react'
import toast from 'react-hot-toast'
import { devolverEmprestimo, listarEmprestimos } from '../api/emprestimos'
import { buscarLivro } from '../api/livros'
import type { Emprestimo, Livro } from '../types'
import { Loader } from '../components/Loader'
import { EmptyState } from '../components/EmptyState'
import { Button } from '../components/Button'
import { Badge } from '../components/Badge'
import { extractErrorMessage } from '../lib/errors'
import { Link } from 'react-router-dom'

type Filtro = 'todos' | 'ativos' | 'devolvidos'

function formatDate(iso?: string | null) {
  if (!iso) return '—'
  return new Date(iso).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })
}

export function LoansPage() {
  const [emprestimos, setEmprestimos] = useState<Emprestimo[]>([])
  const [loading, setLoading] = useState(true)
  const [filtro, setFiltro] = useState<Filtro>('todos')
  const [actingId, setActingId] = useState<number | null>(null)

  const carregar = useCallback(async () => {
    setLoading(true)
    try {
      const devolvido = filtro === 'todos' ? undefined : filtro === 'devolvidos'
      const data = await listarEmprestimos(devolvido)

      const ids = Array.from(new Set(data.map((e) => e.livroId)))
      const livrosMap = new Map<number, Livro>()
      await Promise.all(
        ids.map(async (id) => {
          try {
            const livro = await buscarLivro(id)
            livrosMap.set(id, livro)
          } catch {
            // livro pode ter sido removido — segue sem
          }
        })
      )

      setEmprestimos(data.map((e) => ({ ...e, livro: livrosMap.get(e.livroId) })))
    } catch (err) {
      toast.error(extractErrorMessage(err, 'Erro ao carregar empréstimos'))
    } finally {
      setLoading(false)
    }
  }, [filtro])

  useEffect(() => {
    carregar()
  }, [carregar])

  const devolver = async (id: number) => {
    setActingId(id)
    try {
      await devolverEmprestimo(id)
      toast.success('Livro devolvido!')
      carregar()
    } catch (err) {
      toast.error(extractErrorMessage(err))
    } finally {
      setActingId(null)
    }
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="font-serif text-4xl font-semibold text-slate-100">Meus empréstimos</h1>
        <p className="mt-1 text-slate-400">
          Acompanhe seu histórico e devolva livros pendentes
        </p>
      </motion.div>

      <div className="flex gap-2 p-1 rounded-xl bg-ink-800/70 border border-white/10 w-fit mb-6">
        {(['todos', 'ativos', 'devolvidos'] as Filtro[]).map((f) => (
          <button
            key={f}
            onClick={() => setFiltro(f)}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition ${
              filtro === f
                ? 'bg-amber-500 text-ink-900'
                : 'text-slate-400 hover:text-slate-100'
            }`}
          >
            {f === 'todos' ? 'Todos' : f === 'ativos' ? 'Ativos' : 'Devolvidos'}
          </button>
        ))}
      </div>

      {loading ? (
        <Loader />
      ) : emprestimos.length === 0 ? (
        <EmptyState
          icon={<Bookmark className="w-16 h-16" />}
          title="Sem empréstimos ainda"
          description="Explore o acervo e pegue um livro emprestado"
          action={
            <Link
              to="/livros"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 text-ink-900 font-semibold hover:bg-amber-400 transition"
            >
              Ver acervo
            </Link>
          }
        />
      ) : (
        <div className="space-y-3">
          {emprestimos.map((e, i) => (
            <motion.div
              key={e.id}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.04 }}
              className="p-5 rounded-2xl bg-ink-800/70 backdrop-blur-sm border border-white/10 hover:border-white/20 transition"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4 min-w-0">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 shrink-0">
                    <Bookmark className="w-5 h-5 text-amber-400" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      {e.devolvido ? (
                        <Badge tone="success">
                          <CheckCircle2 className="w-3 h-3" /> Devolvido
                        </Badge>
                      ) : (
                        <Badge tone="warning">Em aberto</Badge>
                      )}
                    </div>
                    {e.livro ? (
                      <Link
                        to={`/livros/${e.livro.id}`}
                        className="font-serif text-lg font-semibold text-slate-100 hover:text-amber-300 transition truncate block"
                      >
                        {e.livro.titulo}
                      </Link>
                    ) : (
                      <span className="font-serif text-lg font-semibold text-slate-100">
                        Livro #{e.livroId}
                      </span>
                    )}
                    {e.livro?.autor && (
                      <p className="text-sm text-slate-400">{e.livro.autor}</p>
                    )}
                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        Emprestado em {formatDate(e.dataEmprestimo)}
                      </span>
                      {e.devolvido && (
                        <span className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Devolvido em {formatDate(e.dataDevolucao)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {!e.devolvido && (
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => devolver(e.id)}
                    loading={actingId === e.id}
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Devolver
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}
