'use client'

import { useState } from 'react'
import { Search, SlidersHorizontal, DollarSign } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import {
  RealScoutSimpleSearch,
  RealScoutAdvancedSearch,
  RealScoutHomeValue,
} from '@/components/realscout-widgets'

type SearchTab = 'quick' | 'advanced' | 'valuation'

const TABS: { id: SearchTab; label: string; shortLabel: string; icon: typeof Search; description: string }[] = [
  {
    id: 'quick',
    label: 'Quick Search',
    shortLabel: 'Quick',
    icon: Search,
    description: 'Find properties with a simple search',
  },
  {
    id: 'advanced',
    label: 'Advanced Search',
    shortLabel: 'Advanced',
    icon: SlidersHorizontal,
    description: 'Filter by price, beds, baths, and more',
  },
  {
    id: 'valuation',
    label: 'Home Valuation',
    shortLabel: 'Value',
    icon: DollarSign,
    description: 'Get your property\'s estimated value in seconds',
  },
]

export default function RealScoutSearchTabs() {
  const [activeTab, setActiveTab] = useState<SearchTab>('quick')
  const active = TABS.find((tab) => tab.id === activeTab) ?? TABS[0]

  return (
    <Card className="border-slate-200 shadow-sm overflow-hidden">
      <div
        role="tablist"
        aria-label="Property search tools"
        className="flex border-b border-slate-200 bg-slate-50"
      >
        {TABS.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`search-panel-${tab.id}`}
              id={`search-tab-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'flex-1 flex items-center justify-center gap-1.5 px-3 py-3.5 text-sm font-medium transition-colors border-b-2 -mb-px',
                isActive
                  ? 'border-blue-600 text-blue-700 bg-white'
                  : 'border-transparent text-slate-600 hover:text-blue-600 hover:bg-white/60',
              )}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden">{tab.shortLabel}</span>
            </button>
          )
        })}
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{active.label}</CardTitle>
        <CardDescription>{active.description}</CardDescription>
      </CardHeader>
      <CardContent className="p-6 pt-2">
        <div
          role="tabpanel"
          id={`search-panel-${activeTab}`}
          aria-labelledby={`search-tab-${activeTab}`}
        >
          {activeTab === 'quick' ? (
            <div className="flex justify-center">
              <RealScoutSimpleSearch />
            </div>
          ) : null}
          {activeTab === 'advanced' ? (
            <div className="flex justify-center">
              <RealScoutAdvancedSearch />
            </div>
          ) : null}
          {activeTab === 'valuation' ? (
            <RealScoutHomeValue />
          ) : null}
        </div>
      </CardContent>
    </Card>
  )
}
