export const SITE_CONFIG = {
  name: "ElegantRentals",
  description: "Premium furniture rentals for all your event needs",
  url: "https://elegantrentals.com",
  logoText: "ElegantRentals",
};

export const NAVIGATION = [
  { name: "Home", href: "/" },
  { name: "Furniture", href: "/furniture" },
  { name: "Collections", href: "/collections" },
  { name: "Inspiration", href: "/inspiration" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const FURNITURE_CATEGORIES = [
  { id: "seating", name: "Seating", description: "Chairs, sofas, and lounge furniture" },
  { id: "tables", name: "Tables", description: "Dining, cocktail, and display tables" },
  { id: "decor", name: "Decor", description: "Decorative elements and accessories" },
  { id: "lighting", name: "Lighting", description: "Ambient and decorative lighting" },
  { id: "bars", name: "Bars & Stations", description: "Bar setups and service stations" },
  { id: "outdoor", name: "Outdoor", description: "Weather-resistant furniture for outdoor events" },
  { id: "staging", name: "Staging & Flooring", description: "Event platforms and floor coverings" },
];

export const EVENT_TYPES = [
  { id: "wedding", name: "Weddings", image: "https://images.pexels.com/photos/1359136/pexels-photo-1359136.jpeg" },
  { id: "corporate", name: "Corporate Events", image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" },
  { id: "gala", name: "Galas & Fundraisers", image: "https://images.pexels.com/photos/5638749/pexels-photo-5638749.jpeg" },
  { id: "social", name: "Social Gatherings", image: "https://images.pexels.com/photos/3171815/pexels-photo-3171815.jpeg" },
  { id: "exhibition", name: "Exhibitions & Trade Shows", image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg" },
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote: "The furniture pieces we rented absolutely transformed our wedding venue. The quality and elegance exceeded our expectations.",
    author: "Sophie & Thomas",
    event: "Wedding",
    image: "https://images.pexels.com/photos/3585798/pexels-photo-3585798.jpeg",
  },
  {
    id: 2,
    quote: "Our corporate gala looked stunning thanks to the modern furniture collection we selected. The service was impeccable from start to finish.",
    author: "Mark Reynolds",
    event: "Annual Corporate Gala",
    image: "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg",
  },
  {
    id: 3,
    quote: "The custom lounge areas created the perfect ambiance for our charity fundraiser. Guests were impressed with the sophisticated setup.",
    author: "Claire Davidson",
    event: "Charity Fundraiser",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg",
  },
];

export const FEATURED_FURNITURE = [
  {
    id: "velvet-sofa",
    name: "Velvet Lounge Sofa",
    category: "seating",
    price: "180",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    description: "Luxurious velvet sofa perfect for creating elegant lounge areas.",
  },
  {
    id: "ghost-chair",
    name: "Ghost Chair",
    category: "seating",
    price: "25",
    image: "https://images.pexels.com/photos/116910/pexels-photo-116910.jpeg",
    description: "Modern transparent chairs that add sophistication to any event.",
  },
  {
    id: "marble-table",
    name: "Marble Cocktail Table",
    category: "tables",
    price: "95",
    image: "https://images.pexels.com/photos/1813504/pexels-photo-1813504.jpeg",
    description: "Elegant marble-top cocktail tables for standing receptions.",
  },
  {
    id: "edison-lights",
    name: "Edison Bulb String Lights",
    category: "lighting",
    price: "45",
    image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg",
    description: "Vintage-inspired string lights that create a warm, inviting atmosphere.",
  },
  {
    id: "gold-bar",
    name: "Gold Finish Bar",
    category: "bars",
    price: "250",
    image: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg",
    description: "Stunning gold finish bar perfect for upscale events and cocktail hours.",
  },
  {
    id: "wicker-lounge",
    name: "Wicker Lounge Set",
    category: "outdoor",
    price: "320",
    image: "https://images.pexels.com/photos/1268482/pexels-photo-1268482.jpeg",
    description: "Comfortable and stylish outdoor lounge furniture set for garden events.",
  },
];

export const COLLECTIONS = [
  {
    id: "modern-luxe",
    name: "Modern Luxe",
    description: "Contemporary pieces with luxurious finishes",
    image: "https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg",
  },
  {
    id: "bohemian",
    name: "Bohemian Chic",
    description: "Eclectic and artistic furniture with rich textures",
    image: "https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg",
  },
  {
    id: "classic-elegance",
    name: "Classic Elegance",
    description: "Timeless pieces that never go out of style",
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
  },
  {
    id: "industrial",
    name: "Industrial Edge",
    description: "Raw materials and bold designs for urban events",
    image: "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg",
  },
];