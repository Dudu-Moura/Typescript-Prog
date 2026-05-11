import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { BookMarked } from 'lucide-react'
import type { Livro } from '../types'
import { Badge } from './Badge'

interface Props {
  livro: Livro
  index?: number
}

export function BookCard({ livro, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      whileHover={{ y: -4 }}
      className="group"
    >
      <Link
        to={`/livros/${livro.id}`}
        className="relative block h-full p-5 rounded-2xl bg-ink-800/70 backdrop-blur-sm border border-white/10 hover:border-amber-500/40 transition shadow-lg hover:shadow-amber-500/5"
      >
        <div className="flex items-start justify-between mb-4">
          <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20">
            <BookMarked className="w-5 h-5 text-amber-400" />
          </div>
          {livro.disponivel ? (
            <Badge tone="success">Disponível</Badge>
          ) : (
            <Badge tone="warning">Emprestado</Badge>
          )}
        </div>

        <h3 className="font-serif text-lg font-semibold text-slate-100 mb-1 leading-snug group-hover:text-amber-300 transition">
          {livro.titulo}
        </h3>
        <p className="text-sm text-slate-400 mb-3">{livro.autor}</p>
        <p className="text-sm text-slate-500 line-clamp-2 mb-4">{livro.descricao}</p>

        <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
          <span className="text-slate-500 font-mono">ISBN {livro.isbn}</span>
          <span className="text-amber-400/70 group-hover:text-amber-300 transition">Ver detalhes →</span>
        </div>
      </Link>
    </motion.div>
  )
}
