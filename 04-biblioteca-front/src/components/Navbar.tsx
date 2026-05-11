import { Link, NavLink } from 'react-router-dom'
import { BookOpen, LogOut, Bookmark, LogIn, UserPlus } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import { motion } from 'framer-motion'

export function Navbar() {
  const { user, isAuthenticated, logout } = useAuth()

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative px-3 py-2 rounded-lg text-sm font-medium transition flex items-center gap-2 ${
      isActive ? 'text-amber-400' : 'text-slate-300 hover:text-slate-100'
    }`

  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-ink-900/70 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ rotate: -8, scale: 1.08 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="p-2 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/20"
          >
            <BookOpen className="w-5 h-5 text-amber-400" />
          </motion.div>
          <span className="font-serif text-xl font-semibold text-slate-100 tracking-tight">
            Biblioteca
          </span>
        </Link>

        <nav className="flex items-center gap-1">
          <NavLink to="/livros" className={linkClass}>
            <BookOpen className="w-4 h-4" />
            <span className="hidden sm:inline">Livros</span>
          </NavLink>

          {isAuthenticated && (
            <NavLink to="/emprestimos" className={linkClass}>
              <Bookmark className="w-4 h-4" />
              <span className="hidden sm:inline">Empréstimos</span>
            </NavLink>
          )}

          <div className="w-px h-6 bg-white/10 mx-2" />

          {isAuthenticated ? (
            <>
              <span className="hidden sm:inline text-sm text-slate-400 mr-2">
                Olá, <span className="text-slate-200 font-medium">{user?.nome}</span>
              </span>
              <button
                onClick={logout}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-red-400 hover:bg-red-500/10 transition flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Sair</span>
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" className={linkClass}>
                <LogIn className="w-4 h-4" />
                <span className="hidden sm:inline">Entrar</span>
              </NavLink>
              <NavLink
                to="/registrar"
                className="ml-1 px-3 py-2 rounded-lg text-sm font-semibold bg-amber-500 text-ink-900 hover:bg-amber-400 transition flex items-center gap-2"
              >
                <UserPlus className="w-4 h-4" />
                <span className="hidden sm:inline">Criar conta</span>
              </NavLink>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}
