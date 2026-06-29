import Image from 'next/image'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type PageHeroProps = {
  title: string
  subtitle?: string
  description?: string
  kicker?: string
  imageSrc?: string
  imageAlt: string
  badges?: ReactNode
  children?: ReactNode
  className?: string
  size?: 'default' | 'compact'
}

export default function PageHero({
  title,
  subtitle,
  description,
  kicker,
  imageSrc = '/images/hero-homepage.jpg',
  imageAlt,
  badges,
  children,
  className,
  size = 'default',
}: PageHeroProps) {
  return (
    <section className={cn('relative overflow-hidden', className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-blue-950/85 to-blue-800/80" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,white,transparent_40%)]" />
      <div className="absolute inset-0">
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover" priority />
      </div>
      <div
        className={cn(
          'container mx-auto px-4 relative z-10',
          size === 'compact' ? 'py-16 md:py-20' : 'py-20 md:py-28',
        )}
      >
        <div className="max-w-4xl mx-auto text-center text-white">
          {kicker ? (
            <p className="font-display text-5xl md:text-7xl font-bold text-white/90 mb-2">{kicker}</p>
          ) : null}
          {badges ? <div className="flex flex-wrap justify-center gap-2 mb-6">{badges}</div> : null}
          <h1
            className={cn(
              'font-display font-bold mb-6 tracking-tight text-balance',
              size === 'compact' ? 'text-3xl md:text-4xl' : 'text-4xl md:text-5xl lg:text-6xl',
            )}
          >
            {title}
          </h1>
          {subtitle ? <p className="text-xl text-blue-100 mb-4">{subtitle}</p> : null}
          {description ? (
            <p className="lead-answer aeo-answer text-lg md:text-xl text-blue-50/95 leading-relaxed max-w-3xl mx-auto mb-8">
              {description}
            </p>
          ) : null}
          {children}
        </div>
      </div>
    </section>
  )
}
