import Link from 'next/link'
import { Phone, Mail, MapPin, Home, User, Search } from 'lucide-react'
import CalendlyPopupButton from '@/components/calendly-popup-button'
import { NAP, OFFICE_MAPS_URL, REALSCOUT_SEARCH_URL, formatCityStateZip } from '@/lib/site-config'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Home className="h-6 w-6 text-blue-400" />
              <h3 className="text-lg font-semibold">Sienna Ridge Homes</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Your premier Southwest Las Vegas real estate specialist. Expert guidance for families, investors, and first-time buyers.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">Spring Valley & Southwest Las Vegas</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/listings" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Available Listings
                </Link>
              </li>
              <li>
                <Link href="/neighborhoods/89117" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Spring Valley (89117)
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">
                  About Dr. Duffy
                </Link>
              </li>
              <li>
                <a 
                  href={REALSCOUT_SEARCH_URL}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors flex items-center"
                >
                  <Search className="h-4 w-4 mr-1" />
                  Search Properties
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <a href={`tel:${NAP.phoneTel}`} className="text-gray-300 hover:text-blue-400 transition-colors">
                  {NAP.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <a href={`mailto:${NAP.email}`} className="text-gray-300 hover:text-blue-400 transition-colors">
                  {NAP.email}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-blue-400 mt-1" />
                <address className="text-gray-300 not-italic">
                  <a
                    href={OFFICE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    <p className="text-sm">{NAP.streetAddress}</p>
                    <p className="text-sm">{formatCityStateZip()}</p>
                  </a>
                </address>
              </div>
              <CalendlyPopupButton
                size="sm"
                variant="outline"
                className="w-full border-blue-400 text-blue-300 hover:bg-blue-600 hover:text-white"
              />
            </div>
          </div>

          {/* Guides */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Guides & FAQ</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sienna-ridge-lennar-las-vegas" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Sienna Ridge by Lennar
                </Link>
              </li>
              <li>
                <Link href="/neighborhoods" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Neighborhood Guides
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Real Estate FAQ
                </Link>
              </li>
              <li>
                <Link href="/89117-vs-89147-vs-89148" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Zip Code Comparison
                </Link>
              </li>
              <li>
                <Link href="/homes-near-desert-breeze-park" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Desert Breeze Park Homes
                </Link>
              </li>
              <li>
                <Link href="/lennar-buyer-agent-las-vegas" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Lennar Buyer Agent
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas & SEO Pages */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Homes & Guides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/spring-valley-real-estate" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Spring Valley Real Estate
                </Link>
              </li>
              <li>
                <Link href="/southwest-las-vegas-homes" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Southwest Las Vegas Homes
                </Link>
              </li>
              <li>
                <Link href="/89117-homes-for-sale" className="text-gray-300 hover:text-blue-400 transition-colors">
                  89117 Homes for Sale
                </Link>
              </li>
              <li>
                <Link href="/89147-homes-for-sale" className="text-gray-300 hover:text-blue-400 transition-colors">
                  89147 Homes for Sale
                </Link>
              </li>
              <li>
                <Link href="/89148-homes-for-sale" className="text-gray-300 hover:text-blue-400 transition-colors">
                  89148 Homes for Sale
                </Link>
              </li>
              <li>
                <Link href="/las-vegas-home-valuation" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Free Home Valuation
                </Link>
              </li>
              <li>
                <Link href="/first-time-home-buyer-las-vegas" className="text-gray-300 hover:text-blue-400 transition-colors">
                  First-Time Home Buyer Guide
                </Link>
              </li>
              <li>
                <Link href="/las-vegas-investment-properties" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Investment Properties
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
            <div className="space-y-2">
              <p className="text-gray-300">Southwest Las Vegas</p>
              <p className="text-gray-300">Spring Valley</p>
              <div className="space-y-1">
                <p className="text-sm text-gray-400">Zip Codes:</p>
                <p className="text-sm text-gray-300">89117, 89147, 89148</p>
              </div>
              <p className="text-sm text-gray-300 mt-3">
                Specializing in established homes and newer developments with strong investment potential.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Sienna Ridge Homes. All rights reserved. Dr. Jan Duffy - Licensed Real Estate Agent.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
