
export interface Destination {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  rating: number;
  pricePerDay: number;
  featured?: boolean;
  tags: string[];
}

export const destinations: Destination[] = [
  {
    id: 'paris',
    name: 'Paris',
    location: 'France',
    description: 'Experience the romance and elegance of the City of Light with iconic landmarks and world-class cuisine.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
    rating: 4.8,
    pricePerDay: 180,
    featured: true,
    tags: ['Culture', 'Food', 'History']
  },
  {
    id: 'santorini',
    name: 'Santorini',
    location: 'Greece',
    description: 'Discover the stunning blue and white architecture overlooking the crystal-clear Aegean Sea.',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80',
    rating: 4.9,
    pricePerDay: 220,
    featured: true,
    tags: ['Beach', 'Romance', 'Scenic']
  },
  {
    id: 'kyoto',
    name: 'Kyoto',
    location: 'Japan',
    description: 'Immerse yourself in traditional Japanese culture with ancient temples, gardens, and tea ceremonies.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    rating: 4.7,
    pricePerDay: 150,
    featured: true,
    tags: ['Culture', 'History', 'Temples']
  },
  {
    id: 'new-york',
    name: 'New York City',
    location: 'United States',
    description: 'Explore the vibrant metropolis that never sleeps, from iconic skyscrapers to diverse neighborhoods.',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    rating: 4.6,
    pricePerDay: 200,
    featured: true,
    tags: ['Urban', 'Food', 'Nightlife']
  },
  {
    id: 'bali',
    name: 'Bali',
    location: 'Indonesia',
    description: 'Relax in this tropical paradise with lush rice terraces, pristine beaches, and spiritual experiences.',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2938&q=80',
    rating: 4.5,
    pricePerDay: 120,
    featured: true,
    tags: ['Beach', 'Nature', 'Relaxation']
  },
  {
    id: 'barcelona',
    name: 'Barcelona',
    location: 'Spain',
    description: 'Discover unique architecture, vibrant street life, and delicious tapas in this Mediterranean gem.',
    image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    rating: 4.7,
    pricePerDay: 150,
    featured: true,
    tags: ['Architecture', 'Food', 'Beach']
  }
];
