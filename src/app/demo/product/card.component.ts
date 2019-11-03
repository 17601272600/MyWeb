import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { FormBuilder } from '@angular/forms';

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
    </div>
    <form [formGroup]="myForm" (ngSubmit)="onSubmit(myForm.value)">
    <div>
    <label>Name</label>
    <input type="text" formControlName="name">
  </div>
 
  <div>
    <label>Address</label>
    <input type="text" formControlName="address">
  </div>
 
  <button class="button" type="submit">Purchase</button>
  
</form>
    `

})
export class CardComponent {
  cards;
  myForm;
  
  constructor(private service: ProductService,private form:FormBuilder) { 
    this.cards=service.getItems();
    //表单初始化
    this.myForm=form.group({
      name: '',
      address: ''
    });
  }


  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
 
    this.cards = this.service.clearCart();
    this.myForm.reset();
  }


}
