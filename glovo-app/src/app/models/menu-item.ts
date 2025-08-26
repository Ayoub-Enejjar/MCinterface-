// src/app/models/menu-item.ts
export interface MenuItem {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  calories?: number;
  prepTime?: string;
  rating?: number;
  quantity?: number;
  ordered?: string;   // <-- added to fix the template error
  hovered?: boolean;  // optional if you still use hovered elsewhere
}
