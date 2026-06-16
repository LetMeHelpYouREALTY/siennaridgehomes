'use client'

import { useEffect, useState } from 'react'

/** Resolves true once Calendly's widget.js has loaded. */
export function useCalendlyReady() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (window.Calendly) {
      setReady(true)
      return
    }

    const interval = window.setInterval(() => {
      if (window.Calendly) {
        setReady(true)
        window.clearInterval(interval)
      }
    }, 100)

    return () => window.clearInterval(interval)
  }, [])

  return ready
}
