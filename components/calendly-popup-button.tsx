'use client'

import type { ComponentProps } from 'react'
import { Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CALENDLY_URL } from '@/lib/calendly-config'

type CalendlyPopupButtonProps = Omit<ComponentProps<typeof Button>, 'onClick'> & {
  label?: string
  showIcon?: boolean
}

export default function CalendlyPopupButton({
  label = 'Schedule time with me',
  showIcon = true,
  children,
  ...buttonProps
}: CalendlyPopupButtonProps) {
  const openCalendly = () => {
    window.Calendly?.initPopupWidget({ url: CALENDLY_URL })
  }

  return (
    <Button type="button" onClick={openCalendly} {...buttonProps}>
      {showIcon ? <Calendar className="h-4 w-4 mr-2" /> : null}
      {children ?? label}
    </Button>
  )
}
