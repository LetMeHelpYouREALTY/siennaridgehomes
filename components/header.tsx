'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import CalendlyPopupButton from '@/components/calendly-popup-button'
import { Menu, X, Phone, Search, Home } from 'lucide-react'
import { NAP, REALSCOUT_SEARCH_URL } from '@/lib/site-config'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Home className="h-8 w-8 text-blue-600" />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900">Sienna Ridge Homes</h1>
              <p className="text-sm text-gray-600">Dr. Jan Duffy</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <a
              href={REALSCOUT_SEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Listings
            </a>
            <Link href="/sienna-ridge-lennar-las-vegas" className="text-gray-700 hover:text-blue-600 transition-colors">
              Sienna Ridge
            </Link>
            <Link href="/neighborhoods" className="text-gray-700 hover:text-blue-600 transition-colors">
              Neighborhoods
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-blue-600 transition-colors">
              FAQ
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>
            <div className="flex items-center space-x-4">
              <a 
                href={REALSCOUT_SEARCH_URL}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
              >
                <Search className="h-4 w-4 mr-1" />
                Search Properties
              </a>
              <CalendlyPopupButton size="sm" className="bg-blue-600 hover:bg-blue-700" />
              <Button size="sm" variant="outline" asChild>
                <a href={`tel:${NAP.phoneTel}`}>
                  <Phone className="h-4 w-4 mr-1" />
                  Call
                </a>
              </Button>
            </div>
          </nav>

          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <a
                href={REALSCOUT_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Listings
              </a>
              <Link href="/sienna-ridge-lennar-las-vegas" className="text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Sienna Ridge
              </Link>
              <Link href="/neighborhoods" className="text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Neighborhoods
              </Link>
              <Link href="/faq" className="text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                FAQ
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <div className="pt-4 border-t space-y-3">
                <a 
                  href={REALSCOUT_SEARCH_URL}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Search className="h-4 w-4 mr-2" />
                  Search Properties
                </a>
                <CalendlyPopupButton size="sm" className="w-full bg-blue-600 hover:bg-blue-700" />
                <Button size="sm" variant="outline" className="w-full" asChild>
                  <a href={`tel:${NAP.phoneTel}`}>
                    <Phone className="h-4 w-4 mr-2" />
                    Call {NAP.phone}
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
