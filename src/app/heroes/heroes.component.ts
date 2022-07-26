import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  //modelo!: Hero; //<- No funciona
  model = new Hero('', '', ''); // <- Funciona
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

  newHero(): void {
    this.submitted = true;
    // name = this.model.name.trim();
    // alterEgo = this.model.alterEgo.trim();
    // power = this.model.power;
    // if (!name || !alterEgo) {
    //   return;
    // }
    this.heroService.addHero(this.model as Hero).subscribe((hero) => {
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
