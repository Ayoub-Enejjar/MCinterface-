import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuItem, CartItem } from '../models/menu-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>([]);
  public cartItems$ = this.cartItems.asObservable();

  private totalItems = new BehaviorSubject<number>(0);
  public totalItems$ = this.totalItems.asObservable();

  private totalPrice = new BehaviorSubject<number>(0);
  public totalPrice$ = this.totalPrice.asObservable();

  addToCart(item: MenuItem, quantity: number = 1): void {
    const currentItems = this.cartItems.value;
    const existingItem = currentItems.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      currentItems.push({ ...item, quantity });
    }

    this.cartItems.next([...currentItems]);
    this.updateTotals();
  }

  updateQuantity(itemId: string, quantity: number): void {
    if (quantity <= 0) {
      this.removeFromCart(itemId);
      return;
    }

    const currentItems = this.cartItems.value;
    const item = currentItems.find(cartItem => cartItem.id === itemId);
    if (item) {
      item.quantity = quantity;
      this.cartItems.next([...currentItems]);
      this.updateTotals();
    }
  }

  removeFromCart(itemId: string): void {
    const currentItems = this.cartItems.value.filter(item => item.id !== itemId);
    this.cartItems.next(currentItems);
    this.updateTotals();
  }

  private updateTotals(): void {
    const items = this.cartItems.value;
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    this.totalItems.next(totalItems);
    this.totalPrice.next(totalPrice);
  }
}