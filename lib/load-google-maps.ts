declare global {
  interface Window {
    __googleMapsLoadPromise?: Promise<void>
  }
}

/** Loads the Maps JavaScript API once (`v=weekly`, async). Use `importLibrary` for maps/places. */
export function loadGoogleMapsScript(apiKey: string): Promise<void> {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('Google Maps can only load in the browser'))
  }

  if (typeof window.google?.maps?.importLibrary === 'function' && window.google.maps.Map) {
    return Promise.resolve()
  }

  if (window.__googleMapsLoadPromise) {
    return window.__googleMapsLoadPromise
  }

  window.__googleMapsLoadPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>('script[data-sienna-google-maps]')
    if (existing) {
      existing.addEventListener('load', () => resolve(), { once: true })
      existing.addEventListener('error', () => reject(new Error('Google Maps failed to load')), { once: true })
      return
    }

    const script = document.createElement('script')
    script.dataset.siennaGoogleMaps = 'true'
    script.async = true
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&v=weekly&loading=async`
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Google Maps JavaScript API could not load'))
    document.head.append(script)
  })

  return window.__googleMapsLoadPromise
}

export function getGoogleMapsApiKey() {
  return process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim() ?? ''
}

export function getGoogleMapsMapId() {
  return process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID?.trim() ?? ''
}
