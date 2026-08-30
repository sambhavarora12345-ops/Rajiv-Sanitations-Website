import { Link } from 'react-router-dom'
import Reveal from '../components/ui/Reveal'
import { collections } from '../data/content'

export default function Products() {
  return (
    <>
      <section className="bg-ink pb-16 pt-40 text-center text-cream md:pb-24 md:pt-48">
        <Reveal className="mx-auto max-w-2xl px-6">
          <p className="mb-5 text-[0.7rem] font-medium tracking-[0.5em] text-cream/70">THE COLLECTION</p>
          <h1 className="font-display text-[32px] font-bold leading-tight md:text-[48px]">Products</h1>
          <p className="mx-auto mt-6 max-w-lg text-[14px] leading-relaxed text-cream/60">
            Tiles, surfaces, sanitaryware, kitchens and everything else on our showroom floor, sorted by room.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-1 gap-px overflow-hidden bg-line sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 3) * 0.08}>
              <Link to={`/products/${c.slug}`} className="group relative block aspect-[4/5] overflow-hidden bg-ink">
                <img
                  src={c.image}
                  alt={c.name}
                  className="h-full w-full scale-105 object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.15]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                <h3 className="absolute bottom-6 left-6 text-[22px] font-bold text-cream">
                  {c.name}
                </h3>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
