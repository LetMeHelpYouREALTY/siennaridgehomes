const CALENDLY_WIDGET_JS = 'https://assets.calendly.com/assets/external/widget.js'
const CALENDLY_WIDGET_CSS = 'https://assets.calendly.com/assets/external/widget.css'

let cssLoaded = false
let jsLoaded = false
let jsPromise: Promise<void> | null = null
let idlePrefetchScheduled = false

export function loadCalendlyCss(): void {
  if (cssLoaded || typeof document === 'undefined') {
    return
  }

  cssLoaded = true

  const link = document.createElement('link')
  link.id = 'calendly-widget-css'
  link.rel = 'stylesheet'
  link.href = CALENDLY_WIDGET_CSS
  link.media = 'print'
  link.onload = () => {
    link.media = 'all'
  }
  document.head.appendChild(link)
}

export function loadCalendlyJs(): Promise<void> {
  if (typeof window === 'undefined') {
    return Promise.resolve()
  }

  if (window.Calendly) {
    jsLoaded = true
    return Promise.resolve()
  }

  if (jsPromise) {
    return jsPromise
  }

  jsPromise = new Promise<void>((resolve, reject) => {
    const existing = document.getElementById('calendly-widget-js') as HTMLScriptElement | null
    if (existing) {
      existing.addEventListener('load', () => {
        jsLoaded = true
        resolve()
      })
      existing.addEventListener('error', () => reject(new Error('Calendly script failed to load')))
      return
    }

    const script = document.createElement('script')
    script.id = 'calendly-widget-js'
    script.src = CALENDLY_WIDGET_JS
    script.async = true
    script.onload = () => {
      jsLoaded = true
      resolve()
    }
    script.onerror = () => reject(new Error('Calendly script failed to load'))
    document.body.appendChild(script)
  })

  return jsPromise
}

export async function ensureCalendlyReady(): Promise<void> {
  loadCalendlyCss()
  await loadCalendlyJs()
}

/** Warm Calendly assets after the browser is idle — avoids blocking LCP. */
export function prefetchCalendlyOnIdle(delayMs = 5000): void {
  if (idlePrefetchScheduled || typeof window === 'undefined') {
    return
  }

  idlePrefetchScheduled = true

  const prefetch = () => {
    void ensureCalendlyReady()
  }

  if (typeof window.requestIdleCallback === 'function') {
    window.requestIdleCallback(prefetch, { timeout: delayMs })
    return
  }

  setTimeout(prefetch, delayMs)
}
