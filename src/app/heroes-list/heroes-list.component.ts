import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css'],
})
export class HeroesListComponent implements OnInit {
  heroes: Hero[] = [];
  cols: any[];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();

    this.cols = [
      { field: 'name', header: 'Nombre' },
      { field: 'alterEgo', header: 'Alter Ego' },
      { field: 'power', header: 'Poder' },
    ];
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
