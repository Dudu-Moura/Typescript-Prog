import { Link, useRouteError, isRouteErrorResponse } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AlertTriangle, Home } from 'lucide-react'

interface Props {
  status?: number
  title?: string
  message?: string
}

export function ErrorPage({ status, title, message }: Props) {
  const routeError = useRouteError()

  let finalStatus = status ?? 500
  let finalTitle = title ?? 'Algo deu errado'
  let finalMessage = message ?? 'Encontramos um problema inesperado. Tente novamente em alguns instantes.'

  if (isRouteErrorResponse(routeError)) {
    finalStatus = routeError.status
    if (routeError.status === 404) {
      finalTitle = 'Página não encontrada'
      finalMessage = 'A página que você procurou não existe ou foi removida.'
    }
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center max-w-md"
      >
        <motion.div
          initial={{ scale: 0.7, rotate: -8 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 180 }}
          className="inline-flex p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 mb-6"
        >
          <AlertTriangle className="w-10 h-10 text-amber-400" />
        </motion.div>

        <div className="relative mb-4">
          <h1 className="font-serif text-8xl sm:text-9xl font-bold bg-gradient-to-br from-amber-400 to-amber-600 bg-clip-text text-transparent select-none">
            {finalStatus}
          </h1>
        </div>

        <h2 className="font-serif text-2xl font-semibold text-slate-100 mb-2">{finalTitle}</h2>
        <p className="text-slate-400 mb-8">{finalMessage}</p>

        <div className="flex justify-center gap-3">
          <Link
            to="/livros"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 text-ink-900 font-semibold hover:bg-amber-400 transition"
          >
            <Home className="w-4 h-4" />
            Voltar ao acervo
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

export function NotFoundPage() {
  return (
    <ErrorPage
      status={404}
      title="Página não encontrada"
      message="A página que você procurou não existe ou foi movida."
    />
  )
}

export function UnauthorizedPage() {
  return (
    <ErrorPage
      status={401}
      title="Não autorizado"
      message="Você precisa estar autenticado para acessar este recurso."
    />
  )
}

export function ConflictPage() {
  return (
    <ErrorPage
      status={409}
      title="Conflito"
      message="A ação não pôde ser concluída por conflito com o estado atual."
    />
  )
}
