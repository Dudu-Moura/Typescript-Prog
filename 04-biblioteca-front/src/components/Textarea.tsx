import { forwardRef, type TextareaHTMLAttributes } from 'react'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { label, error, className = '', ...rest },
  ref
) {
  return (
    <label className="block">
      {label && (
        <span className="block text-sm font-medium text-slate-300 mb-1.5">{label}</span>
      )}
      <textarea
        ref={ref}
        className={`w-full rounded-xl bg-ink-700/70 border border-white/10 text-slate-100 placeholder-slate-500 outline-none focus:ring-2 focus:ring-amber-500/60 focus:border-amber-500/40 transition px-4 py-2.5 resize-y min-h-[100px] ${error ? 'border-red-500/60 focus:ring-red-500/40' : ''} ${className}`}
        {...rest}
      />
      {error && (
        <span className="block mt-1.5 text-xs text-red-400">{error}</span>
      )}
    </label>
  )
})
