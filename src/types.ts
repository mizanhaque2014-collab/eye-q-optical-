export interface Branch {
  id: string;
  name: string;
  address: string;
  phone: string;
  whatsapp: string;
  location: {
    lat: number;
    lng: number;
  };
  timing: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'Frames' | 'Sunglasses' | 'Contact Lenses' | 'Computer Glasses' | 'Kids' | 'Specialty';
  price?: string;
  image: string;
  isPremium?: boolean;
  gallery?: string[];
}
