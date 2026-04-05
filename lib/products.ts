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
    description:
      "A sophisticated silk blend blazer featuring a relaxed fit and luxurious drape. Perfect for both professional settings and elevated casual occasions.",
    category: "Outerwear",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop",
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: true,
  },
  {
    id: "2",
    name: "Cashmere Crew Sweater",
    price: 195,
    originalPrice: 245,
    description:
      "Ultra-soft cashmere sweater with a classic crew neckline. Lightweight yet warm, ideal for layering throughout the seasons.",
    category: "Knitwear",
    image:
      "https://images.unsplash.com/photo-1759229874914-c1ffdb3ebd0c?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=600&h=800&fit=crop",
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: true,
    isNew: true,
  },
  {
    id: "3",
    name: "High-Rise Tailored Trousers",
    price: 165,
    description:
      "Impeccably tailored high-rise trousers with a straight leg silhouette. Crafted from premium Italian wool blend for all-day comfort.",
    category: "Bottoms",
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop",
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: true,
  },
  {
    id: "4",
    name: "Organic Cotton T-Shirt",
    price: 65,
    description:
      "Essential crew neck t-shirt made from 100% organic cotton. Features a relaxed fit and exceptional softness that improves with every wash.",
    category: "Tops",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "5",
    name: "Linen Midi Dress",
    price: 225,
    description:
      "Elegant linen midi dress with a flattering A-line silhouette. Features subtle pleating and hidden pockets for effortless sophistication.",
    category: "Dresses",
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop",
    sizes: ["XS", "S", "M", "L", "XL"],
    isNew: true,
  },
  {
    id: "6",
    name: "Wool Overcoat",
    price: 425,
    description:
      "Classic wool overcoat with a timeless silhouette. Features a notched lapel, double-breasted closure, and luxurious satin lining.",
    category: "Outerwear",
    image:
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&h=800&fit=crop",
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: true,
  },
  {
    id: "7",
    name: "Merino Wool Cardigan",
    price: 175,
    description:
      "Versatile merino wool cardigan with mother-of-pearl buttons. Perfect for layering over shirts or wearing as a standalone piece.",
    category: "Knitwear",
    image:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=800&fit=crop",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "8",
    name: "Silk Button-Down Shirt",
    price: 185,
    description:
      "Luxurious silk button-down shirt with a relaxed fit. Features mother-of-pearl buttons and French seams for a refined finish.",
    category: "Tops",
    image:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&h=800&fit=crop",
    sizes: ["XS", "S", "M", "L", "XL"],
    isNew: true,
  },
  {
    id: "9",
    name: "Classic Beige Trench Coat",
    price: 350,
    description:
      "A timeless trench coat designed with a double-breasted front and belted waist. Made from water-resistant cotton twill.",
    category: "Outerwear",
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=600&h=800&fit=crop",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "10",
    name: "Pleated Midi Skirt",
    price: 145,
    description:
      "Elegant and versatile pleated midi skirt. The lightweight fabric ensures graceful movement with every step.",
    category: "Bottoms",
    image:
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&h=800&fit=crop",
    sizes: ["XS", "S", "M", "L", "XL"],
    isNew: true,
  },
  {
    id: "11",
    name: "Chunky Knit Wool Sweater",
    price: 210,
    description:
      "Stay warm in this oversized chunky knit sweater made from 100% thick wool, perfect for chilly winter days.",
    category: "Knitwear",
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&h=800&fit=crop",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "12",
    name: "Double-Breasted Wool Vest",
    price: 185,
    description:
      "A versatile tailored wool vest. Can be worn seamlessly as a sleek standalone top or layered over your favorite blouses.",
    category: "Outerwear",
    image:
      "https://images.unsplash.com/photo-1594938328870-9623159c8c99?w=600&h=800&fit=crop",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "13",
    name: "Relaxed Fit Denim Jacket",
    price: 155,
    description:
      "Your go-to casual layer. Crafted from organic cotton denim with classic styling and slight vintage fading.",
    category: "Outerwear",
    image:
      "https://images.unsplash.com/photo-1559551409-dadc959f76b8?w=600&h=800&fit=crop",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "14",
    name: "Cotton Poplin Blouse",
    price: 120,
    description:
      "A crisp cotton poplin blouse featuring a stylish mandarin collar and voluminous sleeves for a touch of drama.",
    category: "Tops",
    image:
      "https://images.unsplash.com/photo-1544441893-675973e31985?w=600&h=800&fit=crop",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "15",
    name: "Wide-Leg Linen Pants",
    price: 135,
    description:
      "Breezy and comfortable wide-leg pants crafted from pure linen. Ideal for warm weather styling.",
    category: "Bottoms",
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=800&fit=crop",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "16",
    name: "Wrap Maxi Dress",
    price: 245,
    description:
      "A flattering wrap maxi dress with a deep V-neckline and a flowing skirt, suitable for special occasions.",
    category: "Dresses",
    image:
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&h=800&fit=crop",
    sizes: ["XS", "S", "M", "L", "XL"],
    isNew: true,
  },
  {
    id: "17",
    name: "Turtleneck Ribbed Sweater",
    price: 160,
    description:
      "A sleek, form-fitting ribbed sweater with a cozy turtleneck. The excellent layering base for cold days.",
    category: "Knitwear",
    image:
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&h=800&fit=crop",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "18",
    name: "Satin Camisole",
    price: 85,
    description:
      "Silky satin camisole with a delicate lace trim along the V-neck. Beautiful under a blazer or on its own.",
    category: "Tops",
    image:
      "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=600&h=800&fit=crop",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "19",
    name: "Vegan Leather Moto Jacket",
    price: 220,
    description:
      "Edgy vegan leather moto jacket featuring asymmetrical zip closure, metallic hardware, and a cropped fit.",
    category: "Outerwear",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "20",
    name: "Straight Leg Jeans",
    price: 140,
    originalPrice: 180,
    description:
      "Classic straight-leg jeans with a timeless high-rise fit. Designed in a versatile mid-blue wash.",
    category: "Bottoms",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&h=800&fit=crop",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "21",
    name: "Leather Crossbody Bag",
    price: 295,
    description:
      "A minimalist leather crossbody bag with subtle gold hardware and enough space for your daily essentials.",
    category: "Accessories",
    image:
      "https://plus.unsplash.com/premium_photo-1723826751056-6523b0b7c47c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sizes: ["OS"],
    featured: true,
  },
  {
    id: "22",
    name: "Classic Silk Scarf",
    price: 95,
    description:
      "Luxurious square silk scarf featuring a timeless geometric print. Tie it around your neck or your favorite tote.",
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1573231971438-ed0790ba3cbb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sizes: ["OS"],
  },
  {
    id: "23",
    name: "Oversized Acetate Sunglasses",
    price: 185,
    description:
      "Chic oversized sunglasses crafted from high-quality acetate, offering full UV protection.",
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=800&fit=crop",
    sizes: ["OS"],
    isNew: true,
  },
  {
    id: "24",
    name: "Soft Cotton Baseball Cap",
    price: 45,
    description:
      "A casual, unstructured cotton baseball cap with an adjustable back strap and a subtle embroidered logo.",
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=800&fit=crop",
    sizes: ["OS"],
  },
  {
    id: "25",
    name: "Leather Ankle Boots",
    price: 275,
    description:
      "Sleek leather ankle boots with a comfortable block heel and a modern pointed toe. Handcrafted perfectly.",
    category: "Shoes",
    image:
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=600&h=800&fit=crop",
    sizes: ["6", "7", "8", "9", "10"],
    featured: true,
  },
  {
    id: "26",
    name: "Minimalist Leather Sneakers",
    price: 165,
    description:
      "Clean, white leather sneakers that pair perfectly with everything from jeans to tailored trousers.",
    category: "Shoes",
    image:
      "https://images.unsplash.com/photo-1636262900147-fb56689b61c5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=600&h=800&fit=crop",
    sizes: ["6", "7", "8", "9", "10"],
  },
  {
    id: "27",
    name: "Woven Leather Belt",
    price: 65,
    description:
      "A beautifully braided genuine leather belt, perfect for adding texture and waist definition to any outfit.",
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop",
    sizes: ["S", "M", "L"],
  },
  {
    id: "28",
    name: "Suede Loafers",
    price: 195,
    originalPrice: 240,
    description:
      "Classic slip-on loafers crafted from soft suede, featuring a traditionally refined silhouette and cushioned insoles.",
    category: "Shoes",
    image:
      "https://images.unsplash.com/photo-1676121270762-47c8d3a7b9d5?q=80&w=1273&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=600&h=800&fit=crop",
    sizes: ["6", "7", "8", "9", "10"],
  },
  {
    id: "29",
    name: "Chunky Gold Hoops",
    price: 110,
    description:
      "Timeless chunky hoop earrings finished in 18k gold plating. Lightweight enough for daily wear.",
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=800&fit=crop",
    sizes: ["OS"],
    isNew: true,
  },
  {
    id: "30",
    name: "Cashmere Beanie",
    price: 85,
    description:
      "Stay incredibly cozy with this ultra-soft ribbed cashmere beanie. A luxurious necessity for colder climates.",
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=600&h=800&fit=crop",
    sizes: ["OS"],
  },
];

export const categories = ["All", "Tops", "Bottoms", "Dresses", "Knitwear", "Outerwear", "Accessories", "Shoes"];

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
