import { Component, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Product } from '../shared/product.iterface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnDestroy {
  @Output() itemAdded = new EventEmitter<any>();
  // ====> додав типіхацію
  productList: Product[] = [
    { name: 'Phone', price: 699 },
    { name: 'Laptop', price: 999 },
  ];

  addToCart(item: Product) {
    this.itemAdded.emit(item);
  }

  ngOnDestroy() {
    console.log('ProductListComponent destroyed');
  }
}
