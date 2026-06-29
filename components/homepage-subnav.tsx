'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const SECTIONS = [
  { id: 'search', label: 'Search' },
  { id: 'agent', label: 'About Agent' },
  { id: 'guides', label: 'Guides' },
  { id: 'market', label: 'Market' },
  { id: 'sienna-ridge', label: 'Sienna Ridge' },
  { id: 'models', label: 'Models' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'faq', label: 'FAQ' },
] as const

export default function HomepageSubnav() {
  const [activeId, setActiveId] = useState<(typeof SECTIONS)[number]['id']>('search')

  useEffect(() => {
    const sectionElements = SECTIONS.map((section) => ({
      id: section.id,
      element: document.getElementById(section.id),
    })).filter(
      (entry): entry is { id: (typeof SECTIONS)[number]['id']; element: HTMLElement } =>
        entry.element !== null,
    )

    if (sectionElements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target.id) {
          const id = visible[0].target.id
          if (SECTIONS.some((section) => section.id === id)) {
            setActiveId(id as (typeof SECTIONS)[number]['id'])
          }
        }
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5] },
    )

    sectionElements.forEach(({ element }) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      aria-label="Page sections"
      className="sticky top-[57px] md:top-[65px] z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm"
    >
      <div className="container mx-auto px-4">
        <div className="flex gap-1 overflow-x-auto py-2 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none]">
          {SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={cn(
                'shrink-0 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors whitespace-nowrap',
                activeId === section.id
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-blue-700',
              )}
            >
              {section.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
