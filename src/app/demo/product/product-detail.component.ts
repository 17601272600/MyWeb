import { ActivatedRoute } from "@angular/router";
import { Component } from "@angular/core";
import { products } from "./procuct";
import { ProductService } from "./product.service";
@Component({
    selector: 'product-detail',
   
    template:`
    
    <h2>Product Details</h2>

    <div *ngIf="product">
      <h3>{{ product.name }}</h3>
      <h4>{{ product.price | currency }}</h4>
      <p>{{ product.description }}</p>
      <button (click)="addToCart(product)">Buy</button>
    </div>
    `
  })
export class ProductDetailsComponent{
    product;
  
    constructor(
      private route: ActivatedRoute,
      private service: ProductService
    ) {
        this.route.paramMap.subscribe(params => {
            this.product = products[+params.get('id')];
          });
    }

    //加入购物车
    addToCart(product) {
        window.alert('Your product has been added to the cart!');
        this.service.addToCart(product);
      }
  
  }