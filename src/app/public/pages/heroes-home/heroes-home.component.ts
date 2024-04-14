import { Component } from '@angular/core';
import { Hero } from 'src/app/core/models/hero.interface';
import { HeroService } from 'src/app/core/shared/services/hero.service';

@Component({
  selector: 'app-heroes-home',
  templateUrl: './heroes-home.component.html',
  styleUrls: ['./heroes-home.component.scss']
})
export class HeroesHomeComponent {
  public heroes: Hero[] = []

  constructor(private heroService: HeroService){}

  ngOnInit(): void{
    
    this.heroService.getHeroes().subscribe({
      next: (res)=>{
        this.heroes = res;
      }
    })
  }
}
