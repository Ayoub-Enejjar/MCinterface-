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
      title: "Cheeseburger™", 
      description: "Juicy cheeseburger with fries and drink", 
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop",
      price: 59,
      category: 'burger',
      calories: 540,
      prepTime: '15',
      ordersCount: 10000
    },
    { 
      id: 'big-mac',
      title: "Whopper™", 
      description: "Flame-grilled beef burger with fries and drink", 
      image: "https://tse1.mm.bing.net/th/id/OIP.8XS0CaZfYjQsihnjQwnxLgHaE8?w=924&h=616&rs=1&pid=ImgDetMain&o=7&rm=3",
      price: 89,
      category: 'burger',
      calories: 520,
      prepTime: '12',
      ordersCount: 15000
    },
    { 
      id: 'mcchicken',
      title: "Chicken Sandwiches™ ", 
      description: "Crispy chicken sandwich with lettuce and mayo", 
      image: "https://tse2.mm.bing.net/th/id/OIP.DscAewwgWWspyrICC4vRBgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      price: 64,
      category: 'chicken',
      calories: 480,
      prepTime: '10',
      ordersCount: 8000
    },
    { 
      id: 'mcnuggets',
      title: "Onion Rings™", 
      description: "Crispy onion rings with dipping sauce", 
      image: "https://tse3.mm.bing.net/th/id/OIP.59eyotQS2QX5JZ7QfZi9wgHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
      price: 30,
      category: 'chicken',
      calories: 830,
      prepTime: '8',
      ordersCount: 12000
    },
    {
      id: 'mcnuggets',
      title: "Fries™", 
      description: "Crispy fries with ketchup", 
      image: "https://tse2.mm.bing.net/th/id/OIP.GqUvr8wmgKYa7LL8YpnGMAHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
      price: 15,
      category: 'fries',
      calories: 300,
      prepTime: '5',
    },
    {
      id: 'mcflurry',
      title: "Soft Drink™", 
      description: "Refreshing soft drink pick of coke, fanta or sprite", 
      image: "https://tse2.mm.bing.net/th/id/OIP.eWw0kGyREfAvQaMZKYomGwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
      price: 10,
      category: 'drink',
      calories: 150,
      prepTime: '2',
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

