import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  title = 'Angular 4 App';
  heroes: Hero[];
  selectedHero: Hero; // We refer to our Hero class

  constructor(private heroService: HeroService, private router: Router) {}

  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();
    // When we pass Promise in our service, we must pass .then()
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes);
  }


  // getHeroesSlowly(): void {
  //   this.heroService.getHeroesSlowly()
  //     .then(heroes => this.heroes = heroes);
  // }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }



  ngOnInit(): void {
    this.getHeroes();
    // this.getHeroesSlowly();
  }

  onSelect(hero: Hero): void { // We pass like argument hero as Hero
    this.selectedHero = hero; // It'll return the Hero object
  }


  herox: Hero = { // We call a class Hero
    id: 1,
    name: 'Miley Cirus'
  };

  add(name: string): void {
    name = name.trim(); // remove all whitespaces before and after string
    if(!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero)
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }

}
