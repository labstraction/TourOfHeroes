import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {


  testString = "Pippo"

  superHero?: Hero;

  constructor() { }

  changeTestString(): void{
    this.testString = "pluto";
  }

}
