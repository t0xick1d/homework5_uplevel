import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  cart = [];

  onItemAdded(item) {
    this.cart.push(item);
    console.log('Cart updated:', this.cart);
  }
}
