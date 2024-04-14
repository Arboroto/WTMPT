import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { HeroesHomeComponent } from './pages/heroes-home/heroes-home.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { HeroListElementComponent } from './components/hero-list-element/hero-list-element.component';

import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@NgModule({
  declarations: [
    PublicComponent,
    HeroesHomeComponent,
    HeroCardComponent,
    HeroListElementComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonToggleModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PublicModule { }
