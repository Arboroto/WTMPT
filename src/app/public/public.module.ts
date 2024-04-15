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
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "../core/shared/shared.module";
import { CreateEditHeroComponent } from './pages/create-edit-hero/create-edit-hero.component';
import { HeroGalleryComponent } from './pages/hero-gallery/hero-gallery.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
    declarations: [
        PublicComponent,
        HeroesHomeComponent,
        HeroCardComponent,
        HeroListElementComponent,
        CreateEditHeroComponent,
        HeroGalleryComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        CommonModule,
        PublicRoutingModule,
        MatCardModule,
        MatIconModule,
        MatButtonToggleModule,
        MatButtonModule,
        MatInputModule,
        FormsModule,
        SharedModule,
        ReactiveFormsModule
    ]
})
export class PublicModule { }
