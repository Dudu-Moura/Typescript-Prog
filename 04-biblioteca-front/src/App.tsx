import { Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from './contexts/AuthContext'
import { Navbar } from './components/Navbar'
import { Background } from './components/Background'
import { ProtectedRoute } from './components/ProtectedRoute'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import { BooksPage } from './pages/BooksPage'
import { BookDetailPage } from './pages/BookDetailPage'
import { LoansPage } from './pages/LoansPage'
import {
  ErrorPage,
  NotFoundPage,
  UnauthorizedPage,
  ConflictPage
} from './pages/ErrorPage'

export function App() {
  return (
    <AuthProvider>
      <Background />
      <Navbar />
      <main className="relative">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registrar" element={<RegisterPage />} />
          <Route path="/livros" element={<BooksPage />} />
          <Route path="/livros/:id" element={<BookDetailPage />} />
          <Route
            path="/emprestimos"
            element={
              <ProtectedRoute>
                <LoansPage />
              </ProtectedRoute>
            }
          />
          <Route path="/erro/404" element={<NotFoundPage />} />
          <Route path="/erro/401" element={<UnauthorizedPage />} />
          <Route path="/erro/409" element={<ConflictPage />} />
          <Route path="/erro" element={<ErrorPage />} />
          <Route path="/erro/:status" element={<ErrorPage />} />
          <Route path="*" element={<Navigate to="/erro/404" replace />} />
        </Routes>
      </main>

      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#11141a',
            color: '#f1f5f9',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '12px'
          },
          success: { iconTheme: { primary: '#f5b840', secondary: '#0b0d10' } },
          error: { iconTheme: { primary: '#f87171', secondary: '#0b0d10' } }
        }}
      />
    </AuthProvider>
  )
}
