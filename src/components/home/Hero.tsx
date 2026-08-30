import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { heroImages } from '../../lib/images'

const slides = [
  { eyebrow: 'Since 1989', title: 'Luxury Bathrooms.\nExceptional Spaces.' },
  { eyebrow: 'From the Showroom', title: 'Tiles, Stone &\nDesigner Surfaces.' },
  { eyebrow: 'This Season', title: 'Kitchens, Wardrobes\n& Wellness.' },
  { eyebrow: 'Brands We Carry', title: 'Architectural Products\nFor Delhi Homes.' },
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % heroImages.length), 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-[100svh] min-h-[560px] w-full overflow-hidden bg-ink">
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.4, ease: 'easeInOut' }, scale: { duration: 6, ease: 'linear' } }}
          className="absolute inset-0"
        >
          <img
            src={heroImages[index]}
            alt=""
            className="h-full w-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-ink/40" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-5 text-[0.7rem] font-medium tracking-[0.5em] text-cream/80">
              {slides[index].eyebrow.toUpperCase()}
            </p>
            <h1 className="whitespace-pre-line font-display text-[32px] font-bold leading-[1.15] text-cream sm:text-[40px] md:text-[48px]">
              {slides[index].title}
            </h1>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-10 flex items-center gap-4"
        >
          <a
            href="/products"
            className="border border-cream/60 px-8 py-3 text-[0.72rem] font-medium tracking-widest-xl text-cream transition-colors hover:bg-cream hover:text-ink"
          >
            EXPLORE COLLECTIONS
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2.5">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-[3px] rounded-full transition-all duration-500 ${
              i === index ? 'w-8 bg-cream' : 'w-3 bg-cream/40'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
