'use client'

import { useEffect, useState } from 'react'
import { ensureCalendlyReady } from '@/lib/load-calendly-assets'

/** Resolves true once Calendly assets have loaded. */
export function useCalendlyReady() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let cancelled = false

    void ensureCalendlyReady().then(() => {
      if (!cancelled) {
        setReady(true)
      }
    })

    return () => {
      cancelled = true
    }
  }, [])

  return ready
}
