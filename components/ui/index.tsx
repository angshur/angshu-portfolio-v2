import Link from 'next/link'
import React from 'react'

export function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-5xl px-6">{children}</div>
}

export function Section({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return <section className={`py-16 md:py-20 ${className}`}>{children}</section>
}

export function H1({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <h1 className={`text-4xl font-semibold tracking-tight md:text-5xl ${className}`}>
      {children}
    </h1>
  )
}

export function Lead({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-lg leading-relaxed text-slate-600 dark:text-slate-300 ${className}`}>{children}</p>
}

export function Card({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-slate-800/60 dark:bg-slate-950/30 ${className}`}>
      {children}
    </div>
  )
}

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200">
      {children}
    </span>
  )
}

export function Button({
  href,
  children,
  variant = 'primary',
}: {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
}) {
  const base =
    'inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition'
  const primary =
    'bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100'
  const secondary =
    'border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-900'

  const cls = `${base} ${variant === 'primary' ? primary : secondary}`

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  )
}

