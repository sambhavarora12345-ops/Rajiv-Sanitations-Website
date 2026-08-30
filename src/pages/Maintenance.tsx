import Logo from '../components/layout/Logo'
import { FacebookIcon, InstagramIcon, LinkedInIcon, PinterestIcon } from '../components/ui/SocialIcons'
import { aboutHeroImage } from '../lib/images'

export default function Maintenance() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-ink px-6 text-center text-cream">
      <img
        src={aboutHeroImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink" />

      <div className="relative z-10 flex flex-col items-center">
        <Logo className="h-28 sm:h-36 md:h-44" />

        <div className="mt-10 h-px w-16 bg-cream/25" />

        <p className="mt-10 text-[0.7rem] font-medium tracking-[0.4em] text-cream/60">
          SOMETHING NEW IS ON ITS WAY
        </p>
        <h1 className="mt-4 max-w-xl font-display text-[32px] font-bold leading-tight md:text-[44px]">
          We're Under Maintenance
        </h1>
        <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-cream/60">
          Our new site is being put together. In the meantime, reach us directly for anything urgent.
        </p>

        <div className="mt-8 flex flex-col items-center gap-2 text-[14px] text-cream/80">
          <a href="tel:+919810019022" className="underline underline-offset-4 hover:text-cream">
            +91 98100 19022
          </a>
          <a href="mailto:hello@rajivsanitations.com" className="underline underline-offset-4 hover:text-cream">
            hello@rajivsanitations.com
          </a>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center gap-4 pb-8">
        <div className="flex items-center gap-4 text-cream/60">
          <a href="#" aria-label="Instagram" className="transition-colors hover:text-cream">
            <InstagramIcon size={16} />
          </a>
          <a href="#" aria-label="Facebook" className="transition-colors hover:text-cream">
            <FacebookIcon size={16} />
          </a>
          <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-cream">
            <LinkedInIcon size={16} />
          </a>
          <a href="#" aria-label="Pinterest" className="transition-colors hover:text-cream">
            <PinterestIcon size={16} />
          </a>
        </div>
        <p className="text-[11px] text-cream/40">© 2026 Rajiv Sanitations. All Rights Reserved.</p>
      </div>
    </div>
  )
}
