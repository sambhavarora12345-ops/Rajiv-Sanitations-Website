import Logo from '../components/layout/Logo'

export default function Maintenance() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-ink px-6 text-center text-cream">
      <Logo className="h-16" />
      <p className="mt-10 text-[0.7rem] font-medium tracking-[0.4em] text-cream/60">UNDER MAINTENANCE</p>
      <h1 className="mt-4 max-w-lg font-display text-[28px] font-bold leading-tight md:text-[36px]">
        We're putting the finishing touches on our new site.
      </h1>
      <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-cream/60">
        Back shortly. For anything urgent, reach us at{' '}
        <a href="tel:+919810019022" className="underline underline-offset-4 hover:text-cream">
          +91 98100 19022
        </a>
        .
      </p>
    </div>
  )
}
