'use client'

import { useEffect } from 'react'
import { CALENDLY_BADGE, CALENDLY_URL } from '@/lib/calendly-config'
import { ensureCalendlyReady } from '@/lib/load-calendly-assets'

/** Floating Calendly badge — initialized after idle to avoid blocking LCP. */
export default function CalendlyBadgeWidget() {
  useEffect(() => {
    let cancelled = false

    const initBadge = async () => {
      await ensureCalendlyReady()
      if (cancelled) {
        return
      }

      window.Calendly?.initBadgeWidget({
        url: CALENDLY_URL,
        text: CALENDLY_BADGE.text,
        color: CALENDLY_BADGE.color,
        textColor: CALENDLY_BADGE.textColor,
        branding: CALENDLY_BADGE.branding,
      })
    }

    const scheduleInit = () => {
      if (typeof window.requestIdleCallback === 'function') {
        window.requestIdleCallback(
          () => {
            void initBadge()
          },
          { timeout: 6000 },
        )
        return
      }

      setTimeout(() => {
        void initBadge()
      }, 6000)
    }

    scheduleInit()

    return () => {
      cancelled = true
    }
  }, [])

  return null
}
