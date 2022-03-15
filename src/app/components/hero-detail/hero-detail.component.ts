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
  isNewHero = false;
  submitted = false;
  powers = ["really smart", "super flexible", "super hot", "wether change"]

  constructor(private route: ActivatedRoute, private heroS: HeroService, private location: Location) { }

  ngOnInit(): void {
    const heroId = this.route.snapshot.paramMap.get('id');
    if (heroId) {
      this.heroS.getHero(heroId).subscribe(data => {
        if (data) {
          this.isNewHero = false;
          this.submitted = true;
          this.hero = data;
        }
      })
    } else {
      this.isNewHero = true;

      this.hero =  {id:"", name:"", power:"", alterEgo:""}
    }
  }

  goBack(): void{
    this.location.back()
  }

  onSubmit(){
    this.submitted = true;
  }

  save(): void{
    if (this.hero) {
      if (this.isNewHero) {
        this.heroS.addHero(this.hero).subscribe(data =>{
          console.log(data);
          this.goBack();
        })
      } else{
        this.heroS.updateHero(this.hero).subscribe(data =>{
          console.log(data);
          this.goBack();
        })
      }

    }
  }

}
