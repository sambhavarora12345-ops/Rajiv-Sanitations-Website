// Curated placeholder photography (Unsplash). Swap any of these for your own
// photography later — every image in the site is sourced from this file.
export function unsplash(id: string, width = 1600, quality = 80) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=${quality}`
}

export const heroImages = [
  unsplash('1620626011761-996317b8d101', 2000), // marble bathroom
  unsplash('1600607687939-ce8a6c25118c', 2000), // freestanding tub
  unsplash('1618221195710-dd6b41faaea6', 2000), // designer bedroom
  unsplash('1631889993959-41b4e9c6e3c5', 2000), // luxury kitchen
]

export const collectionImages = {
  tiles: unsplash('1615873968403-89e068629265', 1200),
  stone: unsplash('1552321554-5fefe8c9ef14', 1200),
  faucets: unsplash('1616486338812-3dadae4b4ace', 1200),
  sanitaryware: unsplash('1600585154340-be6161a56a0c', 1200),
  kitchens: unsplash('1631889993959-41b4e9c6e3c5', 1200),
  wardrobes: unsplash('1615529182904-14819c35db37', 1200),
  wellness: unsplash('1584622650111-993a426fbf0a', 1200),
  facade: unsplash('1487958449943-2429e8be8625', 1200),
  accessories: unsplash('1600210491892-03d54c0aaf87', 1200),
}

export const productShowcaseImages = [
  unsplash('1600607687920-4e2a09cf159d', 1200),
  unsplash('1556909212-d5b604d0c90d', 1200),
  unsplash('1600489000022-c2086d79f9d4', 1200),
  unsplash('1600566753086-00f18fb6b3ea', 1200),
  unsplash('1618221195710-dd6b41faaea6', 1200),
  unsplash('1556911220-e15b29be8c8f', 1200),
  unsplash('1600607688969-a5bfcd646154', 1200),
  unsplash('1600607688066-890987f18a86', 1200),
]

export const whyChooseBg = unsplash('1600210492486-724fe5c67fb0', 2000)
export const missionImage = unsplash('1493809842364-78817add7ffb', 2000)
export const aboutHeroImage = unsplash('1600585154526-990dced4db0d', 2000)
export const luxuryBathroomsImage = unsplash('1600607687644-c7171b42498f', 1600)
export const exceptionalSpacesImage = unsplash('1600121848594-d8644e57abab', 1600)

export const founderImages = [
  unsplash('1607990281513-2c110a25bd8c', 1000),
  unsplash('1519085360753-af0119f7cbe7', 1000),
]

export const blogImages = [
  unsplash('1615874959474-d609969a20ed', 1200),
  unsplash('1615529328331-f8917597711f', 1200),
  unsplash('1616594039964-ae9021a400a0', 1200),
  unsplash('1600585152220-90363fe7e115', 1200),
  unsplash('1600210492493-0946911123ea', 1200),
  unsplash('1560185127-6ed189bf02f4', 1200),
]

export const megaMenuImages: Record<string, string> = {
  'Tiles & Surfaces': unsplash('1615873968403-89e068629265', 1200),
  Faucets: unsplash('1616486338812-3dadae4b4ace', 1200),
  Sanitaryware: unsplash('1600585154340-be6161a56a0c', 1200),
  Kitchens: unsplash('1631889993959-41b4e9c6e3c5', 1200),
  Wardrobes: unsplash('1615529182904-14819c35db37', 1200),
  Wellness: unsplash('1584622650111-993a426fbf0a', 1200),
  Facade: unsplash('1487958449943-2429e8be8625', 1200),
  Accessories: unsplash('1600210491892-03d54c0aaf87', 1200),
}
