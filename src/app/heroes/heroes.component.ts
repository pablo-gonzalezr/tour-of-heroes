import { Component, OnInit, ViewChild } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  modelo: Hero = new Hero();
  heroes: Hero[] = [];
  poderes: string[] = [];
  confirmar: string;
  submitted = false;
  @ViewChild('heroForm') form: any;
  display: boolean = false;

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
    console.log(this.modelo);
    if (this.form.valid) {
      this.heroService.addHero(this.modelo as Hero).subscribe((hero) => {
        this.heroes.push(hero);
      });
    }
  }

  delete(hero: Hero): void {
    this.confirmar = `¿Seguro que desea eliminar a ${hero.name}?`;
    if (confirm(this.confirmar)) {
      this.heroes = this.heroes.filter((h) => h !== hero);
      this.heroService.deleteHero(hero).subscribe();
    }
  }

  showDialog() {
    this.form.resetForm();
    this.display = true;
  }
}
