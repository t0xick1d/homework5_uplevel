import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../shared/product.iterface';

@Component({
  selector: 'app-cart',
  template: `
    <h2>Your Cart</h2>
    <div *ngIf="cartItems.length > 0; else emptyCart">
      <ul>
        <li *ngFor="let item of cartItems">
          {{ item.name }} - {{ item.price }} $
        </li>
      </ul>
    </div>
    <ng-template #emptyCart>
      <p>The cart is empty.</p>
    </ng-template>
  `,
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, OnChanges {
  @Input() cartItems: Product[] = [];

  ngOnInit() {
    console.log('CartComponent initialized');
    // Логіка для ініціалізації, якщо потрібно.
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      console.log('Cart items updated:', this.cartItems);
    }
  }
}
