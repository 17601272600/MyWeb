import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContentsComponent } from './contents/contents.component';


const routes: Routes = [
  {path: '',redirectTo:'portal',pathMatch:'full'},   
  {path:'login',component:LoginComponent},//登录界面
  {path:'portal',component:ContentsComponent}//目录页面
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRouteModule { }
