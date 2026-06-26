import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { appointmentApi, medicApi } from '../api/endpoints';
import { Spinner } from '../components/Spinner';
import { StatusBadge } from '../components/StatusBadge';
import { formatSchedule, ROLE_LABEL } from '../lib/format';
import type { AppointmentStatus, AppointmentSummary } from '../types';

const STAT_STYLE: Record<string, { bg: string; fg: string; icon: string; label: string }> = {
  PENDING: { bg: 'var(--warning-bg)', fg: 'var(--warning-fg)', icon: '⏳', label: 'Pendentes' },
  CONFIRMED: { bg: 'var(--info-bg)', fg: 'var(--info-fg)', icon: '✅', label: 'Confirmadas' },
  COMPLETED: { bg: 'var(--success-bg)', fg: 'var(--success-fg)', icon: '🏁', label: 'Concluídas' },
};

export function DashboardPage() {
  const { role, user } = useAuth();
  const [appointments, setAppointments] = useState<AppointmentSummary[]>([]);
  const [medicCount, setMedicCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const [appts, medics] = await Promise.all([
          appointmentApi.list().catch(() => []),
          medicApi.list().catch(() => []),
        ]);
        if (!active) return;
        setAppointments(appts);
        setMedicCount(medics.length);
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  if (loading) return <Spinner />;

  const count = (status: AppointmentStatus) => appointments.filter((a) => a.status === status).length;
  const name = user?.email.split('@')[0] ?? '';
  const upcoming = appointments
    .filter((a) => a.status === 'PENDING' || a.status === 'CONFIRMED')
    .slice(0, 5);

  return (
    <div>
      <h2 className="page-title">Olá, {name} 👋</h2>
      <p className="page-sub">
        Você está conectado como <strong>{role ? ROLE_LABEL[role] : ''}</strong>. Aqui está um resumo
        da sua atividade.
      </p>

      <div className="grid cols-3 mb-24">
        {(['PENDING', 'CONFIRMED', 'COMPLETED'] as const).map((s) => {
          const st = STAT_STYLE[s];
          return (
            <div className="stat-card" key={s}>
              <div className="stat-icon" style={{ background: st.bg, color: st.fg }}>
                {st.icon}
              </div>
              <div>
                <div className="stat-value">{count(s)}</div>
                <div className="stat-label">{st.label}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid cols-3 mb-24">
        <div className="stat-card">
          <div className="stat-icon" style={{ background: 'var(--brand-100)', color: 'var(--brand-700)' }}>
            📅
          </div>
          <div>
            <div className="stat-value">{appointments.length}</div>
            <div className="stat-label">Total de consultas</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#ccfbf1', color: 'var(--teal-600)' }}>
            🩺
          </div>
          <div>
            <div className="stat-value">{medicCount ?? '—'}</div>
            <div className="stat-label">Médicos disponíveis</div>
          </div>
        </div>
        {role === 'PATIENT' && (
          <Link to="/appointments" className="stat-card" style={{ textDecoration: 'none', cursor: 'pointer' }}>
            <div className="stat-icon" style={{ background: 'var(--brand-600)', color: '#fff' }}>
              ＋
            </div>
            <div>
              <div className="stat-value" style={{ fontSize: 18 }}>Agendar consulta</div>
              <div className="stat-label">Marque um novo horário</div>
            </div>
          </Link>
        )}
      </div>

      <div className="card">
        <div className="card-head">
          <h2>Próximas consultas</h2>
          <Link to="/appointments" className="btn btn-ghost btn-sm">
            Ver todas
          </Link>
        </div>
        {upcoming.length === 0 ? (
          <div className="empty">
            <div className="big">🗓️</div>
            <div>Nenhuma consulta agendada no momento.</div>
          </div>
        ) : (
          <div className="table-wrap">
            <table className="tbl">
              <thead>
                <tr>
                  <th>Quando</th>
                  <th>{role === 'MEDIC' ? 'Paciente' : 'Médico'}</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {upcoming.map((a, i) => (
                  <tr key={a.id ?? i}>
                    <td>{formatSchedule(a.scheduledAt, a.scheduledDate, a.scheduledHour)}</td>
                    <td>
                      {role === 'MEDIC'
                        ? a.patientName ?? '—'
                        : a.medicName ?? (a.medicId ? `Médico #${a.medicId}` : '—')}
                    </td>
                    <td>
                      <StatusBadge status={a.status} />
                    </td>
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
