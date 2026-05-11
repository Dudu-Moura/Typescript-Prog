import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BookOpen, ArrowRight, BookMarked, Sparkles } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

export function HomePage() {
  const { isAuthenticated, user } = useAuth()

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-sm font-medium mb-6"
        >
          <Sparkles className="w-4 h-4" />
          Sua biblioteca pessoal
        </motion.div>

        <h1 className="font-serif text-5xl sm:text-7xl font-bold text-slate-100 leading-tight tracking-tight mb-6">
          Descubra, leia,{' '}
          <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            empreste.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-10">
          {isAuthenticated
            ? `Olá ${user?.nome}, continue de onde parou — explore o acervo ou acompanhe seus empréstimos.`
            : 'Uma biblioteca moderna para gerenciar livros, empréstimos e leituras. Crie sua conta e comece agora mesmo.'}
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            to="/livros"
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 text-ink-900 font-semibold hover:bg-amber-400 transition shadow-lg shadow-amber-500/20"
          >
            <BookOpen className="w-5 h-5" />
            Explorar acervo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </Link>
          {!isAuthenticated && (
            <Link
              to="/registrar"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-ink-700 text-slate-100 font-semibold hover:bg-ink-600 border border-white/10 transition"
            >
              Criar conta grátis
            </Link>
          )}
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } } }}
        className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {[
          {
            icon: BookOpen,
            title: 'Acervo organizado',
            desc: 'Busque por título, autor ou ISBN e filtre por disponibilidade.'
          },
          {
            icon: BookMarked,
            title: 'Empréstimos simples',
            desc: 'Faça e devolva empréstimos com um clique. Histórico sempre acessível.'
          },
          {
            icon: Sparkles,
            title: 'Conta segura',
            desc: 'Autenticação com JWT. Apenas você gerencia seus empréstimos.'
          }
        ].map((f) => (
          <motion.div
            key={f.title}
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 }
            }}
            className="p-6 rounded-2xl bg-ink-800/60 backdrop-blur-sm border border-white/10 hover:border-amber-500/30 transition"
          >
            <div className="inline-flex p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 mb-4">
              <f.icon className="w-5 h-5 text-amber-400" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-slate-100 mb-1">{f.title}</h3>
            <p className="text-sm text-slate-400">{f.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
