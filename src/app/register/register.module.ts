import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
const routes: Routes = [
  {path:'',component:RegisterComponent }
];

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,ReactiveFormsModule,NgZorroAntdModule,
    RouterModule.forChild(routes),
  ],
})
export class RegisterModule { }
