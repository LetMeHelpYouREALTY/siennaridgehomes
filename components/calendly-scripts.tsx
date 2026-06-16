import Script from 'next/script'

const CALENDLY_WIDGET_JS = 'https://assets.calendly.com/assets/external/widget.js'
const CALENDLY_WIDGET_CSS = 'https://assets.calendly.com/assets/external/widget.css'

/** Load Calendly assets once site-wide — shared by inline, badge, and popup widgets. */
export default function CalendlyScripts() {
  return (
    <>
      <link href={CALENDLY_WIDGET_CSS} rel="stylesheet" />
      <Script id="calendly-widget" src={CALENDLY_WIDGET_JS} strategy="lazyOnload" />
    </>
  )
}
