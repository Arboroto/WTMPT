import { Component } from '@angular/core';
import { Subscriber } from 'rxjs';
import { Hero } from 'src/app/core/models/hero.interface';
import { HeroService } from 'src/app/core/shared/services/hero.service';

@Component({
  selector: 'app-heroes-home',
  templateUrl: './heroes-home.component.html',
  styleUrls: ['./heroes-home.component.scss']
})
export class HeroesHomeComponent {
  public heroes: Hero[] = []
  heroModified!: Hero;
  newHero!: Hero;
  heroesSubscription: any;
  value: any;

  constructor(private heroService: HeroService){
    this.heroesSubscription = this.heroService.heroes$.subscribe({
      next: (heroes) => {
        this.heroes = heroes;
      },
      error: (error) => {
      }
    });
  }

  ngOnInit(): void{
    
    

    this.heroModified  = {
      id: 1,
      name: "Superman Mod",
      real_name: "Clark Kent",
      gender: "Masculino",
      race: "Kryptoniano",
      birth_date: "05/08/1998",
      power: "Super fuerza",
      imgUrl: "https://images.unsplash.com/photo-1558679908-541bcf1249ff?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Superman, Clark Kent en su identidad secreta, posee habilidades sobrehumanas como fuerza increíble, velocidad, vuelo, invulnerabilidad y visión de rayos X, utiliza estos poderes para combatir el mal y proteger a los inocentes. Su debilidad es la kryptonita, un mineral de su planeta natal que puede debilitarlo y ser letal. Trabaja como periodista en el Daily Planet de Metrópolis."
    },

    this.heroService.updateHero(this.heroModified).subscribe({
      next: (res)=>{
        this.heroes = res;
      },
      error: (res)=>{
        console.error("Error al updatear", res)
      }
    })

    this.newHero  = {
      name: "nUEVO HÉROE MOLON",
      real_name: "Clark Kent",
      gender: "Masculino",
      race: "Kryptoniano",
      birth_date: "05/08/1998",
      power: "Super fuerza",
      imgUrl: "https://images.unsplash.com/photo-1558679908-541bcf1249ff?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Superman, Clark Kent en su identidad secreta, posee habilidades sobrehumanas como fuerza increíble, velocidad, vuelo, invulnerabilidad y visión de rayos X, utiliza estos poderes para combatir el mal y proteger a los inocentes. Su debilidad es la kryptonita, un mineral de su planeta natal que puede debilitarlo y ser letal. Trabaja como periodista en el Daily Planet de Metrópolis."
    },


    this.heroService.addHero(this.newHero).subscribe({
      next: (res)=>{
        this.heroes = res;
      },
      error: (res)=>{
        console.error("Error al CREAR", res)
      }
    })
  }
}
