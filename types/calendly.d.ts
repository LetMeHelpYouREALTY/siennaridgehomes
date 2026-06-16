interface CalendlyBadgeOptions {
  url: string
  text?: string
  color?: string
  textColor?: string
  branding?: boolean
}

interface CalendlyPopupOptions {
  url: string
  prefill?: Record<string, string>
  utm?: Record<string, string>
}

interface CalendlyInlineOptions {
  url: string
  parentElement: HTMLElement
  prefill?: Record<string, string>
  utm?: Record<string, string>
}

interface CalendlyNamespace {
  initBadgeWidget: (options: CalendlyBadgeOptions) => void
  initPopupWidget: (options: CalendlyPopupOptions) => void
  initInlineWidget: (options: CalendlyInlineOptions) => void
}

declare global {
  interface Window {
    Calendly?: CalendlyNamespace
  }
}

export {}
