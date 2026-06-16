'use client'

import { useEffect, useRef } from 'react'
import { CALENDLY_INLINE_DEFAULTS, CALENDLY_URL } from '@/lib/calendly-config'
import { useCalendlyReady } from '@/hooks/use-calendly-ready'

type CalendlyInlineWidgetProps = {
  height?: number
  minWidth?: number
  className?: string
}

export default function CalendlyInlineWidget({
  height = CALENDLY_INLINE_DEFAULTS.height,
  minWidth = CALENDLY_INLINE_DEFAULTS.minWidth,
  className,
}: CalendlyInlineWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const ready = useCalendlyReady()

  useEffect(() => {
    if (!ready || !containerRef.current || containerRef.current.childElementCount > 0) {
      return
    }

    window.Calendly?.initInlineWidget({
      url: CALENDLY_URL,
      parentElement: containerRef.current,
    })
  }, [ready])

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ minWidth: `${minWidth}px`, height: `${height}px` }}
    />
  )
}
