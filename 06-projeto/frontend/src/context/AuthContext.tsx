import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { clearToken, getToken, setToken, setUnauthorizedHandler } from '../api/client';
import { authApi } from '../api/endpoints';
import { decodeJwt, isExpired } from '../lib/jwt';
import type { JwtPayload, RegisterInput, Role } from '../types';

interface AuthContextValue {
  user: JwtPayload | null;
  role: Role | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (data: RegisterInput) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

function loadUser(): JwtPayload | null {
  const token = getToken();
  if (!token) return null;
  const payload = decodeJwt(token);
  if (!payload || isExpired(payload)) {
    clearToken();
    return null;
  }
  return payload;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<JwtPayload | null>(() => loadUser());
  const [loading] = useState(false);

  useEffect(() => {
    setUnauthorizedHandler(() => {
      clearToken();
      setUser(null);
    });
  }, []);

  async function login(email: string, password: string) {
    const { token } = await authApi.login(email, password);
    setToken(token);
    setUser(decodeJwt(token));
  }

  async function register(data: RegisterInput) {
    const result = await authApi.register(data);
    // Patients get a token straight back; medics get a Medic record, so log in after.
    if (result && typeof result === 'object' && 'token' in result) {
      const token = (result as { token: string }).token;
      setToken(token);
      setUser(decodeJwt(token));
      return;
    }
    await login(data.user.email, data.user.password);
  }

  function logout() {
    clearToken();
    setUser(null);
  }

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      role: user?.role ?? null,
      isAuthenticated: !!user,
      loading,
      login,
      register,
      logout,
    }),
    [user, loading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
