import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { HeroesHomeComponent } from './pages/heroes-home/heroes-home.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    PublicComponent,
    HeroesHomeComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MatCardModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PublicModule { }
