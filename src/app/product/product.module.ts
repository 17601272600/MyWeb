import { NgModule } from '@angular/core';
import { TopBarComponent } from './top-bar.component';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-detail.component';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductAlertsComponent } from './product-alerts.component';
import { ShoppingComponent } from './shopping.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({

  imports: [CommonModule, HttpClientModule,ReactiveFormsModule,
      
    RouterModule.forChild([
      { path: '',component: TopBarComponent,children:[
        { path: '', redirectTo:'list' },
        { path: 'cart', component: CardComponent },
        { path: 'list', component: ProductListComponent },
        {path: 'shopping', component: ShoppingComponent},
        {path: ':id', component: ProductDetailsComponent}
       
      ] },
    ])
  ],
  declarations: [TopBarComponent,  ProductListComponent,ProductAlertsComponent,ProductDetailsComponent, CardComponent, ShoppingComponent]
})
export class ProductModule { }
