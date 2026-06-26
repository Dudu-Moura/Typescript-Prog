import { useEffect, useState, type FormEvent } from 'react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { userApi } from '../api/endpoints';
import { Spinner } from '../components/Spinner';
import { ApiError } from '../api/client';
import { initials, ROLE_LABEL } from '../lib/format';

export function ProfilePage() {
  const { user, role, logout } = useAuth();
  const toast = useToast();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [emailChanged, setEmailChanged] = useState(false);

  useEffect(() => {
    let active = true;
    (async () => {
      if (!user) return;
      try {
        const data = await userApi.get(user.id);
        if (!active) return;
        setName(data.name);
        setCpf(data.cpf);
        setEmail(data.email);
      } catch {
        if (active && user) setEmail(user.email);
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, [user]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');

    const payload: Record<string, string> = {};
    if (name) {
      if (name.length < 3 || name.length > 10) return setError('O nome deve ter entre 3 e 10 caracteres.');
      payload.name = name;
    }
    if (cpf) {
      if (!/^\d{11}$/.test(cpf)) return setError('O CPF deve conter 11 dígitos.');
      payload.cpf = cpf;
    }
    if (email) payload.email = email;
    if (password) {
      if (password.length < 8) return setError('A senha deve ter pelo menos 8 caracteres.');
      payload.password = password;
    }

    setSaving(true);
    try {
      const willChangeEmail = email !== user?.email;
      await userApi.update(payload);
      toast.success('Perfil atualizado!');
      setPassword('');
      if (willChangeEmail) setEmailChanged(true);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Falha ao atualizar perfil');
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <Spinner />;

  return (
    <div>
      <h2 className="page-title">Meu perfil</h2>
      <p className="page-sub">Atualize seus dados pessoais.</p>

      <div className="grid cols-2" style={{ alignItems: 'start' }}>
        <div className="card card-pad">
          <div className="row mb-16">
            <div
              className="avatar"
              style={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                fontSize: 24,
                background: 'linear-gradient(135deg, var(--brand-500), var(--teal-500))',
                color: '#fff',
                display: 'grid',
                placeItems: 'center',
                fontWeight: 700,
              }}
            >
              {initials(name || email)}
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 18 }}>{name || '—'}</div>
              <span className="badge badge-role mt-4">{role ? ROLE_LABEL[role] : ''}</span>
            </div>
          </div>
          <div className="row between" style={{ borderTop: '1px solid var(--border)', paddingTop: 14 }}>
            <span className="muted">E-mail</span>
            <span style={{ fontWeight: 600 }}>{email}</span>
          </div>
          <div className="row between mt-8">
            <span className="muted">CPF</span>
            <span style={{ fontWeight: 600 }}>{cpf || '—'}</span>
          </div>
        </div>

        <div className="card card-pad">
          <h3 className="mb-16">Editar dados</h3>

          {emailChanged && (
            <div className="alert" style={{ background: 'var(--warning-bg)', color: 'var(--warning-fg)' }}>
              Você alterou seu e-mail. Faça login novamente para atualizar sua sessão.{' '}
              <a href="#" onClick={logout} style={{ color: 'inherit', textDecoration: 'underline' }}>
                Sair agora
              </a>
            </div>
          )}
          {error && <div className="alert alert-error">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="p-name">Nome</label>
              <input id="p-name" className="input" value={name} maxLength={10} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="field">
              <label htmlFor="p-cpf">CPF</label>
              <input
                id="p-cpf"
                className="input"
                value={cpf}
                inputMode="numeric"
                onChange={(e) => setCpf(e.target.value.replace(/\D/g, '').slice(0, 11))}
              />
            </div>
            <div className="field">
              <label htmlFor="p-email">E-mail</label>
              <input id="p-email" type="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="field">
              <label htmlFor="p-password">Nova senha</label>
              <input
                id="p-password"
                type="password"
                className="input"
                value={password}
                placeholder="Deixe em branco para manter a atual"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="btn btn-primary" disabled={saving}>
              {saving ? 'Salvando…' : 'Salvar alterações'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
