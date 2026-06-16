import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Home, MapPin, User, FileText, Search, Phone, Mail } from 'lucide-react'
import { NAP, formatFullAddress } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Sitemap | Southwest Las Vegas Real Estate | Dr. Jan Duffy',
  description: 'Complete sitemap for Dr. Jan Duffy\'s Southwest Las Vegas real estate website. Find all pages, neighborhoods, and resources easily.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function SitemapPage() {
  const mainPages = [
    {
      title: 'Home',
      description: 'Main homepage with RealScout search widgets and market overview',
      url: '/',
      icon: Home,
    },
    {
      title: 'About Dr. Jan Duffy',
      description: 'Learn about your premier Southwest Las Vegas real estate agent',
      url: '/about',
      icon: User,
    },
    {
      title: 'Available Listings',
      description: 'Browse current homes for sale in Spring Valley and Southwest Las Vegas',
      url: '/listings',
      icon: Search,
    },
  ]

  const neighborhoodPages = [
    {
      title: 'Spring Valley Real Estate (89117)',
      description: 'Comprehensive guide to Spring Valley homes and neighborhoods',
      url: '/neighborhoods/89117',
      icon: MapPin,
    },
  ]

  const legalPages = [
    {
      title: 'Privacy Policy',
      description: 'How we protect your personal information',
      url: '/privacy',
      icon: FileText,
    },
    {
      title: 'Terms of Service',
      description: 'Terms and conditions for using our services',
      url: '/terms',
      icon: FileText,
    },
  ]

  const externalLinks = [
    {
      title: 'Search Properties (RealScout)',
      description: 'Advanced property search with live MLS data',
      url: 'http://drjanduffy.realscout.com/',
      external: true,
    },
  ]

  const contactInfo = {
    phone: NAP.phone,
    email: NAP.email,
    address: formatFullAddress(),
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Website Sitemap</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find all pages, resources, and information about Dr. Jan Duffy's Southwest Las Vegas real estate services
            </p>
          </div>

          {/* Main Pages */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Home className="h-6 w-6 text-blue-600" />
              Main Pages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainPages.map((page) => (
                <Card key={page.url} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <page.icon className="h-5 w-5 text-blue-600" />
                      {page.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{page.description}</p>
                    <Link href={page.url}>
                      <Button variant="outline" className="w-full">
                        Visit Page
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Neighborhood Pages */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <MapPin className="h-6 w-6 text-blue-600" />
              Neighborhood Guides
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {neighborhoodPages.map((page) => (
                <Card key={page.url} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <page.icon className="h-5 w-5 text-blue-600" />
                      {page.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{page.description}</p>
                    <Link href={page.url}>
                      <Button variant="outline" className="w-full">
                        Explore Neighborhood
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Legal Pages */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <FileText className="h-6 w-6 text-blue-600" />
              Legal & Policies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {legalPages.map((page) => (
                <Card key={page.url} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <page.icon className="h-5 w-5 text-blue-600" />
                      {page.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{page.description}</p>
                    <Link href={page.url}>
                      <Button variant="outline" className="w-full">
                        Read Policy
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* External Resources */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Search className="h-6 w-6 text-blue-600" />
              Property Search Tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {externalLinks.map((link) => (
                <Card key={link.url} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Search className="h-5 w-5 text-blue-600" />
                      {link.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{link.description}</p>
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button variant="outline" className="w-full">
                        Open Tool
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Phone className="h-6 w-6 text-blue-600" />
              Contact Information
            </h2>
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Phone className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600">{contactInfo.phone}</p>
                  </div>
                  <div className="text-center">
                    <Mail className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">{contactInfo.email}</p>
                  </div>
                  <div className="text-center">
                    <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <h3 className="font-semibold mb-1">Office Address</h3>
                    <p className="text-gray-600 text-sm">{contactInfo.address}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Service Areas */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <MapPin className="h-6 w-6 text-blue-600" />
              Service Areas
            </h2>
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-blue-600">89117</span>
                    </div>
                    <h3 className="font-semibold mb-1">Spring Valley</h3>
                    <p className="text-gray-600 text-sm">Established neighborhoods</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-green-600">89147</span>
                    </div>
                    <h3 className="font-semibold mb-1">Southwest Las Vegas</h3>
                    <p className="text-gray-600 text-sm">Mixed development</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-purple-600">89148</span>
                    </div>
                    <h3 className="font-semibold mb-1">Southwest Las Vegas</h3>
                    <p className="text-gray-600 text-sm">Newer developments</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Back to Home */}
          <div className="text-center">
            <Link href="/">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Home className="h-5 w-5 mr-2" />
                Return to Homepage
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
