import Reveal from '../components/ui/Reveal'
import { blogPosts } from '../data/blog'

export default function Blog() {
  return (
    <>
      <section className="bg-ink pb-16 pt-40 text-center text-cream md:pb-24 md:pt-48">
        <Reveal className="mx-auto max-w-2xl px-6">
          <p className="mb-5 text-[0.7rem] font-medium tracking-[0.5em] text-cream/70">THE JOURNAL</p>
          <h1 className="font-display text-[32px] font-bold leading-tight md:text-[48px]">Stories &amp; Guides</h1>
          <p className="mx-auto mt-6 max-w-lg text-[14px] leading-relaxed text-cream/60">
            What we've picked up fitting out bathrooms and kitchens across Delhi, written down instead of
            just said on the showroom floor.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 0.08}>
              <article className="group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden bg-sand">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  />
                </div>
                <div className="mt-6 flex items-center gap-3 text-[0.65rem] font-medium tracking-widest-xl text-taupe">
                  <span>{post.category.toUpperCase()}</span>
                  <span className="h-1 w-1 rounded-full bg-taupe/60" />
                  <span>{post.date.toUpperCase()}</span>
                </div>
                <h2 className="mt-4 text-[22px] font-bold leading-snug text-ink transition-colors group-hover:text-bronze">
                  {post.title}
                </h2>
                <p className="mt-3 text-[14px] leading-relaxed text-charcoal/65">{post.excerpt}</p>
                <span className="mt-5 inline-block text-[0.72rem] font-medium tracking-widest-xl text-ink underline underline-offset-4">
                  READ MORE
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
