import { useCallback, useEffect, useState, type FormEvent } from 'react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { appointmentApi, medicApi } from '../api/endpoints';
import { Spinner, EmptyState } from '../components/Spinner';
import { StatusBadge } from '../components/StatusBadge';
import { Modal } from '../components/Modal';
import { ApiError } from '../api/client';
import { defaultScheduleValue, formatSchedule } from '../lib/format';
import type { AppointmentStatus, AppointmentSummary, Medic } from '../types';

export function AppointmentsPage() {
  const { role } = useAuth();
  const toast = useToast();

  const [appointments, setAppointments] = useState<AppointmentSummary[]>([]);
  const [medics, setMedics] = useState<Medic[]>([]);
  const [loading, setLoading] = useState(true);
  const [showBooking, setShowBooking] = useState(false);
  const [busyId, setBusyId] = useState<number | 'new' | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const [appts, meds] = await Promise.all([
        appointmentApi.list(),
        medicApi.list().catch(() => []),
      ]);
      setAppointments(appts);
      setMedics(meds);
    } catch (err) {
      toast.error('Erro ao carregar consultas', err instanceof ApiError ? err.message : undefined);
    } finally {
      setLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    void load();
  }, [load]);

  async function changeStatus(id: number, status: AppointmentStatus, label: string) {
    setBusyId(id);
    try {
      await appointmentApi.updateStatus(id, status);
      toast.success(`Consulta ${label}.`);
      await load();
    } catch (err) {
      toast.error('Não foi possível atualizar', err instanceof ApiError ? err.message : undefined);
    } finally {
      setBusyId(null);
    }
  }

  async function cancel(id: number) {
    setBusyId(id);
    try {
      await appointmentApi.cancel(id);
      toast.success('Consulta cancelada.');
      await load();
    } catch (err) {
      toast.error('Não foi possível cancelar', err instanceof ApiError ? err.message : undefined);
    } finally {
      setBusyId(null);
    }
  }

  const isMedicOrAdmin = role === 'MEDIC' || role === 'ADMIN';
  const personColumn = role === 'MEDIC' ? 'Paciente' : 'Médico';

  function renderActions(a: AppointmentSummary) {
    if (a.id == null) return <span className="muted">—</span>;
    const id = a.id;
    const busy = busyId === id;
    const buttons: React.ReactNode[] = [];

    if (a.status === 'PENDING' && isMedicOrAdmin) {
      buttons.push(
        <button key="confirm" className="btn btn-success btn-sm" disabled={busy} onClick={() => changeStatus(id, 'CONFIRMED', 'confirmada')}>
          Confirmar
        </button>,
      );
    }
    if (a.status === 'CONFIRMED' && isMedicOrAdmin) {
      buttons.push(
        <button key="complete" className="btn btn-primary btn-sm" disabled={busy} onClick={() => changeStatus(id, 'COMPLETED', 'concluída')}>
          Concluir
        </button>,
      );
    }
    if (a.status === 'PENDING' || a.status === 'CONFIRMED') {
      buttons.push(
        <button key="cancel" className="btn btn-danger btn-sm" disabled={busy} onClick={() => cancel(id)}>
          Cancelar
        </button>,
      );
    }

    if (buttons.length === 0) return <span className="muted">—</span>;
    return <div className="row wrap">{buttons}</div>;
  }

  return (
    <div>
      <div className="row between mb-24">
        <div>
          <h2 className="page-title">Consultas</h2>
          <p className="muted">
            {role === 'PATIENT'
              ? 'Suas consultas agendadas.'
              : role === 'MEDIC'
                ? 'Consultas marcadas com você.'
                : 'Todas as consultas do sistema.'}
          </p>
        </div>
        {role === 'PATIENT' && (
          <button className="btn btn-primary" onClick={() => setShowBooking(true)}>
            ＋ Agendar consulta
          </button>
        )}
      </div>

      <div className="card">
        {loading ? (
          <Spinner />
        ) : appointments.length === 0 ? (
          <EmptyState
            icon="🗓️"
            title="Nenhuma consulta encontrada"
            message={role === 'PATIENT' ? 'Clique em “Agendar consulta” para começar.' : undefined}
          />
        ) : (
          <div className="table-wrap">
            <table className="tbl">
              <thead>
                <tr>
                  <th>Quando</th>
                  <th>{personColumn}</th>
                  {role !== 'MEDIC' && <th>Especialidade</th>}
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((a, i) => (
                  <tr key={a.id ?? i}>
                    <td>{formatSchedule(a.scheduledAt, a.scheduledDate, a.scheduledHour)}</td>
                    <td>
                      {role === 'MEDIC'
                        ? a.patientName ?? (a.userId ? `Paciente #${a.userId}` : '—')
                        : a.medicName ?? (a.medicId ? `Médico #${a.medicId}` : '—')}
                    </td>
                    {role !== 'MEDIC' && <td className="muted">{a.medicSpecialty ?? '—'}</td>}
                    <td>
                      <StatusBadge status={a.status} />
                    </td>
                    <td>{renderActions(a)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {showBooking && (
        <BookingModal
          medics={medics}
          submitting={busyId === 'new'}
          onClose={() => setShowBooking(false)}
          onSubmit={async (data) => {
            setBusyId('new');
            try {
              await appointmentApi.create(data);
              toast.success('Consulta agendada!');
              setShowBooking(false);
              await load();
            } catch (err) {
              toast.error('Não foi possível agendar', err instanceof ApiError ? err.message : undefined);
            } finally {
              setBusyId(null);
            }
          }}
        />
      )}
    </div>
  );
}

interface BookingModalProps {
  medics: Medic[];
  submitting: boolean;
  onClose: () => void;
  onSubmit: (data: { scheduledAt: string; notes: string; crm: string }) => void;
}

function BookingModal({ medics, submitting, onClose, onSubmit }: BookingModalProps) {
  const [crm, setCrm] = useState(medics[0]?.crm ?? '');
  const [when, setWhen] = useState(defaultScheduleValue());
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');
    if (!crm) return setError('Selecione um médico.');
    if (notes.trim().length < 5) return setError('A observação deve ter pelo menos 5 caracteres.');
    const date = new Date(when);
    if (Number.isNaN(date.getTime())) return setError('Data inválida.');
    if (date.getTime() < Date.now()) return setError('Selecione uma data futura.');
    onSubmit({ scheduledAt: date.toISOString(), notes: notes.trim(), crm });
  }

  return (
    <Modal
      title="Agendar consulta"
      onClose={onClose}
      footer={
        <>
          <button className="btn btn-ghost" onClick={onClose} disabled={submitting}>
            Cancelar
          </button>
          <button className="btn btn-primary" form="booking-form" disabled={submitting}>
            {submitting ? 'Agendando…' : 'Confirmar agendamento'}
          </button>
        </>
      }
    >
      {error && <div className="alert alert-error">{error}</div>}
      {medics.length === 0 ? (
        <p className="muted">Nenhum médico disponível para agendamento no momento.</p>
      ) : (
        <form id="booking-form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="medic">Médico</label>
            <select id="medic" className="select" value={crm} onChange={(e) => setCrm(e.target.value)}>
              {medics.map((m) => (
                <option key={m.crm} value={m.crm}>
                  {m.name} — {m.specialty}
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="when">Data e horário</label>
            <input
              id="when"
              type="datetime-local"
              className="input"
              value={when}
              onChange={(e) => setWhen(e.target.value)}
              required
            />
            <div className="hint">As consultas têm intervalo mínimo de 30 minutos entre si.</div>
          </div>
          <div className="field">
            <label htmlFor="notes">Observações</label>
            <textarea
              id="notes"
              className="textarea"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Descreva o motivo da consulta (mín. 5 caracteres)"
            />
          </div>
        </form>
      )}
    </Modal>
  );
}
