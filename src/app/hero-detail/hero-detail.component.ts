import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../models/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  //This object will be injected from the parent component
  //A way of injecting information to other components.
  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
