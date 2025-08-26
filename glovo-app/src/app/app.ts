import { Component } from '@angular/core';
import { GlovoComponent } from './glovo/glovo';
import { CommonModule } from '@angular/common';
import { CartService } from './services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GlovoComponent, CommonModule],
  template: `
    <div class="app-container">
      <header class="app-header">
        <div class="brand-name">Burger King®</div>
        <div class="cart-badge" *ngIf="(totalItems$ | async)! > 0">
          <i class="fas fa-shopping-cart"></i>
          <span class="badge">{{ totalItems$ | async }}</span>
        </div>
      </header>
      <app-glovo></app-glovo>
    </div>
  `,
  styles: [`
    .app-container {
      max-width: 412px;
      margin: 0 auto;
      background: #f5f5f5;
      min-height: 100vh;
      box-shadow: 0 0 20px rgba(0,0,0,0.08);
      font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
    }
    .app-header {
      background: #fff;
      padding: 24px 20px 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 24px;
      font-weight: bold;
      color: #222;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
      position: sticky;
      top: 0;
      z-index: 100;
    }
    .brand-name {
      font-family: inherit;
      font-size: 24px;
      font-weight: bold;
      color: #222;
    }
    .cart-badge {
      position: relative;
      color: #ffcc02;
      font-size: 20px;
    }
    .badge {
      position: absolute;
      top: -8px;
      right: -8px;
      background: #ff4757;
      color: white;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: 600;
    }
  `]
})
export class AppComponent {
  totalItems$: Observable<number>;

  constructor(private cartService: CartService) {
    this.totalItems$ = this.cartService.totalItems$;
  }
}