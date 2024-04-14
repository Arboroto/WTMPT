import { Component, Input } from '@angular/core';
import { Hero } from 'src/app/core/models/hero.interface';
import { HeroService } from 'src/app/core/shared/services/hero.service';

@Component({
  selector: 'app-hero-list-element',
  templateUrl: './hero-list-element.component.html',
  styleUrls: ['./hero-list-element.component.scss']
})
export class HeroListElementComponent {

  constructor(private heroService: HeroService){

  }

  @Input() hero!: Hero;

  deleteHero() {
    this.heroService.deleteHero(this.hero.id!).subscribe({
      next: (res)=>{},
      error: (res)=>{
        console.error("Error al eliminar", res)
      }, complete() {
        // hay que refrescar la lista de héroes allí donde esté almacenado
      },
    })
  }
}
