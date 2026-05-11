import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  icon?: ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, error, icon, className = '', ...rest },
  ref
) {
  return (
    <label className="block">
      {label && (
        <span className="block text-sm font-medium text-slate-300 mb-1.5">{label}</span>
      )}
      <div className="relative">
        {icon && (
          <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
            {icon}
          </span>
        )}
        <input
          ref={ref}
          className={`w-full rounded-xl bg-ink-700/70 border border-white/10 text-slate-100 placeholder-slate-500 outline-none focus:ring-2 focus:ring-amber-500/60 focus:border-amber-500/40 transition px-4 py-2.5 ${icon ? 'pl-10' : ''} ${error ? 'border-red-500/60 focus:ring-red-500/40' : ''} ${className}`}
          {...rest}
        />
      </div>
      {error && (
        <span className="block mt-1.5 text-xs text-red-400">{error}</span>
      )}
    </label>
  )
})
