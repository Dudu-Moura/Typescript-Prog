import type { AppointmentStatus } from '../types';
import { STATUS_LABEL } from '../lib/format';

const CLASS: Record<AppointmentStatus, string> = {
  PENDING: 'badge-pending',
  CONFIRMED: 'badge-confirmed',
  COMPLETED: 'badge-completed',
  CANCELLED: 'badge-cancelled',
};

export function StatusBadge({ status }: { status: AppointmentStatus }) {
  return <span className={`badge ${CLASS[status]}`}>{STATUS_LABEL[status] ?? status}</span>;
}
