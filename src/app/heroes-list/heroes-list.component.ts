import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
})
export class HeroesListComponent implements OnInit {
  heroes: Hero[] = [];
  cols: any[];
  loading: boolean;

  confirmar: string;

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

  delete(hero: Hero): void {
    this.confirmar = `¿Seguro que desea eliminar a ${hero.name}?`;
    if (confirm(this.confirmar)) {
      this.heroes = this.heroes.filter((h) => h !== hero);
      this.heroService.deleteHero(hero).subscribe();
    }
  }
}
