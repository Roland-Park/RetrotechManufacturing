import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ErrorComponent } from './components/error/error.component';
import { MaterialModule } from '../material/material.module';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    CarouselComponent,
    ErrorComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CarouselComponent,
    ErrorComponent,
    ContactComponent
  ]
})
export class SharedModule { }
