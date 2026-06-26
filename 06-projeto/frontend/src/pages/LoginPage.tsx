import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { AuthAside } from '../components/AuthAside';
import { ApiError } from '../api/client';

export function LoginPage() {
  const { login } = useAuth();
  const toast = useToast();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email, password);
      toast.success('Bem-vindo de volta!');
      navigate('/');
    } catch (err) {
      const message = err instanceof ApiError ? err.message : 'Falha ao entrar';
      setError(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="auth-wrap">
      <AuthAside />
      <div className="auth-panel">
        <div className="auth-card">
          <h1>Entrar</h1>
          <p className="sub">Acesse sua conta para gerenciar suas consultas.</p>

          {error && <div className="alert alert-error">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="email"
                className="input"
                placeholder="voce@exemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="password">Senha</label>
              <input
                id="password"
                type="password"
                className="input"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button className="btn btn-primary btn-block" disabled={loading}>
              {loading ? 'Entrando…' : 'Entrar'}
            </button>
          </form>

          <p className="muted mt-24" style={{ textAlign: 'center' }}>
            Não tem uma conta? <Link to="/register">Cadastre-se</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
