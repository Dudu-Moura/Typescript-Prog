import { request } from './client';
import type {
  AppointmentStatus,
  AppointmentSummary,
  CreateAppointmentInput,
  Medic,
  RegisterInput,
  UserSummary,
} from '../types';

export const authApi = {
  login: (email: string, password: string) =>
    request<{ token: string }>('/auth/login', { method: 'POST', body: { email, password }, auth: false }),

  register: (data: RegisterInput) =>
    request<unknown>('/auth/register', { method: 'POST', body: data, auth: false }),
};

export const medicApi = {
  list: () => request<Medic[]>('/medic'),
  get: (id: number) => request<Medic>(`/medic/${id}`),
};

export const appointmentApi = {
  list: () => request<AppointmentSummary[]>('/appointment'),
  create: (data: CreateAppointmentInput) =>
    request<unknown>('/appointment', { method: 'POST', body: data }),
  updateStatus: (id: number, status: AppointmentStatus) =>
    request<unknown>(`/appointment/${id}`, { method: 'PATCH', body: { status } }),
  cancel: (id: number) => request<unknown>(`/appointment/${id}/cancel`, { method: 'PATCH' }),
};

export const userApi = {
  list: () => request<UserSummary[]>('/user'),
  get: (id: number) => request<UserSummary>(`/user/${id}`),
  update: (data: Partial<{ name: string; cpf: string; email: string; password: string }>) =>
    request<UserSummary>('/user', { method: 'PATCH', body: data }),
};
