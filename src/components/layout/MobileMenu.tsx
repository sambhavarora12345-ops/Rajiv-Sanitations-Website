import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { primaryNav, productCategories } from '../../data/navigation'
import { FacebookIcon, InstagramIcon, LinkedInIcon, PinterestIcon } from '../ui/SocialIcons'
import { slugify } from '../../lib/slug'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[70] flex flex-col overflow-y-auto bg-ink px-8 py-24 text-cream lg:hidden"
        >
          <nav className="flex flex-col gap-1">
            {primaryNav.map((item) =>
              item.label === 'Products' ? (
                <div key={item.label} className="border-b border-cream/10">
                  <button
                    className="flex w-full items-center justify-between py-4 font-display text-3xl font-bold"
                    onClick={() => setExpanded(expanded === 'Products' ? null : 'Products')}
                  >
                    Products
                    <ChevronDown
                      size={20}
                      className={`transition-transform ${expanded === 'Products' ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <AnimatePresence>
                    {expanded === 'Products' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-4 pb-6 pl-2">
                          {productCategories.map((cat) => (
                            <Link
                              key={cat.name}
                              to={`/products/${slugify(cat.name)}`}
                              onClick={onClose}
                              className="text-sm tracking-wide text-cream/75"
                            >
                              {cat.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={onClose}
                  className="border-b border-cream/10 py-4 font-display text-3xl font-bold"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="mt-auto flex items-center gap-5 pt-10 text-cream/70">
            <InstagramIcon size={20} />
            <FacebookIcon size={20} />
            <LinkedInIcon size={20} />
            <PinterestIcon size={20} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
