import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  selectedHero: Hero;

  /*
  Will create a private class member called heroService, that is only accessible to the class itself. 
  When angular begins to create the instance of the HeroesComponent the dependency injection modules will
  also, inject the value.
  */


  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void{
      this.selectedHero = hero;
  }

  getHeroes(): void {

    /*this call to the service will be synchronous.  
        Make a call to the service and sub to it, so you can react once the service returns data.
    */
    //pub sub (HeroService = pub, HeroComponent = sub)
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
