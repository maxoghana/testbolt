export const SITE_CONFIG = {
  name: "Elegant Location",
  description: "Location de meubles haut de gamme pour vos événements",
  url: "https://elegantlocation.fr",
  logoText: "Elegant Location",
};

export const NAVIGATION = [
  { name: "Accueil", href: "/" },
  { name: "Meubles", href: "/furniture" },
  { name: "Collections", href: "/collections" },
  { name: "Inspiration", href: "/inspiration" },
  { name: "À Propos", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const FURNITURE_CATEGORIES = [
  { id: "seating", name: "Assises", description: "Chaises, canapés et mobilier lounge" },
  { id: "tables", name: "Tables", description: "Tables de réception, cocktail et présentation" },
  { id: "decor", name: "Décoration", description: "Éléments décoratifs et accessoires" },
  { id: "lighting", name: "Éclairage", description: "Éclairage d'ambiance et décoratif" },
  { id: "bars", name: "Bars", description: "Bars et stations de service" },
  { id: "outdoor", name: "Extérieur", description: "Mobilier résistant aux intempéries" },
  { id: "staging", name: "Scène", description: "Plateformes et revêtements de sol" },
];

export const EVENT_TYPES = [
  { id: "wedding", name: "Mariages", image: "https://images.pexels.com/photos/1359136/pexels-photo-1359136.jpeg" },
  { id: "corporate", name: "Événements Corporate", image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" },
  { id: "gala", name: "Galas & Soirées", image: "https://images.pexels.com/photos/5638749/pexels-photo-5638749.jpeg" },
  { id: "social", name: "Réceptions", image: "https://images.pexels.com/photos/3171815/pexels-photo-3171815.jpeg" },
  { id: "exhibition", name: "Salons & Expositions", image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg" },
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote: "Le mobilier loué a totalement transformé notre lieu de mariage. La qualité et l'élégance ont dépassé nos attentes.",
    author: "Sophie & Thomas",
    event: "Mariage",
    image: "https://images.pexels.com/photos/3585798/pexels-photo-3585798.jpeg",
  },
  {
    id: 2,
    quote: "Notre gala d'entreprise était magnifique grâce à la collection de meubles modernes que nous avons sélectionnée.",
    author: "Marc Dupont",
    event: "Gala Annuel d'Entreprise",
    image: "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg",
  },
  {
    id: 3,
    quote: "Les espaces lounge créés étaient parfaits pour notre levée de fonds. Les invités ont été impressionnés par l'aménagement sophistiqué.",
    author: "Claire Martin",
    event: "Levée de Fonds",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg",
  },
];

export const FEATURED_FURNITURE = [
  {
    id: "velvet-sofa",
    name: "Canapé Velours",
    category: "seating",
    price: "180",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    description: "Canapé en velours luxueux parfait pour créer des espaces lounge élégants.",
  },
  {
    id: "ghost-chair",
    name: "Chaise Ghost",
    category: "seating",
    price: "25",
    image: "https://images.pexels.com/photos/116910/pexels-photo-116910.jpeg",
    description: "Chaises transparentes modernes qui ajoutent de la sophistication à tout événement.",
  },
  {
    id: "marble-table",
    name: "Table Cocktail Marbre",
    category: "tables",
    price: "95",
    image: "https://images.pexels.com/photos/1813504/pexels-photo-1813504.jpeg",
    description: "Tables cocktail élégantes avec plateau en marbre.",
  },
  {
    id: "edison-lights",
    name: "Guirlande Edison",
    category: "lighting",
    price: "45",
    image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg",
    description: "Guirlandes lumineuses style vintage créant une atmosphère chaleureuse.",
  },
  {
    id: "gold-bar",
    name: "Bar Doré",
    category: "bars",
    price: "250",
    image: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg",
    description: "Bar finition dorée parfait pour les événements haut de gamme.",
  },
  {
    id: "wicker-lounge",
    name: "Salon Rotin",
    category: "outdoor",
    price: "320",
    image: "https://images.pexels.com/photos/1268482/pexels-photo-1268482.jpeg",
    description: "Ensemble salon d'extérieur confortable et élégant.",
  },
];

export const COLLECTIONS = [
  {
    id: "modern-luxe",
    name: "Modern Luxe",
    description: "Pièces contemporaines aux finitions luxueuses",
    image: "https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg",
  },
  {
    id: "bohemian",
    name: "Bohème Chic",
    description: "Mobilier éclectique et artistique aux textures riches",
    image: "https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg",
  },
  {
    id: "classic-elegance",
    name: "Élégance Classique",
    description: "Pièces intemporelles au style raffiné",
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
  },
  {
    id: "industrial",
    name: "Style Industriel",
    description: "Matériaux bruts et designs audacieux",
    image: "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg",
  },
];