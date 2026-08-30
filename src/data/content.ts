import { collectionImages } from '../lib/images'
import { slugify } from '../lib/slug'

export interface Collection {
  name: string
  slug: string
  image: string
}

const rawCollections = [
  { name: 'Tiles & Surfaces', image: collectionImages.tiles },
  { name: 'Stone', image: collectionImages.stone },
  { name: 'Faucets', image: collectionImages.faucets },
  { name: 'Sanitaryware', image: collectionImages.sanitaryware },
  { name: 'Kitchens', image: collectionImages.kitchens },
  { name: 'Wardrobes', image: collectionImages.wardrobes },
  { name: 'Wellness', image: collectionImages.wellness },
  { name: 'Facade', image: collectionImages.facade },
  { name: 'Accessories', image: collectionImages.accessories },
]

export const collections: Collection[] = rawCollections.map((c) => ({ ...c, slug: slugify(c.name) }))

export interface Stat {
  label: string
  value: number
  suffix: string
}

export const stats: Stat[] = [
  { label: 'Projects Completed', value: 300, suffix: '+' },
  { label: 'Happy Customers', value: 50000, suffix: '+' },
  { label: 'Years of Experience', value: 36, suffix: '+' },
  { label: 'Premium Brands', value: 30, suffix: '+' },
]

export const whyChoosePoints = [
  {
    title: 'Since 1989',
    description: 'We opened our first showroom in 1989 and we still visit sites ourselves, three decades on.',
  },
  {
    title: 'Quality',
    description: 'Every fitting on our floor gets handled and tested before it earns a place there. Not everything does.',
  },
  {
    title: 'Range',
    description: 'Tiles, taps, kitchens and wellness under one roof, so a renovation doesn’t mean five separate shops.',
  },
  {
    title: 'Direct Dealerships',
    description: 'We hold direct dealerships with the brands we carry, not grey-market stock at a markup.',
  },
  {
    title: 'Design Guidance',
    description: 'Our consultants have sat through hundreds of renovations. They’ll flag a bad choice before you’ve paid for it.',
  },
  {
    title: 'After the Sale',
    description: 'Someone from our team still picks up the phone two years after installation, not just during the sale.',
  },
  {
    title: 'Repeat Clients',
    description: 'Architects who worked with us on their first project tend to send us their fifth.',
  },
]

export const setApartPoints = [
  {
    title: 'We Don’t Stock Everything',
    description: 'A smaller range chosen on purpose beats a warehouse of options nobody has time to compare.',
  },
  {
    title: 'Consultants Who’ve Done This Before',
    description: 'Our team has fitted enough homes to know what looks good on a showroom floor and what actually holds up in a bathroom.',
  },
  {
    title: 'International Brands, Local Know-How',
    description: 'We bring in fittings from Germany and Italy, then install them the way plumbing actually runs here.',
  },
  {
    title: 'We Stay Past the Sale',
    description: 'Site visits, contractor calls, the awkward mid-renovation question. We’re still around for all of it.',
  },
  {
    title: 'Three Generations In',
    description: 'Started by one family in 1989, still run by it. That tends to keep standards honest.',
  },
]

export const partners = [
  'Kohler',
  'Grohe',
  'Villeroy & Boch',
  'Duravit',
  'Hansgrohe',
  'Roca',
  'Jaquar',
  'Porcelanosa',
  'Cera',
  'Toto',
  'Hafele',
  'Franke',
]
