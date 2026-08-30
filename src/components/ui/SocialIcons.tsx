interface IconProps {
  size?: number
  className?: string
}

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
})

export function InstagramIcon({ size = 18, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function FacebookIcon({ size = 18, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M14.5 8.5h2V5.2c-.35-.05-1.55-.15-2.95-.15-2.92 0-4.92 1.78-4.92 5.05v2.65H6.5v3.6h2.63V21h3.62v-6.65h2.6l.4-3.6h-3V10.5c0-1.05.28-1.75 1.75-1.75z" />
    </svg>
  )
}

export function LinkedInIcon({ size = 18, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <line x1="7.5" y1="10.5" x2="7.5" y2="17" />
      <circle cx="7.5" cy="7.2" r="0.6" fill="currentColor" stroke="none" />
      <path d="M11.5 17v-4.2c0-1.4 1-2.3 2.3-2.3 1.3 0 2.2.9 2.2 2.3V17" />
    </svg>
  )
}

export function PinterestIcon({ size = 18, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 19c.6-2.2 1.2-4.7 1.8-7.1M12.3 5.6c2.6 0 4.4 1.5 4.4 3.9 0 2.7-1.4 5-3.9 5-.9 0-1.6-.5-1.9-1.1" />
    </svg>
  )
}
