import type { Role } from '../types';

const WEEKDAYS = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

/** Backend stores scheduledDate as a weekday index (Date.getDay). */
export function weekday(index: number): string {
  return WEEKDAYS[index] ?? '—';
}

export function formatHour(hour: number): string {
  return `${String(hour).padStart(2, '0')}:00`;
}

const DATE_FMT = new Intl.DateTimeFormat('pt-BR', {
  weekday: 'short',
  day: '2-digit',
  month: 'short',
  hour: '2-digit',
  minute: '2-digit',
});

/** Formats an ISO date string from the API; falls back to weekday/hour parts. */
export function formatSchedule(iso?: string, weekdayIndex?: number, hour?: number): string {
  if (iso) {
    const d = new Date(iso);
    if (!Number.isNaN(d.getTime())) return DATE_FMT.format(d);
  }
  if (weekdayIndex != null && hour != null) {
    return `${weekday(weekdayIndex)}, ${formatHour(hour)}`;
  }
  return '—';
}

export const ROLE_LABEL: Record<Role, string> = {
  ADMIN: 'Administrador',
  PATIENT: 'Paciente',
  MEDIC: 'Médico',
};

export const STATUS_LABEL: Record<string, string> = {
  PENDING: 'Pendente',
  CONFIRMED: 'Confirmada',
  COMPLETED: 'Concluída',
  CANCELLED: 'Cancelada',
};

export function initials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/** Builds a value for <input type="datetime-local"> at the next round hour. */
export function defaultScheduleValue(): string {
  const d = new Date();
  d.setHours(d.getHours() + 1, 0, 0, 0);
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}
