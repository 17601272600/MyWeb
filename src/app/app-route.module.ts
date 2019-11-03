import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContentsComponent } from './contents/contents.component';


const routes: Routes = [
  {path: '',redirectTo:'demo',pathMatch:'full'},   
  {path:'login',component:LoginComponent},//登录界面
  {path:'portal',component:ContentsComponent},//目录页面
  {path:'demo',loadChildren: "./demo/demo.module#DemoModule"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouteModule { }
