import { Link } from 'react-router-dom'
import Logo from './Logo'
import { FacebookIcon, InstagramIcon, LinkedInIcon, PinterestIcon } from '../ui/SocialIcons'
import { productCategories } from '../../data/navigation'
import { slugify } from '../../lib/slug'

export default function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-ink text-cream">
      <div className="mx-auto max-w-[1600px] px-6 pb-10 pt-20 md:px-10">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo className="h-11" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/60">
              Sanitaryware, tiles, kitchens and wardrobes for people who plan to live with their choices
              for a long time.
            </p>
            <div className="mt-8 flex items-center gap-4 text-cream/70">
              <a href="#" aria-label="Instagram" className="transition-colors hover:text-cream">
                <InstagramIcon />
              </a>
              <a href="#" aria-label="Facebook" className="transition-colors hover:text-cream">
                <FacebookIcon />
              </a>
              <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-cream">
                <LinkedInIcon />
              </a>
              <a href="#" aria-label="Pinterest" className="transition-colors hover:text-cream">
                <PinterestIcon />
              </a>
            </div>
          </div>

          <div>
            <p className="mb-5 text-[0.65rem] font-medium tracking-widest-xl text-cream/50">PRODUCTS</p>
            <ul className="flex flex-col gap-3">
              {productCategories.slice(0, 6).map((cat) => (
                <li key={cat.name}>
                  <Link
                    to={`/products/${slugify(cat.name)}`}
                    className="text-sm text-cream/70 transition-colors hover:text-cream"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-5 text-[0.65rem] font-medium tracking-widest-xl text-cream/50">COMPANY</p>
            <ul className="flex flex-col gap-3">
              {[
                ['About', '/about'],
                ['Brands', '/brands'],
                ['Blog', '/blog'],
                ['Contact Us', '/contact'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link to={href} className="text-sm text-cream/70 transition-colors hover:text-cream">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-5 text-[0.65rem] font-medium tracking-widest-xl text-cream/50">GET IN TOUCH</p>
            <ul className="flex flex-col gap-3 text-sm text-cream/70">
              <li>M-45, Market, W Block Road,<br />Greater Kailash II, New Delhi 110048</li>
              <li>
                <a href="tel:+911140000000" className="transition-colors hover:text-cream">
                  +91 98100 19022
                </a>
              </li>
              <li>
                <a href="mailto:hello@rajivsanitations.com" className="transition-colors hover:text-cream">
                  hello@rajivsanitations.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream/40 md:flex-row">
          <p>© 2026 Rajiv Sanitations. All Rights Reserved.</p>
          <p>Greater Kailash II, New Delhi</p>
        </div>
      </div>
    </footer>
  )
}
