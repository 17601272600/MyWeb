import { Component } from '@angular/core';
import { HEROES, Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: '<hero-heroes>',
  template: `
  <h2>My Heroes</h2>
<ul class="heroes">
  <li *ngFor="let hero of heroes">
    <a routerLink="../detail/{{hero.id}}">
      <span class="badge">{{hero.id}}</span> {{hero.name}}
    </a>
  </li>
</ul>
  `
})
export class HeroesComponent {
  selectedHero: Hero;
 
  heroes: Hero[];
 
  constructor(private heroService: HeroService) { 
    this.getHeroes();
  }
 
 
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}
