import { blogImages } from '../lib/images'

export interface BlogPost {
  slug: string
  title: string
  category: string
  date: string
  excerpt: string
  image: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'large-format-tiles-guide',
    title: 'The Case for Large-Format Tiles in Modern Homes',
    category: 'Tiles & Surfaces',
    date: 'August 12, 2026',
    excerpt: 'Bigger slabs mean fewer grout lines and a floor that reads as one continuous surface. Here is when it works and when it doesn’t.',
    image: blogImages[0],
  },
  {
    slug: 'choosing-freestanding-bathtub',
    title: 'How to Choose the Right Freestanding Bathtub',
    category: 'Wellness',
    date: 'August 2, 2026',
    excerpt: 'Acrylic, stone or cast iron, and where it should actually sit in the room. A few things worth checking before you order one.',
    image: blogImages[1],
  },
  {
    slug: 'german-kitchen-design-principles',
    title: 'Design Principles Behind a German Kitchen',
    category: 'Kitchens',
    date: 'July 24, 2026',
    excerpt: 'Soft-close everything, no visible hinges, and hardware built to outlast the cabinets. What you’re actually paying for.',
    image: blogImages[2],
  },
  {
    slug: 'natural-stone-vs-quartz',
    title: 'Natural Stone vs. Quartz: An Honest Comparison',
    category: 'Stone',
    date: 'July 15, 2026',
    excerpt: 'One is quarried, one is engineered, and the price gap isn’t always where you’d expect. A straight comparison.',
    image: blogImages[3],
  },
  {
    slug: 'sensor-faucets-worth-it',
    title: 'Are Sensor Faucets Worth It in Indian Homes?',
    category: 'Faucets',
    date: 'July 3, 2026',
    excerpt: 'They cost more upfront and the batteries do need changing. Whether that trade-off is worth it for a home bathroom.',
    image: blogImages[4],
  },
  {
    slug: 'designing-walk-in-wardrobe',
    title: 'Designing a Walk-In Wardrobe That Works',
    category: 'Wardrobes',
    date: 'June 20, 2026',
    excerpt: 'Most walk-ins fail on lighting, not storage. A few layout mistakes we see on repeat, and how to avoid them.',
    image: blogImages[5],
  },
]
