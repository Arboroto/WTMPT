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

  constructor(){}

  ngOnInit(): void{
  }
}
