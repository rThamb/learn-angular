import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../models/hero';

//objects used for extracting information from the url.
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService }  from '../hero.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  //This object will be injected from the parent component
  //A way of injecting information to other components.
  @Input() hero: Hero;

  constructor(
  private route: ActivatedRoute, //holds information about route instance
  private heroService: HeroService,
  private location: Location // is an Angular service for interacting with the browser
) {}

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.heroService.getHero(id)
    .subscribe(hero => this.hero = hero);
  }

  goBack(): void {

    //location to interact with browser specific pages
    this.location.back();
  }

}
