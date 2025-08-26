import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';
import { MenuItem } from '../models/menu-item';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-glovo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './glovo.html',
  styleUrls: ['./glovo.css']
})
export class GlovoComponent {
  // Modal properties
  isVisible = false;
  currentProduct: MenuItem | null = null;
  quantity = 1;

  // Cart observables
  totalItems$: Observable<number>;

  products: MenuItem[] = [
    { 
      id: 'big-tasty',
      title: "Best of™ Big Tasty™", 
      description: "Big Tasty sandwich with signature sauce", 
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop",
      price: 79,
      category: 'burger',
      calories: 540,
      prepTime: '15',
      ordersCount: 10000
    },
    { 
      id: 'big-mac',
      title: "Big Mac™ Menu", 
      description: "Iconic Big Mac with fries and drink", 
      image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=300&h=200&fit=crop",
      price: 68,
      category: 'burger',
      calories: 520,
      prepTime: '12',
      ordersCount: 15000
    },
    { 
      id: 'mcchicken',
      title: "McChicken™ Menu", 
      description: "Crispy chicken sandwich with fries and drink", 
      image: "https://th.bing.com/th/id/R.49beeaaf319ceeb223895d59551111f6?rik=TcIfHkUR0IFBeg&pid=ImgRaw&r=0",
      price: 64,
      category: 'chicken',
      calories: 480,
      prepTime: '10',
      ordersCount: 8000
    },
    { 
      id: 'mcnuggets',
      title: "20 Chicken McNuggets™", 
      description: "Crispy golden chicken nuggets with sauce", 
      image: "https://tse1.mm.bing.net/th/id/OIP.1V8DXDfYTsVZNLptRpvtzgHaF5?rs=1&pid=ImgDetMain&o=7&rm=3",
      price: 58,
      category: 'chicken',
      calories: 830,
      prepTime: '8',
      ordersCount: 12000
    }
  ];

  constructor(private cartService: CartService) {
    this.totalItems$ = this.cartService.totalItems$;
  }

  openModal(product: MenuItem): void {
    this.currentProduct = product;
    this.quantity = 1;
    this.isVisible = true;
  }

  close(): void {
    this.isVisible = false;
    this.currentProduct = null;
    this.quantity = 1;
  }

  increaseQuantity(): void {
    this.quantity++;
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart(): void {
    if (this.currentProduct) {
      this.cartService.addToCart(this.currentProduct, this.quantity);
      this.close();
    }
  }

  quickAdd(product: MenuItem): void {
    this.cartService.addToCart(product, 1);
  }

  formatPrice(price: number): string {
    return `${price} MAD`;
  }

  formatOrders(count: number | undefined): string {
    if (!count) return '0';
    if (count >= 10000) return '10k';
    if (count >= 1000) return `${Math.floor(count / 1000)}k`;
    return count.toString();
  }
}

