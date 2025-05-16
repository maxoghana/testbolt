export interface FurnitureItem {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
  dimensions?: string;
  materials?: string;
  available?: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface EventType {
  id: string;
  name: string;
  image: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  event: string;
  image: string;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface QuoteRequest {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  eventType: string;
  location: string;
  guestCount: number;
  furnitureNeeded: string[];
  additionalInfo: string;
}