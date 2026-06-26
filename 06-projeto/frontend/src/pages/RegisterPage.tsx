import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { AuthAside } from '../components/AuthAside';
import { ApiError } from '../api/client';
import type { RegisterInput } from '../types';

type Mode = 'PATIENT' | 'MEDIC';

export function RegisterPage() {
  const { register } = useAuth();
  const toast = useToast();
  const navigate = useNavigate();

  const [mode, setMode] = useState<Mode>('PATIENT');
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [crm, setCrm] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');

    if (name.length < 3 || name.length > 10) {
      return setError('O nome deve ter entre 3 e 10 caracteres.');
    }
    if (!/^\d{11}$/.test(cpf)) {
      return setError('O CPF deve conter exatamente 11 dígitos numéricos.');
    }
    if (password.length < 8) {
      return setError('A senha deve ter pelo menos 8 caracteres.');
    }
    if (mode === 'MEDIC' && crm.length < 8) {
      return setError('O CRM deve ter pelo menos 8 caracteres.');
    }
    if (mode === 'MEDIC' && specialty.length < 5) {
      return setError('A especialidade deve ter pelo menos 5 caracteres.');
    }

    const payload: RegisterInput = { user: { name, cpf, email, password } };
    if (mode === 'MEDIC') payload.medic = { crm, specialty };

    setLoading(true);
    try {
      await register(payload);
      toast.success('Conta criada com sucesso!');
      navigate('/');
    } catch (err) {
      const message = err instanceof ApiError ? err.message : 'Falha ao cadastrar';
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
          <h1>Criar conta</h1>
          <p className="sub">Escolha o tipo de conta e preencha seus dados.</p>

          <div className="segmented">
            <button
              type="button"
              className={mode === 'PATIENT' ? 'active' : ''}
              onClick={() => setMode('PATIENT')}
            >
              🧑 Paciente
            </button>
            <button
              type="button"
              className={mode === 'MEDIC' ? 'active' : ''}
              onClick={() => setMode('MEDIC')}
            >
              🩺 Médico
            </button>
          </div>

          {error && <div className="alert alert-error">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={10}
                required
              />
              <div className="hint">Entre 3 e 10 caracteres.</div>
            </div>
            <div className="field">
              <label htmlFor="cpf">CPF</label>
              <input
                id="cpf"
                className="input"
                value={cpf}
                onChange={(e) => setCpf(e.target.value.replace(/\D/g, '').slice(0, 11))}
                placeholder="Apenas números"
                inputMode="numeric"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="email"
                className="input"
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="hint">Mínimo de 8 caracteres.</div>
            </div>

            {mode === 'MEDIC' && (
              <>
                <div className="field">
                  <label htmlFor="crm">CRM</label>
                  <input
                    id="crm"
                    className="input"
                    value={crm}
                    onChange={(e) => setCrm(e.target.value)}
                    required
                  />
                  <div className="hint">Mínimo de 8 caracteres.</div>
                </div>
                <div className="field">
                  <label htmlFor="specialty">Especialidade</label>
                  <input
                    id="specialty"
                    className="input"
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                    placeholder="Ex.: Cardiologia"
                    required
                  />
                </div>
              </>
            )}

            <button className="btn btn-primary btn-block" disabled={loading}>
              {loading ? 'Cadastrando…' : 'Criar conta'}
            </button>
          </form>

          <p className="muted mt-24" style={{ textAlign: 'center' }}>
            Já tem uma conta? <Link to="/login">Entrar</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
