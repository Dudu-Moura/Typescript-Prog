export function Spinner() {
  return <div className="spinner" aria-label="Carregando" />;
}

export function EmptyState({ icon, title, message }: { icon: string; title: string; message?: string }) {
  return (
    <div className="empty">
      <div className="big">{icon}</div>
      <div style={{ fontWeight: 600, color: 'var(--text)' }}>{title}</div>
      {message && <div className="mt-4">{message}</div>}
    </div>
  );
}
