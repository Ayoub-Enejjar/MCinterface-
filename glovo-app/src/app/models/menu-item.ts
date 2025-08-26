export interface MenuItem {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;  // Keep as 'image' to match your existing template
  category: string;
  calories?: number;
  prepTime?: string;
  rating?: number;
  quantity?: number;
  ordered?: string;
  ordersCount?: number;  // Add this for the "10k+ ordered" feature
  hovered?: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}