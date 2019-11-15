import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'product-shopping',
  styles: [
    `.shipping-item{
        width: 100%;
        min-width: 400px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 16px 32px;
        margin-bottom: 8px;
        border-radius: 2px;
        background-color: #EEEEEE;
        max-width: 450px;
    }`],
  template: 
    `   <h3>Shipping Prices</h3>
          <div class="shipping-item" *ngFor="let shipping of shippingCosts | async">
           <span>{{ shipping.type }}</span>
           <span>{{ shipping.price | currency }}</span>
       </div>`

})
export class ShoppingComponent {
  shippingCosts;
  constructor(private service: ProductService) {
    this.shippingCosts = this.service.getShippingPrices();
  }


}
