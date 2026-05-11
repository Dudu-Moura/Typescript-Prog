import { useCallback, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Plus, Search, Filter } from 'lucide-react'
import toast from 'react-hot-toast'
import { listarLivros } from '../api/livros'
import type { Livro } from '../types'
import { BookCard } from '../components/BookCard'
import { Loader } from '../components/Loader'
import { EmptyState } from '../components/EmptyState'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { useAuth } from '../contexts/AuthContext'
import { extractErrorMessage } from '../lib/errors'
import { CreateBookModal } from '../components/CreateBookModal'

type Filtro = 'todos' | 'disponiveis' | 'emprestados'

export function BooksPage() {
  const { isAuthenticated } = useAuth()
  const [livros, setLivros] = useState<Livro[]>([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [filtro, setFiltro] = useState<Filtro>('todos')
  const [openModal, setOpenModal] = useState(false)

  const carregar = useCallback(async () => {
    setLoading(true)
    try {
      const disponivel = filtro === 'todos' ? undefined : filtro === 'disponiveis'
      const data = await listarLivros(disponivel)
      setLivros(data)
    } catch (err) {
      toast.error(extractErrorMessage(err, 'Erro ao carregar livros'))
    } finally {
      setLoading(false)
    }
  }, [filtro])

  useEffect(() => {
    carregar()
  }, [carregar])

  const filtrados = livros.filter((l) => {
    if (!query.trim()) return true
    const q = query.toLowerCase()
    return (
      l.titulo.toLowerCase().includes(q) ||
      l.autor.toLowerCase().includes(q) ||
      l.isbn.toLowerCase().includes(q)
    )
  })

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8"
      >
        <div>
          <h1 className="font-serif text-4xl font-semibold text-slate-100">Acervo</h1>
          <p className="mt-1 text-slate-400">
            {livros.length} {livros.length === 1 ? 'livro' : 'livros'} na biblioteca
          </p>
        </div>
        {isAuthenticated && (
          <Button onClick={() => setOpenModal(true)} size="md">
            <Plus className="w-4 h-4" />
            Novo livro
          </Button>
        )}
      </motion.div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="flex-1">
          <Input
            icon={<Search className="w-4 h-4" />}
            placeholder="Buscar por título, autor ou ISBN..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2 p-1 rounded-xl bg-ink-800/70 border border-white/10">
          {(['todos', 'disponiveis', 'emprestados'] as Filtro[]).map((f) => (
            <button
              key={f}
              onClick={() => setFiltro(f)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition flex items-center gap-1.5 ${
                filtro === f
                  ? 'bg-amber-500 text-ink-900'
                  : 'text-slate-400 hover:text-slate-100'
              }`}
            >
              {f === 'todos' && <Filter className="w-3.5 h-3.5" />}
              {f === 'todos' ? 'Todos' : f === 'disponiveis' ? 'Disponíveis' : 'Emprestados'}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <Loader label="Carregando acervo..." />
      ) : filtrados.length === 0 ? (
        <EmptyState
          icon={<BookOpen className="w-16 h-16" />}
          title={query ? 'Nenhum livro encontrado' : 'Acervo vazio'}
          description={
            query
              ? 'Tente buscar por outro termo'
              : isAuthenticated
              ? 'Comece adicionando o primeiro livro à biblioteca'
              : 'Faça login para adicionar livros'
          }
          action={
            isAuthenticated && !query ? (
              <Button onClick={() => setOpenModal(true)}>
                <Plus className="w-4 h-4" />
                Adicionar livro
              </Button>
            ) : null
          }
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtrados.map((livro, i) => (
            <BookCard key={livro.id} livro={livro} index={i} />
          ))}
        </div>
      )}

      <CreateBookModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onCreated={() => {
          setOpenModal(false)
          carregar()
        }}
      />
    </div>
  )
}
