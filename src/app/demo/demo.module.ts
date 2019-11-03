import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    
    RouterModule.forChild([
      { path: '', redirectTo:'hero' },
      {path:'product',loadChildren: "./product/product.module#ProductModule"},
      {path:'hero',loadChildren: "./hero/hero.module#HeroModule"},
    ])
  ],
  declarations: []
})
export class DemoModule { }
