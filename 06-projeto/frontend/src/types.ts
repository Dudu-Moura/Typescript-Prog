export type Role = 'ADMIN' | 'PATIENT' | 'MEDIC';

export type AppointmentStatus = 'PENDING' | 'CONFIRMED' | 'CANCELLED' | 'COMPLETED';

export interface JwtPayload {
  id: number;
  role: Role;
  email: string;
  exp?: number;
  iat?: number;
}

export interface Medic {
  name: string;
  crm: string;
  specialty: string;
}

export interface UserSummary {
  name: string;
  cpf: string;
  email: string;
}

/**
 * The backend returns a compact shape for appointments where `scheduledDate`
 * is the weekday index (Date.getDay, 0-6) and `scheduledHour` is the hour.
 * For the admin "all appointments" view it returns the full Prisma records.
 */
export interface AppointmentSummary {
  id?: number;
  scheduledAt?: string;
  scheduledDate?: number;
  scheduledHour?: number;
  status: AppointmentStatus;
  notes?: string | null;
  medicName?: string;
  medicSpecialty?: string;
  patientName?: string;
  // present only in the ADMIN "all appointments" view
  userId?: number;
  medicId?: number;
}

export interface AppointmentFull {
  id: number;
  scheduledAt: string;
  status: AppointmentStatus;
  notes: string | null;
  createdAt: string;
  userId: number;
  medicId: number;
}

export interface CreateAppointmentInput {
  scheduledAt: string;
  notes: string;
  crm: string;
}

export interface RegisterInput {
  user: {
    name: string;
    cpf: string;
    email: string;
    password: string;
  };
  medic?: {
    crm: string;
    specialty: string;
  };
}
