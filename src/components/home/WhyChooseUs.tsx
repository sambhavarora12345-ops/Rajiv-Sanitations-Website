import Reveal from '../ui/Reveal'
import Counter from '../ui/Counter'
import { stats, whyChoosePoints } from '../../data/content'

export default function WhyChooseUs() {
  return (
    <section className="bg-sand">
      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center md:mb-20">
          <p className="mb-4 text-[0.7rem] font-medium tracking-widest-xl text-taupe">OUR PHILOSOPHY</p>
          <h2 className="font-display text-[32px] font-bold leading-tight text-ink md:text-[48px]">
            Why Choose Rajiv Sanitations
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {whyChoosePoints.map((point, i) => (
            <Reveal key={point.title} delay={(i % 4) * 0.08}>
              <div className="border-t border-ink/15 pt-6">
                <h3 className="mb-3 text-[22px] font-bold text-ink">{point.title}</h3>
                <p className="text-[14px] leading-relaxed text-charcoal/70">{point.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 gap-y-12 border-t border-ink/15 pt-14 md:mt-28 md:grid-cols-4 md:pt-16">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1} className="text-center">
              <p className="text-4xl font-bold text-ink sm:text-5xl md:text-6xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-[0.7rem] font-medium tracking-widest-xl text-taupe">
                {stat.label.toUpperCase()}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
