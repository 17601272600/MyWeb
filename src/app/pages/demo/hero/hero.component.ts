import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  template:`<h1>{{title}}</h1>
  <nav>
    <a routerLink="./dashboard">DashboardT</a>
    <a routerLink="./heroes">Heroes</a>
  </nav>
  <router-outlet></router-outlet>
<hero-message></hero-message>

`
})
export class HeroComponent {
  title = 'Tour of Heroes';
  constructor() { }
 


}
