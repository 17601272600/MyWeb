import { Component } from '@angular/core';
import { products } from './procuct';

@Component({
  selector: 'product-list',
  template: `
  <h2>Products</h2>
   
  <div *ngFor="let product of products; index as id">
  
    <h3>
      <a [title]="product.name + ' details'" [routerLink]="['../', id]">
        {{ product.name }}
      </a>
    </h3>
  </div>`
})
export class ProductListComponent {
  products =products;
  
  share() {
    window.alert('The product has been shared!');
  }


   onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}