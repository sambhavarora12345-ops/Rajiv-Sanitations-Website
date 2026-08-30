import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'
import Logo from './Logo'
import MegaMenu from './MegaMenu'
import MobileMenu from './MobileMenu'
import { primaryNav } from '../../data/navigation'

const HERO_PAGES = new Set(['/', '/about', '/contact'])

export default function Header() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setProductsOpen(false)
    setMobileOpen(false)
  }, [location.pathname])

  const transparent = HERO_PAGES.has(location.pathname) && !scrolled

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          transparent ? 'bg-transparent py-6' : 'py-3'
        }`}
        onMouseLeave={() => setProductsOpen(false)}
      >
        <div
          className={`relative mx-auto flex max-w-[1600px] items-center justify-between px-6 transition-all duration-500 md:px-10 ${
            transparent ? '' : 'mx-4 rounded-full bg-ink/75 px-6 py-2 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] backdrop-blur-md md:mx-8 md:px-8'
          }`}
        >
          <Link to="/" className="shrink-0">
            <Logo variant="mark" className="h-10 sm:h-11 lg:h-12" />
          </Link>

          <nav className="hidden items-center gap-5 xl:gap-8 lg:flex">
            {primaryNav.map((item) =>
              item.label === 'Products' ? (
                <div key={item.label} className="shrink-0" onMouseEnter={() => setProductsOpen(true)}>
                  <button
                    onClick={() => setProductsOpen((v) => !v)}
                    className="whitespace-nowrap text-[0.72rem] font-medium tracking-widest-xl text-cream/90 transition-colors hover:text-cream xl:text-[0.8rem]"
                  >
                    PRODUCTS
                  </button>
                </div>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.href}
                  className={() =>
                    `shrink-0 whitespace-nowrap text-[0.72rem] font-medium tracking-widest-xl transition-colors text-cream/90 hover:text-cream xl:text-[0.8rem]`
                  }
                >
                  {item.label.toUpperCase()}
                </NavLink>
              ),
            )}
          </nav>

          <button
            className="text-cream lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>

          {productsOpen && <MegaMenu onNavigate={() => setProductsOpen(false)} />}
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
