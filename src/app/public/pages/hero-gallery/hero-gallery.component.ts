import { Component } from '@angular/core';
import { Hero } from 'src/app/core/models/hero.interface';
import { HeroService } from 'src/app/core/shared/services/hero.service';

@Component({
  selector: 'app-hero-gallery',
  templateUrl: './hero-gallery.component.html',
  styleUrls: ['./hero-gallery.component.scss']
})
export class HeroGalleryComponent {
  public heroes: Hero[] = []
  heroModified!: Hero;
  newHero!: Hero;
  heroesSubscription: any;
  value: any;

  constructor(private heroService: HeroService){
    this.heroesSubscription = this.heroService.heroes$.subscribe({
      next: (heroes) => {
        this.heroes = heroes;
      }
    });
  }

  ngOnInit(): void{
    this.heroService.getHeroes().subscribe({
      next: (heroes) => {
        this.heroes = heroes;
      }
    });
  }

  ngOnDestroy() {
    if (this.heroesSubscription) {
      this.heroesSubscription.unsubscribe();
    }
  }
}
