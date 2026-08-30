import { useState } from 'react'
import Reveal from '../components/ui/Reveal'
import { FacebookIcon, InstagramIcon, LinkedInIcon, PinterestIcon } from '../components/ui/SocialIcons'

const projectTypes = [
  'Residential Bathroom',
  'Full Home Interior',
  'Kitchen',
  'Commercial / Hospitality',
  'Facade / Architectural',
  'Other',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <section className="relative flex h-[56svh] min-h-[380px] items-end overflow-hidden bg-ink">
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/40" />
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-14 md:px-10 md:pb-20">
          <p className="mb-5 text-[0.7rem] font-medium tracking-[0.5em] text-cream/70">GET IN TOUCH</p>
          <h1 className="max-w-2xl font-display text-[32px] font-bold leading-[1.1] text-cream md:text-[48px]">
            Contact Us
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1600px] grid-cols-1 gap-16 px-6 py-20 md:grid-cols-2 md:gap-20 md:px-10 md:py-28">
        <Reveal>
          <p className="mb-4 text-[0.7rem] font-medium tracking-widest-xl text-taupe">SEND AN INQUIRY</p>
          <h2 className="mb-8 text-[22px] font-bold text-ink">
            Tell Us About Your Project
          </h2>

          {submitted ? (
            <div className="border border-line bg-sand px-8 py-10">
              <p className="text-[22px] font-bold text-ink">Thank you.</p>
              <p className="mt-2 text-[14px] text-charcoal/70">
                Your inquiry has been noted. Our design team will reach out shortly.
              </p>
            </div>
          ) : (
            <form
              className="flex flex-col gap-6"
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Field label="Name" name="name" required />
                <Field label="Phone Number" name="phone" type="tel" required />
              </div>
              <Field label="Email" name="email" type="email" required />
              <Field label="Address" name="address" />

              <label className="block">
                <span className="mb-2 block text-[0.68rem] font-medium tracking-widest-xl text-taupe">
                  PROJECT TYPE
                </span>
                <select
                  name="projectType"
                  required
                  defaultValue=""
                  className="w-full border-b border-ink/25 bg-transparent py-3 text-sm text-ink outline-none transition-colors focus:border-ink"
                >
                  <option value="" disabled>
                    Select project type
                  </option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-[0.68rem] font-medium tracking-widest-xl text-taupe">
                  MESSAGE / INQUIRY
                </span>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full resize-none border-b border-ink/25 bg-transparent py-3 text-sm text-ink outline-none transition-colors focus:border-ink"
                />
              </label>

              <button
                type="submit"
                className="mt-4 w-fit bg-ink px-10 py-4 text-[0.72rem] font-medium tracking-widest-xl text-cream transition-colors hover:bg-bronze"
              >
                SUBMIT INQUIRY
              </button>
            </form>
          )}
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-8">
          <div className="aspect-[4/3] w-full overflow-hidden border border-line bg-sand">
            <iframe
              title="Rajiv Sanitations location"
              className="h-full w-full grayscale"
              loading="lazy"
              src="https://www.google.com/maps?q=M-45+Market+W+Block+Road+Greater+Kailash+II+New+Delhi+110048&output=embed"
            />
          </div>

          <div className="border-t border-line pt-8">
            <p className="mb-4 text-[0.68rem] font-medium tracking-widest-xl text-taupe">VISIT OUR SHOWROOM</p>
            <p className="text-sm leading-relaxed text-charcoal/80">
              M-45, Market, W Block Road,
              <br />
              Greater Kailash II, New Delhi 110048
            </p>
          </div>

          <div className="border-t border-line pt-8">
            <p className="mb-4 text-[0.68rem] font-medium tracking-widest-xl text-taupe">REACH US</p>
            <p className="text-sm text-charcoal/80">
              <a href="tel:+919810019022" className="transition-colors hover:text-bronze">
                +91 98100 19022
              </a>
            </p>
            <p className="mt-1 text-sm text-charcoal/80">
              <a href="mailto:hello@rajivsanitations.com" className="transition-colors hover:text-bronze">
                hello@rajivsanitations.com
              </a>
            </p>
          </div>

          <div className="border-t border-line pt-8">
            <p className="mb-4 text-[0.68rem] font-medium tracking-widest-xl text-taupe">FOLLOW US</p>
            <div className="flex items-center gap-4 text-ink/70">
              <a href="#" aria-label="Instagram" className="transition-colors hover:text-ink">
                <InstagramIcon />
              </a>
              <a href="#" aria-label="Facebook" className="transition-colors hover:text-ink">
                <FacebookIcon />
              </a>
              <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-ink">
                <LinkedInIcon />
              </a>
              <a href="#" aria-label="Pinterest" className="transition-colors hover:text-ink">
                <PinterestIcon />
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[0.68rem] font-medium tracking-widest-xl text-taupe">
        {label.toUpperCase()}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full border-b border-ink/25 bg-transparent py-3 text-sm text-ink outline-none transition-colors focus:border-ink"
      />
    </label>
  )
}
