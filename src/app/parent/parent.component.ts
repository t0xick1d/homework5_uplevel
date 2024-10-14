import { Component } from '@angular/core';
import { Product } from '../shared/product.iterface';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  // ====> додав типіхацію
  cart: Product[] = [];
  onItemAdded(item: Product) {
    // =====> змінив метод push на поверхневе копібвання
    this.cart = [...this.cart, item];
    console.log('Cart updated:', this.cart);
  }
}
