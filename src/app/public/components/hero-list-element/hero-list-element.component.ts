import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Hero } from 'src/app/core/models/hero.interface';
import { ConfirmModalComponent } from 'src/app/core/shared/components/confirm-modal/confirm-modal.component';
import { HeroService } from 'src/app/core/shared/services/hero.service';

@Component({
  selector: 'app-hero-list-element',
  templateUrl: './hero-list-element.component.html',
  styleUrls: ['./hero-list-element.component.scss']
})
export class HeroListElementComponent {

  constructor(
    private heroService: HeroService, 
    private dialog: MatDialog){}

  @Input() hero!: Hero;

  openDialog(){
    const dialogRef = this.dialog.open(ConfirmModalComponent);
    dialogRef.afterClosed().subscribe(res=>{
      res ? this.deleteHero() : '';
    })
  }

  deleteHero() {
    this.heroService.deleteHero(this.hero.id!).subscribe({
      next: (res)=>{},
      error: (res)=>{
        console.error("Error al eliminar", res)
      }
    })
  }
}
