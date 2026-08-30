interface LogoProps {
  variant?: 'full' | 'mark'
  className?: string
}

export default function Logo({ variant = 'full', className = 'h-10' }: LogoProps) {
  const src = variant === 'mark' ? '/logo-mark.png' : '/logo-full.png'
  const alt = variant === 'mark' ? 'Rajiv Sanitations' : 'Rajiv Sanitations, Estd. 1989'

  return <img src={src} alt={alt} className={`w-auto select-none ${className}`} draggable={false} />
}
