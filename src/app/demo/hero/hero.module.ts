import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';
import { RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail.component';
import { MessageComponent } from './message.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,
    RouterModule.forChild([
      { path: '',component:HeroComponent,children:[
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        { path: 'dashboard', component: DashboardComponent },
        { path: 'detail/:id', component: HeroDetailComponent },
        { path: 'heroes', component: HeroesComponent }
      ]}
    ]),
  ],
  exports: [DashboardComponent],
  declarations: [HeroComponent, HeroesComponent,HeroDetailComponent,MessageComponent,DashboardComponent]
})
export class HeroModule { }
