import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { HeroesHomeComponent } from './pages/heroes-home/heroes-home.component';
import { HeroGalleryComponent } from './pages/hero-gallery/hero-gallery.component';
import { CreateEditHeroComponent } from './pages/create-edit-hero/create-edit-hero.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HeroesHomeComponent
      },
      {
        path: 'explore',
        component: HeroGalleryComponent
      },
      {
        path: 'form/:id',
        component: CreateEditHeroComponent
      },
      {
        path: 'form',
        component: CreateEditHeroComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
