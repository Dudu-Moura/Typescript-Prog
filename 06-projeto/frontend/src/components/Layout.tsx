import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { initials, ROLE_LABEL } from '../lib/format';
import type { Role } from '../types';

interface NavItem {
  to: string;
  label: string;
  icon: string;
  roles?: Role[];
}

const NAV: NavItem[] = [
  { to: '/', label: 'Painel', icon: '🏠' },
  { to: '/appointments', label: 'Consultas', icon: '📅' },
  { to: '/medics', label: 'Médicos', icon: '🩺' },
  { to: '/users', label: 'Usuários', icon: '👥', roles: ['ADMIN'] },
  { to: '/profile', label: 'Meu perfil', icon: '⚙️' },
];

const PAGE_TITLES: Record<string, string> = {
  '/': 'Painel',
  '/appointments': 'Consultas',
  '/medics': 'Médicos',
  '/users': 'Usuários',
  '/profile': 'Meu perfil',
};

export function Layout() {
  const { user, role, logout } = useAuth();
  const location = useLocation();

  const items = NAV.filter((item) => !item.roles || (role && item.roles.includes(role)));
  const title = PAGE_TITLES[location.pathname] ?? 'MedAgenda';
  const name = user?.email.split('@')[0] ?? 'Usuário';

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <span className="logo">✚</span>
          MedAgenda
        </div>

        <nav className="nav-section">
          {items.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              <span className="icon">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-foot">
          <div className="user-chip">
            <div className="avatar">{initials(name)}</div>
            <div className="meta">
              <div className="name">{name}</div>
              <div className="role">{role ? ROLE_LABEL[role] : ''}</div>
            </div>
          </div>
          <button className="btn btn-ghost btn-block btn-sm" onClick={logout}>
            Sair
          </button>
        </div>
      </aside>

      <div className="main">
        <header className="topbar">
          <h1>{title}</h1>
          {role && <span className="badge badge-role">{ROLE_LABEL[role]}</span>}
        </header>
        <div className="page">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
