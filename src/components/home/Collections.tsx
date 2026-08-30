import { Link } from 'react-router-dom'
import Reveal from '../ui/Reveal'
import { collections } from '../../data/content'

export default function Collections() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
      <Reveal className="mb-14 max-w-xl md:mb-20">
        <p className="mb-4 text-[0.7rem] font-medium tracking-widest-xl text-taupe">OUR COLLECTIONS</p>
        <h2 className="font-display text-[32px] font-bold leading-tight text-ink md:text-[48px]">
          Sorted by Room, Not by Brand
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-px overflow-hidden bg-line sm:grid-cols-2 lg:grid-cols-3">
        {collections.map((c, i) => (
          <Reveal key={c.slug} delay={(i % 3) * 0.08}>
            <Link
              to={`/products/${c.slug}`}
              className="group relative block aspect-[4/5] overflow-hidden bg-ink"
            >
              <img
                src={c.image}
                alt={c.name}
                className="h-full w-full scale-105 object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.15]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent transition-opacity duration-500 group-hover:from-ink/90" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 md:p-8">
                <h3 className="text-[22px] font-bold text-cream">{c.name}</h3>
                <span className="flex h-9 w-9 shrink-0 -translate-x-1 items-center justify-center rounded-full border border-cream/40 text-cream opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
