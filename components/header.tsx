'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import CalendlyPopupButton from '@/components/calendly-popup-button'
import AgentHeadshot from '@/components/agent-headshot'
import { Menu, X, Phone, Search } from 'lucide-react'
import { NAP, REALSCOUT_SEARCH_URL } from '@/lib/site-config'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { href: '/', label: 'Home', external: false },
  { href: REALSCOUT_SEARCH_URL, label: 'Listings', external: true },
  { href: '/sienna-ridge-lennar-las-vegas', label: 'Sienna Ridge', external: false },
  { href: '/neighborhoods', label: 'Neighborhoods', external: false },
  { href: '/faq', label: 'FAQ', external: false },
  { href: '/about', label: 'About', external: false },
] as const

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-blue-700 focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
      >
        Skip to main content
      </a>
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3 md:py-4">
            <Link href="/" className="flex items-center space-x-3 min-w-0">
              <AgentHeadshot size="sm" />
              <div className="hidden sm:block min-w-0">
                <p className="text-lg font-bold text-slate-900 truncate">Sienna Ridge Homes</p>
                <p className="text-sm text-slate-600 truncate">Dr. Jan Duffy, Realtor</p>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-6" aria-label="Main navigation">
              {NAV_LINKS.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 hover:text-blue-600 transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'text-sm font-medium transition-colors',
                      pathname === link.href ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600',
                    )}
                  >
                    {link.label}
                  </Link>
                ),
              )}
              <div className="flex items-center space-x-3 ml-2">
                <a
                  href={REALSCOUT_SEARCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-700 transition-colors text-sm font-medium"
                >
                  <Search className="h-4 w-4 mr-1" />
                  Search
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
              onClick={() => setIsMenuOpen((open) => !open)}
              className="lg:hidden p-2 rounded-md text-slate-700 hover:text-blue-600 hover:bg-slate-100"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          <>
            <button
              type="button"
              className="fixed inset-0 bg-slate-900/40 z-40 lg:hidden"
              aria-label="Close menu overlay"
              onClick={() => setIsMenuOpen(false)}
            />
            <div className="lg:hidden relative z-50 border-t border-slate-100 bg-white shadow-lg">
              <nav className="container mx-auto px-4 py-4 flex flex-col space-y-1" aria-label="Mobile navigation">
                {NAV_LINKS.map((link) =>
                  link.external ? (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg px-3 py-2.5 text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        'rounded-lg px-3 py-2.5 transition-colors',
                        pathname === link.href
                          ? 'bg-blue-50 text-blue-700 font-medium'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-blue-600',
                      )}
                    >
                      {link.label}
                    </Link>
                  ),
                )}
                <div className="pt-4 mt-2 border-t border-slate-100 space-y-3">
                  <a
                    href={REALSCOUT_SEARCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center rounded-lg border border-blue-200 px-3 py-2.5 text-blue-600 hover:bg-blue-50 transition-colors"
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
          </>
        ) : null}
      </header>
    </>
  )
}
