import Reveal from '../ui/Reveal'
import { setApartPoints } from '../../data/content'

export default function WhatSetsApart() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
      <Reveal className="mb-16 max-w-2xl md:mb-20">
        <p className="mb-4 text-[0.7rem] font-medium tracking-widest-xl text-taupe">THE DIFFERENCE</p>
        <h2 className="font-display text-[32px] font-bold leading-tight text-ink md:text-[48px]">
          What Sets Rajiv Sanitations Apart
        </h2>
      </Reveal>

      <div className="flex flex-col">
        {setApartPoints.map((point, i) => (
          <Reveal key={point.title} delay={i * 0.06}>
            <div className="group flex flex-col gap-3 border-t border-ink/15 py-8 last:border-b sm:flex-row sm:items-center sm:gap-10 md:py-10">
              <h3 className="text-[22px] font-bold text-ink sm:w-80 sm:shrink-0">
                {point.title}
              </h3>
              <p className="max-w-xl text-[14px] leading-relaxed text-charcoal/70">
                {point.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
