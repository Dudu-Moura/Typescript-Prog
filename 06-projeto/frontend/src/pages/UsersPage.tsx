import { useEffect, useState } from 'react';
import { userApi } from '../api/endpoints';
import { Spinner, EmptyState } from '../components/Spinner';
import { useToast } from '../context/ToastContext';
import { ApiError } from '../api/client';
import { initials } from '../lib/format';
import type { UserSummary } from '../types';

export function UsersPage() {
  const toast = useToast();
  const [users, setUsers] = useState<UserSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const data = await userApi.list();
        if (active) setUsers(data);
      } catch (err) {
        toast.error('Erro ao carregar usuários', err instanceof ApiError ? err.message : undefined);
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, [toast]);

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(query.toLowerCase()) ||
      u.email.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div>
      <div className="row between mb-24 wrap">
        <div>
          <h2 className="page-title">Usuários</h2>
          <p className="muted">Todos os usuários cadastrados no sistema.</p>
        </div>
        <input
          className="input"
          style={{ maxWidth: 260 }}
          placeholder="🔍 Buscar por nome ou e-mail"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="card">
        {loading ? (
          <Spinner />
        ) : filtered.length === 0 ? (
          <EmptyState icon="👥" title="Nenhum usuário encontrado" />
        ) : (
          <div className="table-wrap">
            <table className="tbl">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>E-mail</th>
                  <th>CPF</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((u) => (
                  <tr key={u.email}>
                    <td>
                      <div className="row">
                        <span
                          className="avatar"
                          style={{
                            width: 34,
                            height: 34,
                            borderRadius: '50%',
                            fontSize: 13,
                            background: 'var(--brand-100)',
                            color: 'var(--brand-700)',
                            display: 'grid',
                            placeItems: 'center',
                            fontWeight: 700,
                          }}
                        >
                          {initials(u.name)}
                        </span>
                        <strong>{u.name}</strong>
                      </div>
                    </td>
                    <td className="muted">{u.email}</td>
                    <td className="muted">{u.cpf}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
