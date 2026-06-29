import Image from 'next/image'
import { AGENT_HEADSHOT_PATH } from '@/lib/site-config'
import { cn } from '@/lib/utils'

type AgentHeadshotProps = {
  size?: 'sm' | 'md' | 'lg'
  className?: string
  priority?: boolean
}

const sizeClasses = {
  sm: 'h-11 w-11',
  md: 'aspect-square w-full max-w-xs',
  lg: 'aspect-square w-full max-w-md',
} as const

export default function AgentHeadshot({
  size = 'md',
  className,
  priority = false,
}: AgentHeadshotProps) {
  return (
    <div
      className={cn(
        'overflow-hidden bg-black shadow-lg',
        size === 'sm' ? 'shrink-0 rounded-full ring-2 ring-amber-400' : 'rounded-lg p-2',
        sizeClasses[size],
        className,
      )}
    >
      <Image
        src={AGENT_HEADSHOT_PATH}
        alt="Dr. Jan Duffy - Southwest Las Vegas Real Estate Agent"
        width={1536}
        height={1024}
        className="h-full w-full object-contain"
        sizes={
          size === 'sm'
            ? '44px'
            : size === 'md'
              ? '(max-width: 768px) 100vw, 320px'
              : '(max-width: 768px) 100vw, 448px'
        }
        priority={priority}
      />
    </div>
  )
}
