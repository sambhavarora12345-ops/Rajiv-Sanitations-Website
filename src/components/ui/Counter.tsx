import { useEffect, useRef, useState } from 'react'
import { useInView, animate } from 'framer-motion'

interface CounterProps {
  value: number
  suffix?: string
  duration?: number
}

export default function Counter({ value, suffix = '', duration = 2 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value, duration])

  return (
    <span ref={ref}>
      {display.toLocaleString('en-IN')}
      {suffix}
    </span>
  )
}
