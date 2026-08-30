import Reveal from '../components/ui/Reveal'
import { brands } from '../data/brands'

export default function Brands() {
  return (
    <>
      <section className="bg-ink pb-16 pt-40 text-center text-cream md:pb-24 md:pt-48">
        <Reveal className="mx-auto max-w-2xl px-6">
          <p className="mb-5 text-[0.7rem] font-medium tracking-[0.5em] text-cream/70">BRANDS WE CARRY</p>
          <h1 className="font-display text-[32px] font-bold leading-tight md:text-[48px]">Our Brands</h1>
          <p className="mx-auto mt-6 max-w-lg text-[14px] leading-relaxed text-cream/60">
            Every name on this floor is one we'd put in our own homes. A shortlist, not a full catalogue.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-2 gap-px overflow-hidden border border-line bg-line sm:grid-cols-3 lg:grid-cols-4">
          {brands.map((brand, i) => (
            <Reveal key={brand.name} delay={(i % 8) * 0.04}>
              <div className="group flex aspect-[4/3] flex-col items-center justify-center gap-3 bg-paper px-6 text-center transition-colors duration-500 hover:bg-ink">
                {brand.logo ? (
                  <img src={brand.logo} alt={brand.name} className="max-h-12 w-auto opacity-80 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:invert" />
                ) : (
                  <span className="text-[22px] font-bold text-ink transition-colors duration-500 group-hover:text-cream">
                    {brand.name}
                  </span>
                )}
                <span className="text-[0.6rem] font-medium tracking-widest-xl text-taupe transition-colors duration-500 group-hover:text-cream/60">
                  {brand.category.toUpperCase()}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
