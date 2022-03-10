import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero';
import { HEROES } from 'src/app/model/mock-heroes';
import { HeroService } from 'src/app/services/hero.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes?: Hero[];

  selectedHero?: Hero;

  constructor(private heroS: HeroService, private messageS: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageS.add("l'utente ha selezionato l'eroe: " + this.selectedHero.name);
  }

  getHeroes(): void{
    this.heroS.getHeroes().subscribe(data => this.heroes = data);
  }

}
