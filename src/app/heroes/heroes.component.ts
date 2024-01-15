import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //hero: Hero;

  heroes = HEROES;

  selectedHero?: Hero;

  constructor() { }

  ngOnInit(): void {

    console.log(this.heroes);
  }

  onSelect(hero) {
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }

}
