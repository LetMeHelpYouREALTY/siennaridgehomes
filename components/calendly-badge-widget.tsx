'use client'

import { useEffect } from 'react'
import { CALENDLY_BADGE, CALENDLY_URL } from '@/lib/calendly-config'
import { useCalendlyReady } from '@/hooks/use-calendly-ready'

/** Floating Calendly badge — visible on every page. */
export default function CalendlyBadgeWidget() {
  const ready = useCalendlyReady()

  useEffect(() => {
    if (!ready) {
      return
    }

    window.Calendly?.initBadgeWidget({
      url: CALENDLY_URL,
      text: CALENDLY_BADGE.text,
      color: CALENDLY_BADGE.color,
      textColor: CALENDLY_BADGE.textColor,
      branding: CALENDLY_BADGE.branding,
    })
  }, [ready])

  return null
}
