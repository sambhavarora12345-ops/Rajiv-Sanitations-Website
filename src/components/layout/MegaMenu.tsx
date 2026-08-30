import { useState } from 'react'
import { Link } from 'react-router-dom'
import { productCategories } from '../../data/navigation'
import { megaMenuImages } from '../../lib/images'
import { slugify } from '../../lib/slug'

interface MegaMenuProps {
  onNavigate: () => void
}

export default function MegaMenu({ onNavigate }: MegaMenuProps) {
  const [active, setActive] = useState(productCategories[0].name)
  const activeCategory = productCategories.find((c) => c.name === active) ?? productCategories[0]

  return (
    <div className="absolute left-0 right-0 top-full border-t border-line/60 bg-paper shadow-[0_30px_60px_-15px_rgba(23,20,15,0.25)]">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,320px)_1fr] gap-0">
        <div className="border-r border-line/60 py-8 pl-8 pr-4">
          <p className="mb-4 text-[0.65rem] font-medium tracking-widest-xl text-taupe">CATEGORIES</p>
          <ul>
            {productCategories.map((cat) => (
              <li key={cat.name}>
                <button
                  onMouseEnter={() => setActive(cat.name)}
                  onFocus={() => setActive(cat.name)}
                  className={`group flex w-full items-center justify-between py-3 text-left font-display text-xl font-bold transition-colors ${
                    active === cat.name ? 'text-ink' : 'text-taupe hover:text-ink'
                  }`}
                >
                  {cat.name}
                  <span
                    className={`ml-3 h-px flex-1 origin-left scale-x-0 bg-ink transition-transform duration-300 ${
                      active === cat.name ? 'scale-x-100' : ''
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-[1fr_360px]">
          <div className="py-8 pl-10 pr-6">
            <p className="mb-4 text-[0.65rem] font-medium tracking-widest-xl text-taupe">{activeCategory.name}</p>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3">
              {activeCategory.subcategories.map((sub) => (
                <li key={sub}>
                  <Link
                    to={`/products/${slugify(activeCategory.name)}/${slugify(sub)}`}
                    onClick={onNavigate}
                    className="block text-[0.92rem] text-charcoal transition-colors hover:text-bronze"
                  >
                    {sub}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to={`/products/${slugify(activeCategory.name)}`}
              onClick={onNavigate}
              className="mt-6 inline-block text-[0.75rem] font-medium tracking-widest-xl text-ink underline underline-offset-4"
            >
              VIEW ALL
            </Link>
          </div>
          <div className="relative overflow-hidden py-8 pr-8">
            <div className="h-full w-full overflow-hidden">
              <img
                key={activeCategory.name}
                src={megaMenuImages[activeCategory.name]}
                alt={activeCategory.name}
                className="h-full w-full animate-fade-in object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
