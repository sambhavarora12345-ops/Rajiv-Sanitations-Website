import { Link, Navigate, useParams } from 'react-router-dom'
import Reveal from '../components/ui/Reveal'
import { collections } from '../data/content'
import { productCategories } from '../data/navigation'
import { megaMenuImages } from '../lib/images'
import { slugify } from '../lib/slug'

export default function ProductCategory() {
  const { category, sub } = useParams()

  const menuCategory = productCategories.find((c) => slugify(c.name) === category)
  const collection = collections.find((c) => c.slug === category)

  if (!menuCategory && !collection) return <Navigate to="/products" replace />

  const name = menuCategory?.name ?? collection?.name ?? ''
  const image = menuCategory ? megaMenuImages[menuCategory.name] : collection?.image
  const subName = menuCategory?.subcategories.find((s) => slugify(s) === sub)

  return (
    <>
      <section className="relative flex h-[56svh] min-h-[380px] items-end overflow-hidden bg-ink">
        <img src={image} alt={name} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-14 md:px-10 md:pb-20">
          <p className="mb-4 text-[0.7rem] font-medium tracking-[0.5em] text-cream/70">
            <Link to="/products" className="hover:text-cream">
              PRODUCTS
            </Link>{' '}
            / {name.toUpperCase()}
            {subName ? ` / ${subName.toUpperCase()}` : ''}
          </p>
          <h1 className="max-w-2xl font-display text-[32px] font-bold leading-tight text-cream md:text-[48px]">
            {subName ?? name}
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
        <Reveal>
          <p className="text-[14px] leading-relaxed text-charcoal/70">
            This is placeholder copy for {subName ?? name}. Swap it for real product details, pricing and
            photography whenever you're ready. Until then, our consultants can help you shortlist pieces in person.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block border border-ink px-8 py-3 text-[0.72rem] font-medium tracking-widest-xl text-ink transition-colors hover:bg-ink hover:text-cream"
          >
            ENQUIRE ABOUT THIS COLLECTION
          </Link>
        </Reveal>

        {menuCategory && !subName && (
          <Reveal delay={0.1} className="mt-16 grid grid-cols-2 gap-4 text-left sm:grid-cols-3">
            {menuCategory.subcategories.map((s) => (
              <Link
                key={s}
                to={`/products/${slugify(menuCategory.name)}/${slugify(s)}`}
                className="border border-line px-5 py-4 text-sm text-ink transition-colors hover:border-ink"
              >
                {s}
              </Link>
            ))}
          </Reveal>
        )}
      </section>
    </>
  )
}
