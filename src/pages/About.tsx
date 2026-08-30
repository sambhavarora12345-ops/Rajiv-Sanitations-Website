import Reveal from '../components/ui/Reveal'
import Counter from '../components/ui/Counter'
import Partners from '../components/home/Partners'
import {
  aboutHeroImage,
  missionImage,
  luxuryBathroomsImage,
  exceptionalSpacesImage,
  founderImages,
} from '../lib/images'
import { stats } from '../data/content'

const founders = [
  {
    name: 'Rajiv Mehra',
    role: 'Founder & Managing Director',
    bio: 'Opened the first showroom in 1989 after years in the trade, on the bet that Delhi homeowners wanted better fittings than what was easy to find at the time.',
    image: founderImages[0],
  },
  {
    name: 'Anjali Mehra',
    role: 'Co-Founder & Creative Director',
    bio: 'Picks what actually makes it onto the floor, and spends a good part of most weeks on calls with the brands we carry and the architects we work with.',
    image: founderImages[1],
  },
]

export default function About() {
  return (
    <>
      <section className="relative flex h-[80svh] min-h-[520px] w-full items-end overflow-hidden bg-ink">
        <img src={aboutHeroImage} alt="Rajiv Sanitations showroom" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-ink/50" />
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 md:px-10 md:pb-24">
          <p className="mb-5 text-[0.7rem] font-medium tracking-[0.5em] text-cream/80">SINCE 1989</p>
          <h1 className="max-w-2xl font-display text-[32px] font-bold leading-[1.1] text-cream md:text-[48px]">
            Who We Are
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24 text-center md:py-32">
        <Reveal>
          <p className="mb-4 text-[0.7rem] font-medium tracking-widest-xl text-taupe">ABOUT RAJIV SANITATIONS</p>
          <h2 className="mx-auto max-w-3xl font-display text-[32px] font-bold leading-tight text-ink md:text-[48px]">
            A Delhi showroom for bathrooms, surfaces and kitchens, built up over three generations of clients
            who kept coming back.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-[14px] leading-relaxed text-charcoal/70">
            Since 1989, we've brought fittings from manufacturers across Europe and India under one roof:
            tiles, sanitaryware, faucets, kitchens, wardrobes and wellness products. What started as a single
            showroom has grown mostly by word of mouth. (This paragraph is placeholder copy, ready for you to
            swap in your own story.)
          </p>
        </Reveal>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2">
        <Reveal className="relative aspect-[4/5] overflow-hidden bg-ink md:aspect-auto">
          <img src={luxuryBathroomsImage} alt="Luxury bathroom" className="h-full w-full object-cover" />
        </Reveal>
        <div className="flex items-center bg-sand px-8 py-16 md:px-16 md:py-0">
          <Reveal>
            <p className="mb-4 text-[0.7rem] font-medium tracking-widest-xl text-taupe">OUR PROMISE</p>
            <h3 className="mb-6 text-[22px] font-bold leading-tight text-ink">
              Luxury Bathrooms.
              <br />
              Exceptional Spaces.
            </h3>
            <p className="max-w-md text-[14px] leading-relaxed text-charcoal/70">
              We treat a bathroom like any other room in the house: worth getting right, not an afterthought
              once the budget's mostly spent. (Placeholder copy. Swap this for your own design philosophy.)
            </p>
          </Reveal>
        </div>
        <div className="order-4 flex items-center bg-ink px-8 py-16 text-cream md:order-3 md:px-16 md:py-0">
          <Reveal>
            <p className="mb-4 text-[0.7rem] font-medium tracking-widest-xl text-cream/50">HOW WE WORK</p>
            <h3 className="mb-6 text-[22px] font-bold leading-tight">
              Involved Past
              <br />
              the Sale
            </h3>
            <p className="max-w-md text-[14px] leading-relaxed text-cream/70">
              Our consultants sit in on the first conversation and the last one, so nobody's picking a
              replacement tile mid-installation because the original ran out.
            </p>
          </Reveal>
        </div>
        <Reveal className="relative order-3 aspect-[4/5] overflow-hidden bg-ink md:order-4 md:aspect-auto">
          <img src={exceptionalSpacesImage} alt="Exceptional interior space" className="h-full w-full object-cover" />
        </Reveal>
      </section>

      <section className="relative flex h-[70svh] min-h-[440px] items-center overflow-hidden bg-ink">
        <img src={missionImage} alt="Our mission" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-ink/60" />
        <Reveal className="relative z-10 mx-auto max-w-2xl px-6 text-center">
          <p className="mb-4 text-[0.7rem] font-medium tracking-widest-xl text-cream/70">OUR MISSION</p>
          <h2 className="font-display text-[32px] font-bold leading-tight text-cream md:text-[48px]">
            To make the fittings you'd see in an architect's own home available to anyone renovating theirs.
          </h2>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal className="mb-16 text-center md:mb-20">
          <p className="mb-4 text-[0.7rem] font-medium tracking-widest-xl text-taupe">LEADERSHIP</p>
          <h2 className="font-display text-[32px] font-bold leading-tight text-ink md:text-[48px]">Founders</h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:gap-16">
          {founders.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.1}>
              <div className="aspect-[4/5] overflow-hidden bg-sand">
                <img src={f.image} alt={f.name} className="h-full w-full object-cover grayscale-[15%]" />
              </div>
              <h3 className="mt-6 text-[22px] font-bold text-ink">{f.name}</h3>
              <p className="mt-1 text-[0.7rem] font-medium tracking-widest-xl text-taupe">{f.role.toUpperCase()}</p>
              <p className="mt-4 max-w-md text-[14px] leading-relaxed text-charcoal/70">{f.bio}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-12 px-6 py-24 md:grid-cols-4 md:py-28">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1} className="text-center">
              <p className="text-4xl font-bold text-ink sm:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-[0.7rem] font-medium tracking-widest-xl text-taupe">
                {stat.label.toUpperCase()}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <Partners />
    </>
  )
}
