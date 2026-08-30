import Reveal from '../ui/Reveal'
import { productShowcaseImages } from '../../lib/images'

const labels = [
  'Designer Faucet Collection',
  'Wall-Mounted Sanitaryware',
  'Modular Kitchen Systems',
  'Large-Format Porcelain',
  'Walk-In Wardrobe Systems',
  'Freestanding Bathtubs',
  'Natural Stone Vanities',
  'Architectural Facade Panels',
]

export default function ProductShowcase() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
      <Reveal className="mb-14 flex flex-col items-start justify-between gap-6 md:mb-20 md:flex-row md:items-end">
        <div className="max-w-xl">
          <p className="mb-4 text-[0.7rem] font-medium tracking-widest-xl text-taupe">THE SHOWCASE</p>
          <h2 className="font-display text-[32px] font-bold leading-tight text-ink md:text-[48px]">
            Products Worth Living With
          </h2>
        </div>
        <p className="max-w-sm text-[14px] leading-relaxed text-charcoal/60">
          A handful of pieces clients keep asking about, pulled from across the showroom floor.
        </p>
      </Reveal>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
        {productShowcaseImages.map((src, i) => (
          <Reveal key={src} delay={(i % 4) * 0.08} className={i % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''}>
            <div className={`group relative overflow-hidden bg-ink ${i % 5 === 0 ? 'aspect-square' : 'aspect-[3/4]'}`}>
              <img
                src={src}
                alt={labels[i]}
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/20" />
              <p className="absolute bottom-4 left-4 translate-y-2 text-[0.72rem] font-medium tracking-widest-xl text-cream opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {labels[i].toUpperCase()}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
