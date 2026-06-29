import type { Metadata } from 'next'
import JsonLd from '@/components/json-ld'
import ThirdPartyScripts from '@/components/third-party-scripts'
import CalendlyScripts from '@/components/calendly-scripts'
import CalendlyBadgeWidget from '@/components/calendly-badge-widget'
import RealScoutScript from '@/components/realscout-script'
import Header from '../components/header'
import Footer from '../components/footer'
import { buildGlobalStructuredDataGraph } from '@/lib/structured-data'
import { GOOGLE_SITE_VERIFICATION } from '@/lib/site-config'
import { inter, playfairDisplay } from '@/lib/fonts'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.siennaridgehomes.com'),
  title: 'Spring Valley Real Estate Agent | Dr. Jan Duffy | Southwest Las Vegas Homes',
  description: 'Top Spring Valley real estate agent Dr. Jan Duffy specializes in Southwest Las Vegas homes (89117, 89147, 89148). Expert buyer agent for families, investors & first-time buyers. Free home valuation & market insights.',
  keywords: [
    'Spring Valley real estate agent',
    'Southwest Las Vegas homes for sale',
    '89117 homes',
    '89147 homes', 
    '89148 homes',
    'Las Vegas real estate',
    'Dr. Jan Duffy realtor',
    'Spring Valley homes',
    'Southwest Las Vegas real estate',
    'Las Vegas buyer agent',
    'Nevada real estate agent',
    'Las Vegas investment properties',
    'Spring Valley new homes',
    'Las Vegas home valuation',
    'best real estate agent Las Vegas',
    'Spring Valley luxury homes',
    'Southwest Las Vegas condos',
    'Las Vegas first time home buyer',
    'Spring Valley real estate market',
    'Las Vegas property search'
  ],
  authors: [{ name: 'Dr. Jan Duffy', url: 'https://www.siennaridgehomes.com' }],
  creator: 'Dr. Jan Duffy',
  publisher: 'Southwest Las Vegas Homes',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: GOOGLE_SITE_VERIFICATION
    ? { google: GOOGLE_SITE_VERIFICATION }
    : undefined,
  openGraph: {
    title: 'Spring Valley Real Estate Agent | Dr. Jan Duffy | Southwest Las Vegas Homes',
    description: 'Top Spring Valley real estate agent Dr. Jan Duffy specializes in Southwest Las Vegas homes (89117, 89147, 89148). Expert buyer agent for families, investors & first-time buyers.',
    url: 'https://www.siennaridgehomes.com',
    siteName: 'Southwest Las Vegas Homes',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dr. Jan Duffy - Spring Valley Real Estate Agent',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spring Valley Real Estate Agent | Dr. Jan Duffy',
    description: 'Top Spring Valley real estate agent specializing in Southwest Las Vegas homes (89117, 89147, 89148). Expert guidance for buyers.',
    images: ['/og-image.png'],
    creator: '@DrJanDuffy',
    site: '@SiennaRidgeHomes',
  },
  alternates: {
    canonical: 'https://www.siennaridgehomes.com',
  },
  icons: {
    icon: [{ url: '/favicon.ico', sizes: 'any' }],
    shortcut: ['/favicon.ico'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd id="global-structured-data" data={buildGlobalStructuredDataGraph()} />
      </head>
      <body className={`${inter.variable} ${playfairDisplay.variable} font-sans antialiased`}>
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <ThirdPartyScripts />
        <CalendlyScripts />
        <CalendlyBadgeWidget />
        <RealScoutScript />
      </body>
    </html>
  )
}
