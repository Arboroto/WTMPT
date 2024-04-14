import { Component, Input } from '@angular/core';
import { Hero } from 'src/app/core/models/hero.interface';

@Component({
  selector: 'app-hero-list-element',
  templateUrl: './hero-list-element.component.html',
  styleUrls: ['./hero-list-element.component.scss']
})
export class HeroListElementComponent {
  @Input() hero!: Hero;
}
