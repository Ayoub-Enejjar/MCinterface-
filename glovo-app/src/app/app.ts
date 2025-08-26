import { Component } from '@angular/core';
import { GlovoComponent } from './glovo/glovo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GlovoComponent, CommonModule],
  template: `
    <div class="app-container">
      <header class="app-header">
        <div class="brand-name">McDonald's®</div>
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
      padding: 24px 0 8px 0;
      text-align: center;
      font-size: 24px;
      font-weight: bold;
      color: #222;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .brand-name {
      font-family: inherit;
      font-size: 24px;
      font-weight: bold;
      color: #222;
    }
  `]
})
export class AppComponent {}
// Glovoo-app/glovo-app/src/app/models/menu-item.ts
export class MenuItem {
  // ...
  hovered: boolean = false;
}