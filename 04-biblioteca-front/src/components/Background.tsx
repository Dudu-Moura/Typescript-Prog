export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900" />
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-amber-500/10 blur-3xl animate-float" />
      <div className="absolute top-1/3 -right-32 w-[480px] h-[480px] rounded-full bg-amber-600/5 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-0 left-1/4 w-[360px] h-[360px] rounded-full bg-indigo-500/5 blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80'><circle cx='1' cy='1' r='1' fill='white'/></svg>\")"
        }}
      />
    </div>
  )
}
