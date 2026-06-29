import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AGENT_ENCODED_ID } from '@/lib/site-config'

const REALSCOUT_SIMPLE_SEARCH_STYLES = {
  '--rs-ss-font-primary-color': '#6a6d72',
  '--rs-ss-searchbar-border-color': 'hsl(0, 0%, 80%)',
  '--rs-ss-box-shadow': '0 10px 15px -3px #0000001a',
  '--rs-ss-widget-width': '100%',
} as React.CSSProperties

const REALSCOUT_ADVANCED_SEARCH_STYLES = {
  '--rs-as-button-text-color': '#ffffff',
  '--rs-as-background-color': '#ffffff',
  '--rs-as-button-color': 'rgb(35, 93, 137)',
  '--rs-as-widget-width': '100%',
} as React.CSSProperties

const REALSCOUT_HOME_VALUE_STYLES = {
  '--rs-hvw-background-color': '#ffffff',
  '--rs-hvw-title-color': '#000000',
  '--rs-hvw-subtitle-color': 'rgba(28, 30, 38, 0.5)',
  '--rs-hvw-primary-button-text-color': '#ffffff',
  '--rs-hvw-primary-button-color': 'rgb(35, 93, 137)',
  '--rs-hvw-secondary-button-text-color': 'rgb(35, 93, 137)',
  '--rs-hvw-secondary-button-color': '#ffffff',
  '--rs-hvw-widget-width': '100%',
} as React.CSSProperties

type RealScoutOfficeListingsProps = {
  priceMin?: string
  priceMax?: string
  title?: string
  description?: string
}

export function RealScoutSimpleSearch() {
  return (
    <realscout-simple-search agent-encoded-id={AGENT_ENCODED_ID} style={REALSCOUT_SIMPLE_SEARCH_STYLES} />
  )
}

export function RealScoutAdvancedSearch() {
  return (
    <realscout-advanced-search agent-encoded-id={AGENT_ENCODED_ID} style={REALSCOUT_ADVANCED_SEARCH_STYLES} />
  )
}

export function RealScoutHomeValue() {
  return (
    <realscout-home-value agent-encoded-id={AGENT_ENCODED_ID} style={REALSCOUT_HOME_VALUE_STYLES} />
  )
}

export function RealScoutOfficeListings({
  priceMin = '400000',
  priceMax = '600000',
  title = 'Featured Southwest Las Vegas Homes',
  description = 'Current listings in Spring Valley & Southwest Las Vegas (89117, 89147, 89148)',
}: RealScoutOfficeListingsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">{title}</CardTitle>
        <CardDescription className="text-center">{description}</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <realscout-office-listings
          agent-encoded-id={AGENT_ENCODED_ID}
          sort-order="NEWEST"
          listing-status="For Sale,In Contract"
          property-types=",SFR"
          price-min={priceMin}
          price-max={priceMax}
          style={{
            '--rs-listing-divider-color': '#0e64c8',
            width: '100%',
          } as React.CSSProperties}
        />
      </CardContent>
    </Card>
  )
}

export function RealScoutSearchPair() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Quick Property Search</CardTitle>
          <CardDescription className="text-center">Find properties with a simple search</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex justify-center">
            <RealScoutSimpleSearch />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Advanced Search</CardTitle>
          <CardDescription className="text-center">Detailed search with filters and criteria</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex justify-center">
            <RealScoutAdvancedSearch />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export function RealScoutHomeValueCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">Instant Home Valuation</CardTitle>
        <CardDescription className="text-center">
          Get your property&apos;s estimated value in seconds
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <RealScoutHomeValue />
      </CardContent>
    </Card>
  )
}
