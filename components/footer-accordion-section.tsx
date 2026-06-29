'use client'

import type { ReactNode } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

type FooterAccordionSectionProps = {
  title: string
  children: ReactNode
  defaultOpen?: boolean
}

export default function FooterAccordionSection({
  title,
  children,
  defaultOpen = false,
}: FooterAccordionSectionProps) {
  return (
    <>
      <details
        className="md:hidden group border-b border-gray-800 py-1"
        open={defaultOpen}
      >
        <summary className="flex cursor-pointer list-none items-center justify-between py-3 font-semibold text-white [&::-webkit-details-marker]:hidden">
          {title}
          <ChevronDown className="h-4 w-4 text-gray-400 transition-transform group-open:rotate-180" />
        </summary>
        <div className="pb-4">{children}</div>
      </details>
      <div className="hidden md:block">
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        {children}
      </div>
    </>
  )
}

export function FooterLinkList({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return <ul className={cn('space-y-2', className)}>{children}</ul>
}
