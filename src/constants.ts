import { Branch, Service, Product } from './types';

export const STORE_NAME = "Eye-Q Optical";
export const MAIN_PHONE = "+91 7980757092";
export const MAIN_WHATSAPP = "+91 9804533853";
export const MAIN_ADDRESS = "64 Metcalf Street, Sabir Residency, Room No. 104, Bowbazar, Kolkata – 700013";

export const BRANCHES: Branch[] = [
  {
    id: 'bowbazar',
    name: 'Main Office – Bowbazar Kolkata',
    address: '64 Metcalf Street, Sabir Residency, Room No. 104, Bowbazar, Kolkata – 700013',
    phone: '+91 7980757092',
    whatsapp: '9804533853',
    location: { lat: 22.5697, lng: 88.3585 },
    timing: '10:00 AM - 7:00 PM (Sunday Closed)',
    image: '/assets/images/eyeq_corporate_hq_office_1779179444700.png'
  },
  {
    id: 'kobordanga',
    name: 'Eye-Q Optical Kobordanga Kolkata',
    address: 'Kobordanga, Kolkata',
    phone: '+91 7980757092',
    whatsapp: '9804533853',
    location: { lat: 22.4578, lng: 88.3129 },
    timing: '11:00 AM - 9:00 PM',
    image: '/assets/images/kobordanga_branch_interior_1779178998161.png'
  },
  {
    id: 'picnic-garden',
    name: 'Eye-Q Optical Picnic Garden Kolkata',
    address: 'Picnic Garden, Kolkata',
    phone: '+91 7980757092',
    whatsapp: '9804533853',
    location: { lat: 22.5292, lng: 88.3934 },
    timing: '11:00 AM - 9:00 PM',
    image: '/assets/images/luxury_optical_showroom_hero_1779176289085.png'
  },
  {
    id: 'uttarpara',
    name: 'Eye-Q Optical Uttarpara',
    address: 'Uttarpara, Hooghly',
    phone: '+91 7980757092',
    whatsapp: '9804533853',
    location: { lat: 22.6644, lng: 88.3475 },
    timing: '10:30 AM - 8:30 PM',
    image: '/assets/images/premium_optical_boutique_view_1779179027784.png'
  },
  {
    id: 'baruipur',
    name: 'Eye-Q Optical Baruipur',
    address: 'Baruipur, South 24 Parganas',
    phone: '+91 7980757092',
    whatsapp: '9804533853',
    location: { lat: 22.3582, lng: 88.4293 },
    timing: '10:30 AM - 8:30 PM',
    image: '/assets/images/modern_optical_display_wall_1779177828358.png'
  },
  {
    id: 'purulia',
    name: 'Purulia Branch',
    address: 'Purulia, West Bengal',
    phone: '+91 7980757092',
    whatsapp: '9804533853',
    location: { lat: 23.3321, lng: 86.3652 },
    timing: '10:00 AM - 8:00 PM',
    image: '/assets/images/luxury_optical_showroom_hero_1779176289085.png'
  }
];

export const SERVICES: Service[] = [
  { id: 'eye-test', title: 'Computerized Eye Testing', description: 'Advanced precision diagnostic testing using modern instruments.', iconName: 'Monitor' },
  { id: 'auto-refract', title: 'Auto Refractometer Testing', description: 'Quick and accurate measurement of your eye error.', iconName: 'Target' },
  { id: 'lensometer', title: 'Lensometer Testing', description: 'Verifying the prescription of existing or new lenses.', iconName: 'Search' },
  { id: 'contact-lens', title: 'Contact Lens Fitting', description: 'Professional fitting for comfortable vision.', iconName: 'Eye' },
  { id: 'premium-frames', title: 'Premium Eyeglasses', description: 'Luxury frames from world-class designer brands.', iconName: 'Glasses' },
  { id: 'sunglasses', title: 'Luxury Sunglasses', description: 'High-end UV protected stylish sunglasses.', iconName: 'Sun' },
];

export const PRODUCTS: Product[] = [
  { 
    id: '1', 
    name: 'Titanium Noir', 
    category: 'Frames', 
    isPremium: true, 
    image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800',
      'https://images.unsplash.com/photo-1508296695146-257a814070b4?q=80&w=800',
      'https://images.unsplash.com/photo-1511732351157-1865efeb9b7b?q=80&w=800',
      'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=800'
    ]
  },
  { 
    id: '2', 
    name: 'Azure Wayfarer', 
    category: 'Sunglasses', 
    isPremium: true, 
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=800',
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800',
      'https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=800',
      'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=800'
    ]
  },
  { 
    id: '3', 
    name: 'Golden Aviator', 
    category: 'Sunglasses', 
    isPremium: true, 
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800',
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=800',
      'https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=800',
      'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=800'
    ]
  },
  { 
    id: '4', 
    name: 'Kid-Safe Flex', 
    category: 'Kids', 
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=800',
      'https://images.unsplash.com/photo-1508296695146-257a814070b4?q=80&w=800',
      'https://images.unsplash.com/photo-1511732351157-1865efeb9b7b?q=80&w=800'
    ]
  },
  { 
    id: '5', 
    name: 'Vintage Havana', 
    category: 'Sunglasses', 
    isPremium: false, 
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=800',
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800',
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=800'
    ]
  },
  { 
    id: '6', 
    name: 'Emerald Horizon', 
    category: 'Sunglasses', 
    isPremium: true, 
    image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=800',
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=800',
      'https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=800'
    ]
  },
  { 
    id: '7', 
    name: 'Computer Shield', 
    category: 'Computer Glasses', 
    isPremium: false, 
    image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1508296695146-257a814070b4?q=80&w=800',
      'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800',
      'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=800'
    ]
  },
  { 
    id: '8', 
    name: 'Classic Tortoise', 
    category: 'Frames', 
    isPremium: true, 
    image: 'https://images.unsplash.com/photo-1511732351157-1865efeb9b7b?q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1511732351157-1865efeb9b7b?q=80&w=800',
      'https://images.unsplash.com/photo-1508296695146-257a814070b4?q=80&w=800',
      'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800'
    ]
  },
];

export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Products', href: '/products' },
  { name: 'Branches', href: '/branches' },
  { name: 'Eye Testing', href: '/eye-testing' },
  { name: 'Contact', href: '/contact' },
];

export const TESTIMONIALS = [
  {
    id: '1',
    name: 'Ananya Sharma',
    role: 'Creative Director',
    content: 'The precision of their eye testing is unmatched. I found the perfect pair of titanium frames that actually complement my style. Highly recommended!',
    avatar: '/assets/images/bengali_woman_glasses_1779362005700.png'
  },
  {
    id: '2',
    name: 'Rajiv Mukherjee',
    role: 'Tech Consultant',
    content: "Excellent service at the Bowbazar branch. The staff is professional and the equipment is state-of-the-art. My blue-light glasses have been a lifesaver.",
    avatar: '/assets/images/bengali_man_glasses_1779362023194.png'
  },
  {
    id: '3',
    name: 'Priyanka Das',
    role: 'University Professor',
    content: 'Eye-Q Optical offers a truly premium experience. From the minimalist showroom to the careful fitting process, everything screams luxury.',
    avatar: '/assets/images/bengali_professor_glasses_1779362039790.png'
  }
];
