import Reveal from '../ui/Reveal'
import { partners } from '../../data/content'

export default function Partners() {
  const track = [...partners, ...partners]

  return (
    <section className="border-y border-line bg-paper py-20 md:py-24">
      <Reveal className="mx-auto mb-12 max-w-xl px-6 text-center md:mb-16">
        <p className="mb-4 text-[0.7rem] font-medium tracking-widest-xl text-taupe">OUR PARTNERS</p>
        <h2 className="font-display text-[32px] font-bold text-ink md:text-[48px]">
          Global Brands We Bring Home
        </h2>
      </Reveal>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-paper to-transparent md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-paper to-transparent md:w-40" />

        <div className="marquee-track flex w-max items-center gap-16 px-8">
          {track.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="text-[22px] font-bold tracking-wide text-taupe/70 transition-colors hover:text-ink"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
