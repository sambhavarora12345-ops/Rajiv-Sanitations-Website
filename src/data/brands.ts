export interface Brand {
  name: string
  category: string
  // Drop a logo file in /public/brands and set the path here, e.g. '/brands/kohler.svg'
  logo?: string
}

export const brands: Brand[] = [
  { name: 'Kohler', category: 'Sanitaryware' },
  { name: 'Grohe', category: 'Faucets' },
  { name: 'Villeroy & Boch', category: 'Tiles & Sanitaryware' },
  { name: 'Duravit', category: 'Sanitaryware' },
  { name: 'Hansgrohe', category: 'Faucets' },
  { name: 'Roca', category: 'Sanitaryware' },
  { name: 'Jaquar', category: 'Faucets' },
  { name: 'Porcelanosa', category: 'Tiles & Surfaces' },
  { name: 'Cera', category: 'Sanitaryware' },
  { name: 'Toto', category: 'Sanitaryware' },
  { name: 'Hafele', category: 'Kitchens & Wardrobes' },
  { name: 'Franke', category: 'Kitchens' },
  { name: 'Geberit', category: 'Plumbing Systems' },
  { name: 'Kajaria', category: 'Tiles & Surfaces' },
  { name: 'Blum', category: 'Kitchens & Wardrobes' },
  { name: 'Miele', category: 'Kitchens' },
  { name: 'Antonio Lupi', category: 'Wellness' },
  { name: 'Rak Ceramics', category: 'Tiles & Sanitaryware' },
]
