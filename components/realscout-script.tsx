import Script from 'next/script'

const REALSCOUT_SRC = 'https://em.realscout.com/widgets/realscout-web-components.umd.js'

/** Load RealScout MLS widgets after page is interactive — deduped by id across pages. */
export default function RealScoutScript() {
  return (
    <Script
      id="realscout-web-components"
      src={REALSCOUT_SRC}
      type="module"
      strategy="lazyOnload"
    />
  )
}
