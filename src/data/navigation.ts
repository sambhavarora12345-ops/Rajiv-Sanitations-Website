export interface ProductCategory {
  name: string
  subcategories: string[]
}

export const productCategories: ProductCategory[] = [
  {
    name: 'Tiles & Surfaces',
    subcategories: [
      'Indian Tiles',
      'Imported Tiles',
      'Designer Tiles',
      'Flexible Tiles',
      'Quartz',
      'Mosaics',
      'Concrete Panels',
      'Other Surfaces',
    ],
  },
  {
    name: 'Faucets',
    subcategories: [
      'Bathroom Faucets',
      'Kitchen Faucets',
      'Designer Faucets',
      'Shower Systems',
      'Diverters',
      'Other Faucets',
    ],
  },
  {
    name: 'Sanitaryware',
    subcategories: ['Toilets', 'Wash Basins', 'Designer Wash Basins', 'Vanities', 'Mirrors', 'Other Sanitaryware'],
  },
  {
    name: 'Kitchens',
    subcategories: ['German Kitchens', 'Indian Kitchens'],
  },
  {
    name: 'Wardrobes',
    subcategories: ['Designer Wardrobes', 'Custom Wardrobes'],
  },
  {
    name: 'Wellness',
    subcategories: ['Bathtubs', 'Saunas', 'Jacuzzi Tubs', 'Steam Rooms', 'Wellness Products'],
  },
  {
    name: 'Facade',
    subcategories: ['Facade Materials', 'Exterior Surfaces', 'Architectural Products'],
  },
  {
    name: 'Accessories',
    subcategories: ['Mirrors', 'Towel Heaters', 'Towel Rods', 'Bathroom Accessories', 'Other Accessories'],
  },
]

export const primaryNav = [
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/about' },
  { label: 'Brands', href: '/brands' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
]
