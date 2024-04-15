import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLoaderComponent } from './components/custom-loader/custom-loader.component';
import { SearchPipe } from './pipes/search.pipe';
import { CapitalizeFirstLetterPipe } from './pipes/capitalize-first-letter.pipe';
import { CapitalizeWordPipe } from './pipes/capitalize-word.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    CustomLoaderComponent,
    SearchPipe,
    CapitalizeFirstLetterPipe,
    CapitalizeWordPipe,
    FooterComponent,
    HeaderComponent,
    ConfirmModalComponent
  ],
  exports: [
    CustomLoaderComponent,
    SearchPipe,
    CapitalizeFirstLetterPipe,
    CapitalizeWordPipe,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class SharedModule { }
