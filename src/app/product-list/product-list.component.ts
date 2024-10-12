import { Component, EventEmitter, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  @Output() itemAdded = new EventEmitter<any>();

  productList = [
    { name: 'Phone', price: 699 },
    { name: 'Laptop', price: 999 },
  ];

  addToCart(item) {
    this.itemAdded.emit(item);
  }

  ngOnDestroy() {
    console.log('ProductListComponent destroyed');
  }
}
