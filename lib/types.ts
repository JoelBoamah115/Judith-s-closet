export interface Product {
  id: string;
  name: string;
  slug: string;
  category: 'men' | 'women' | 'accessories';
  subCategory: string;
  price: number; // in GH₵
  originalPrice?: number;
  description: string;
  details: string[];
  fabric?: string;
  care?: string;
  images: string[];
  sizes: string[];
  colors?: { name: string; hex: string }[];
  featured: boolean;
  newArrival: boolean;
  bestseller?: boolean;
}

export interface CartItem {
  id: string; // generated unique id: `${product.id}-${size}-${color}`
  product: Product;
  selectedSize: string;
  selectedColor?: string;
  quantity: number;
}
