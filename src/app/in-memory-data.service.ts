import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {
        id: 11,
        name: 'Dr Nice',
        alterEgo: 'Clint Barton',
        power: 'Super inteligente',
      },
      {
        id: 12,
        name: 'Narco',
        alterEgo: 'Hal Jordan',
        power: 'Super Velocidad',
      },
      {
        id: 13,
        name: 'Bombasto',
        alterEgo: 'Oliver Queen',
        power: 'Explosiones',
      },
      {
        id: 14,
        name: 'Celeritas',
        alterEgo: 'Selina Kyle',
        power: 'Super flexible',
      },
      {
        id: 15,
        name: 'Magneta',
        alterEgo: 'Barbara Gordon',
        power: 'Magnetismo',
      },
      {
        id: 16,
        name: 'RubberMan',
        alterEgo: 'Barry Allen',
        power: 'Hombre de goma',
      },
      { id: 17, name: 'Dynama', alterEgo: 'Janet Van Dyne', power: 'Volar' },
      {
        id: 18,
        name: 'Dr IQ',
        alterEgo: 'Matt Murdock',
        power: 'Super inteligente',
      },
      {
        id: 19,
        name: 'Magma',
        alterEgo: 'Carol Danvers',
        power: 'Super calor',
      },
      {
        id: 20,
        name: 'Tornado',
        alterEgo: 'Billy Batson',
        power: 'Cambiar el clima',
      },
      {
        id: 21,
        name: 'Pepsiman',
        alterEgo: 'Pepsiman',
        power: 'Pepsi Ilimitada',
      },
    ];
    const poderes = [
      'Super inteligente',
      'Super flexible',
      'Super calor',
      'Cambiar el clima',
      'Pepsi ilimitada',
    ];
    return { heroes, poderes };
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
