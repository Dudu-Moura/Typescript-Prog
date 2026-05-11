import axios from 'axios'

export function extractErrorMessage(err: unknown, fallback = 'Algo deu errado'): string {
  if (axios.isAxiosError(err)) {
    const data = err.response?.data as { message?: string; errors?: { message: string }[] } | undefined
    if (data?.errors?.length) {
      return data.errors.map((e) => e.message).join(', ')
    }
    if (data?.message) return data.message
    if (err.code === 'ERR_NETWORK') return 'Sem conexão com o servidor'
  }
  if (err instanceof Error) return err.message
  return fallback
}

export function extractStatus(err: unknown): number | null {
  if (axios.isAxiosError(err)) return err.response?.status ?? null
  return null
}
