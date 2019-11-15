import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    
    RouterModule.forChild([
      { path: '', redirectTo:'hero' },
      {path:'product',loadChildren: () => import('./product/product.module').then(m => m.ProductModule)},
      {path:'hero',loadChildren: () => import('./hero/hero.module').then(m => m.HeroModule)},
    ])
  ],
  declarations: []
})
export class DemoModule { }
