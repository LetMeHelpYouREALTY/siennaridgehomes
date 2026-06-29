'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

type DeferredWhenVisibleProps = {
  children: ReactNode
  fallback?: ReactNode
  rootMargin?: string
  minHeight?: string
}

/** Renders children only after the placeholder enters (or nears) the viewport. */
export default function DeferredWhenVisible({
  children,
  fallback = null,
  rootMargin = '200px 0px',
  minHeight = '320px',
}: DeferredWhenVisibleProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [rootMargin])

  return (
    <div ref={ref} style={visible ? undefined : { minHeight }}>
      {visible ? children : fallback}
    </div>
  )
}
