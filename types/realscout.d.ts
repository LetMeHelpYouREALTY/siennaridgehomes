import type { CSSProperties } from 'react'

type RealScoutBaseProps = {
  'agent-encoded-id': string
  style?: CSSProperties
  className?: string
}

type RealScoutListingsProps = RealScoutBaseProps & {
  'sort-order'?: string
  'listing-status'?: string
  'property-types'?: string
  'price-min'?: string
  'price-max'?: string
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'realscout-simple-search': RealScoutBaseProps
      'realscout-advanced-search': RealScoutBaseProps
      'realscout-office-listings': RealScoutListingsProps
      'realscout-home-value': RealScoutBaseProps
    }
  }
}

export {}
