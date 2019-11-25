import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { PageComponent } from './page.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { HeaderComponent } from './header/header.component';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { MenuComponent } from './menu/menu.component';
const routes: Routes = [
   {path:'',component:PageComponent,children:[
     {path:'',component:IndexComponent}
   ]
  
  
  }
];
@NgModule({
  declarations: [IndexComponent, PageComponent, HeaderComponent, MenuComponent],
  imports: [
    CommonModule,NzLayoutModule,NzInputModule,NzToolTipModule,NzDropDownModule,NzIconModule,
    RouterModule.forChild(routes)]

})
export class PageModule { }
