import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'top-bar',
   styles:[
     `div{
    width: 100%;
    height: 68px;
    background-color: #1976d2;
    padding: 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
   } `
  ],
  template: `
  <div>
      <a [routerLink]="['../']">
         <h1 style="color: white;margin: 0;">My Store</h1>
      </a>
      <a [routerLink]="['./cart']" class="button fancy-button" 
          style=" background-color: white;color: #1976d2;">
          <i class="material-icons" style="padding-right: 4px;">shopping_cart</i>Checkout</a>
      </div>
      <router-outlet></router-outlet>
  `
})
export class TopBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
