export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: string;
  image: string;
  sizes: string[];
  featured?: boolean;
  isNew?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Silk Blend Blazer",
    price: 289,
    description: "A sophisticated silk blend blazer featuring a relaxed fit and luxurious drape. Perfect for both professional settings and elevated casual occasions.",
    category: "Outerwear",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop",
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: true,
  },
  {
    id: "2",
    name: "Cashmere Crew Sweater",
    price: 195,
    originalPrice: 245,
    description: "Ultra-soft cashmere sweater with a classic crew neckline. Lightweight yet warm, ideal for layering throughout the seasons.",
    category: "Knitwear",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=800&fit=crop",
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: true,
    isNew: true,
  },
  {
    id: "3",
    name: "High-Rise Tailored Trousers",
    price: 165,
    description: "Impeccably tailored high-rise trousers with a straight leg silhouette. Crafted from premium Italian wool blend for all-day comfort.",
    category: "Bottoms",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop",
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: true,
  },
  {
    id: "4",
    name: "Organic Cotton T-Shirt",
    price: 65,
    description: "Essential crew neck t-shirt made from 100% organic cotton. Features a relaxed fit and exceptional softness that improves with every wash.",
    category: "Tops",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "5",
    name: "Linen Midi Dress",
    price: 225,
    description: "Elegant linen midi dress with a flattering A-line silhouette. Features subtle pleating and hidden pockets for effortless sophistication.",
    category: "Dresses",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop",
    sizes: ["XS", "S", "M", "L", "XL"],
    isNew: true,
  },
  {
    id: "6",
    name: "Wool Overcoat",
    price: 425,
    description: "Classic wool overcoat with a timeless silhouette. Features a notched lapel, double-breasted closure, and luxurious satin lining.",
    category: "Outerwear",
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&h=800&fit=crop",
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: true,
  },
  {
    id: "7",
    name: "Merino Wool Cardigan",
    price: 175,
    description: "Versatile merino wool cardigan with mother-of-pearl buttons. Perfect for layering over shirts or wearing as a standalone piece.",
    category: "Knitwear",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=800&fit=crop",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "8",
    name: "Silk Button-Down Shirt",
    price: 185,
    description: "Luxurious silk button-down shirt with a relaxed fit. Features mother-of-pearl buttons and French seams for a refined finish.",
    category: "Tops",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&h=800&fit=crop",
    sizes: ["XS", "S", "M", "L", "XL"],
    isNew: true,
  },
];

export const categories = ["All", "Tops", "Bottoms", "Dresses", "Knitwear", "Outerwear"];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "All") return products;
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
