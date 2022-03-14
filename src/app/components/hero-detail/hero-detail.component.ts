import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/app/model/hero';
import { HeroService } from 'src/app/services/hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  hero?: Hero;

  constructor(private route: ActivatedRoute, private heroS: HeroService, private location: Location) { }

  ngOnInit(): void {
    const heroId = this.route.snapshot.paramMap.get('id');
    if (heroId) {
      this.heroS.getHero(heroId).subscribe(data => {
        if (data) {
          this.hero = data;
        }
      })
    }
  }

  goBack(): void{
    this.location.back()
  }

  save(): void{
    if (this.hero) {
      this.heroS.updateHero(this.hero).subscribe(data =>{
        console.log(data);
        this.goBack();
      })
    }
  }

}
