import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'product-card',
  styles:[`
  .cart-item, .shipping-item {
    width: 100%;
    min-width: 400px;
    max-width: 450px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 16px 32px;
    margin-bottom: 8px;
    border-radius: 2px;
    background-color: #EEEEEE;
  }`],
  template:`
  <p>
  <a routerLink="../shopping">Shipping Prices</a>
</p>
    <div class="cart-item" *ngFor="let item of cards">
        <span>{{ item.name }}</span>
        <span>{{ item.price | currency }}</span>
    </div>`
})
export class CardComponent {
  cards;
  constructor(private service: ProductService) { 
    this.cards=service.getItems();
  }


}
