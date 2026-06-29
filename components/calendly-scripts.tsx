'use client'

import { useEffect } from 'react'
import { prefetchCalendlyOnIdle } from '@/lib/load-calendly-assets'

/** Prefetch Calendly assets after idle — no render-blocking CSS in document head. */
export default function CalendlyScripts() {
  useEffect(() => {
    prefetchCalendlyOnIdle()
  }, [])

  return null
}
