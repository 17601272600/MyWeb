import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', redirectTo: 'apps', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {path:'register',loadChildren:()=> import('./register/register.module').then(m => m.RegisterModule)},
  {path:'apps',loadChildren:()=> import('./page/page.module').then(m => m.PageModule)}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
