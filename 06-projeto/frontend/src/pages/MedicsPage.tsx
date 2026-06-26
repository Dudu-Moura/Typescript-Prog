import { useEffect, useState } from 'react';
import { medicApi } from '../api/endpoints';
import { Spinner, EmptyState } from '../components/Spinner';
import { useToast } from '../context/ToastContext';
import { ApiError } from '../api/client';
import { initials } from '../lib/format';
import type { Medic } from '../types';

const SPECIALTY_ICONS: Record<string, string> = {
  cardio: '❤️',
  pedia: '🧸',
  derma: '🧴',
  neuro: '🧠',
  orto: '🦴',
  oftalmo: '👁️',
  gineco: '🌸',
  psiq: '🛋️',
};

function specialtyIcon(specialty: string): string {
  const key = specialty.toLowerCase();
  for (const prefix in SPECIALTY_ICONS) {
    if (key.startsWith(prefix)) return SPECIALTY_ICONS[prefix];
  }
  return '🩺';
}

export function MedicsPage() {
  const toast = useToast();
  const [medics, setMedics] = useState<Medic[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const data = await medicApi.list();
        if (active) setMedics(data);
      } catch (err) {
        toast.error('Erro ao carregar médicos', err instanceof ApiError ? err.message : undefined);
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, [toast]);

  const filtered = medics.filter(
    (m) =>
      m.name.toLowerCase().includes(query.toLowerCase()) ||
      m.specialty.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div>
      <div className="row between mb-24 wrap">
        <div>
          <h2 className="page-title">Médicos</h2>
          <p className="muted">Profissionais disponíveis para agendamento.</p>
        </div>
        <input
          className="input"
          style={{ maxWidth: 260 }}
          placeholder="🔍 Buscar por nome ou especialidade"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {loading ? (
        <Spinner />
      ) : filtered.length === 0 ? (
        <div className="card">
          <EmptyState icon="🩺" title="Nenhum médico encontrado" />
        </div>
      ) : (
        <div className="grid cols-3">
          {filtered.map((m) => (
            <div className="card card-pad" key={m.crm}>
              <div className="row mb-16">
                <div
                  className="avatar"
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    fontSize: 24,
                    background: 'var(--brand-100)',
                    color: 'var(--brand-700)',
                    display: 'grid',
                    placeItems: 'center',
                  }}
                >
                  {specialtyIcon(m.specialty)}
                </div>
                <div>
                  <div style={{ fontWeight: 700 }}>Dr(a). {m.name}</div>
                  <div className="muted" style={{ fontSize: 13 }}>
                    {m.specialty}
                  </div>
                </div>
              </div>
              <div className="row between">
                <span className="muted" style={{ fontSize: 13 }}>
                  CRM
                </span>
                <span style={{ fontWeight: 600, fontSize: 14 }}>{m.crm}</span>
              </div>
              <div className="row mt-8" style={{ gap: 6 }}>
                <span className="badge badge-role">{initials(m.name)}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
