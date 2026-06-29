'use client'

import dynamic from 'next/dynamic'
import DeferredWhenVisible from '@/components/deferred-when-visible'
import { RealScoutOfficeListings } from '@/components/realscout-widgets'

const RealScoutSearchTabs = dynamic(() => import('@/components/realscout-search-tabs'), {
  loading: () => <RealScoutSearchSkeleton />,
})

function RealScoutSearchSkeleton() {
  return (
    <div className="rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="h-12 bg-slate-50 border-b border-slate-200" />
      <div className="space-y-4 p-6">
        <div className="h-6 w-48 mx-auto rounded bg-slate-100 animate-pulse" />
        <div className="h-4 w-72 mx-auto rounded bg-slate-100 animate-pulse" />
        <div className="h-64 rounded-lg bg-slate-100 animate-pulse" />
      </div>
    </div>
  )
}

function RealScoutListingsSkeleton() {
  return (
    <div className="rounded-lg border border-slate-200 bg-white shadow-sm p-6">
      <div className="h-6 w-64 mx-auto rounded bg-slate-100 animate-pulse mb-2" />
      <div className="h-4 w-80 mx-auto rounded bg-slate-100 animate-pulse mb-6" />
      <div className="h-72 rounded-lg bg-slate-100 animate-pulse" />
    </div>
  )
}

export default function HomepageRealScoutSection() {
  return (
    <>
      <DeferredWhenVisible fallback={<RealScoutSearchSkeleton />} minHeight="420px">
        <RealScoutSearchTabs />
      </DeferredWhenVisible>

      <div className="mt-12 mb-12">
        <DeferredWhenVisible fallback={<RealScoutListingsSkeleton />} minHeight="480px">
          <RealScoutOfficeListings
            description="Current listings in Spring Valley & Southwest Las Vegas (89117, 89147, 89148) — $400K to $600K range"
          />
        </DeferredWhenVisible>
      </div>
    </>
  )
}
