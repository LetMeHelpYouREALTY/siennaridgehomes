'use client'

import { useEffect, useRef } from 'react'
import { CALENDLY_INLINE_DEFAULTS, CALENDLY_URL } from '@/lib/calendly-config'
import { ensureCalendlyReady } from '@/lib/load-calendly-assets'

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

  useEffect(() => {
    const container = containerRef.current
    if (!container || container.childElementCount > 0) {
      return
    }

    let cancelled = false

    void ensureCalendlyReady().then(() => {
      if (cancelled || !containerRef.current || containerRef.current.childElementCount > 0) {
        return
      }

      window.Calendly?.initInlineWidget({
        url: CALENDLY_URL,
        parentElement: containerRef.current,
      })
    })

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ minWidth: `${minWidth}px`, height: `${height}px` }}
    />
  )
}
