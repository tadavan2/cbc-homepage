/**
 * CBC Cultivar Data
 * All cultivars from the CBC Cultivar Explorer with banner images
 */

export interface Cultivar {
  id: string;
  name: string;
  banner: string;
  explorerLink: string; // Deep link to cultivar explorer with hash
}

// All 9 cultivars with their banner images and explorer deep links
export const allCultivars: Cultivar[] = [
  {
    id: 'adelanto',
    name: 'Adelanto',
    banner: '/images/cultivars/adelanto_banner.jpg',
    explorerLink: 'https://cultivars.cbcberry.com#adelanto',
  },
  {
    id: 'alhambra',
    name: 'Alhambra',
    banner: '/images/cultivars/alhambra_banner.jpg',
    explorerLink: 'https://cultivars.cbcberry.com#alhambra',
  },
  {
    id: 'alturas',
    name: 'Alturas',
    banner: '/images/cultivars/alturas_banner.jpg',
    explorerLink: 'https://cultivars.cbcberry.com#alturas',
  },
  {
    id: 'artesia',
    name: 'Artesia',
    banner: '/images/cultivars/artesia_banner.jpg',
    explorerLink: 'https://cultivars.cbcberry.com#artesia',
  },
  {
    id: 'belvedere',
    name: 'Belvedere',
    banner: '/images/cultivars/belvedere_banner.jpg',
    explorerLink: 'https://cultivars.cbcberry.com#belvedere',
  },
  {
    id: 'brisbane',
    name: 'Brisbane',
    banner: '/images/cultivars/brisbane_banner.jpg',
    explorerLink: 'https://cultivars.cbcberry.com#brisbane',
  },
  {
    id: 'carpinteria',
    name: 'Carpinteria',
    banner: '/images/cultivars/carpinteria_banner.jpg',
    explorerLink: 'https://cultivars.cbcberry.com#carpinteria',
  },
  {
    id: 'castaic',
    name: 'Castaic',
    banner: '/images/cultivars/castaic_banner.jpg',
    explorerLink: 'https://cultivars.cbcberry.com#castaic',
  },
  {
    id: 'sweetcarolina',
    name: 'Sweet Carolina',
    banner: '/images/cultivars/sweetcarolina_banner.jpg',
    explorerLink: 'https://cultivars.cbcberry.com#sweetcarolina',
  },
];

/**
 * Get a random selection of cultivars
 * @param count Number of cultivars to select (default 4)
 * @returns Array of randomly selected cultivars
 */
export function getRandomCultivars(count: number = 4): Cultivar[] {
  const shuffled = [...allCultivars].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
