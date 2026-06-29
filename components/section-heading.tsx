import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  title: string
  description?: string
  eyebrow?: string
  align?: 'left' | 'center'
  className?: string
  children?: ReactNode
}

export default function SectionHeading({
  title,
  description,
  eyebrow,
  align = 'center',
  className,
  children,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-10 md:mb-12',
        align === 'center' ? 'text-center mx-auto max-w-3xl' : 'text-left',
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-2">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">{title}</h2>
      {description ? (
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed">{description}</p>
      ) : null}
      {children}
    </div>
  )
}
