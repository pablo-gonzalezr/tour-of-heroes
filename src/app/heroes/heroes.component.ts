import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  hero: Hero;
  heroes: Hero[] = [];
  poderes: string[] = [];
  confirmar: string;
  submitted = false;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
    this.getPoderes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  getPoderes(): void {
    this.heroService.getPoderes().subscribe((poder) => (this.poderes = poder));
  }

  newHero(name: string, alterEgo: string, power: string): void {
    this.submitted = true;
    name = name.trim();
    alterEgo = alterEgo.trim();
    if (!name || !alterEgo) {
      return;
    }
    this.heroService
      .addHero({ name, alterEgo, power } as Hero)
      .subscribe((hero) => {
        this.heroes.push(hero);
      });
  }

  onSubmit() {
    this.submitted = true;
  }

  delete(hero: Hero): void {
    this.confirmar = `¿Seguro que desea eliminar a ${hero.name}?`;
    if (confirm(this.confirmar)) {
      this.heroes = this.heroes.filter((h) => h !== hero);
      this.heroService.deleteHero(hero).subscribe();
    }
  }
}
