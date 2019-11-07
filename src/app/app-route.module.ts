import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContentsComponent } from './contents/contents.component';

// 引入你需要的图标，比如你需要 fill 主题的 AccountBook Alert 和 outline 主题的 Alert，推荐 ✔️
import {} from '@ant-design/icons-angular/icons';

const routes: Routes = [
  {path: '',redirectTo:'protal',pathMatch:'full'},   
  {path:'login',component:LoginComponent},//登录界面
  {path:'portal',component:ContentsComponent},//目录页面
  {path:'demo',loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouteModule { }
