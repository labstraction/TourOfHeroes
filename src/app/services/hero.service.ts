import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../model/hero';
import { HEROES } from '../model/mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  constructor(private messageS: MessageService) { }

  getHeroes(): Observable<Hero[]>{
    const heroesObservable = of(HEROES);
    this.messageS.add("Viva abbiamo caricato gli eori!")
    return heroesObservable;
  }

  getHero(heroId: string): Observable<Hero | undefined> {
    const hero = HEROES.find(hero => hero.id === parseInt(heroId));
    return of(hero);
  }

}
