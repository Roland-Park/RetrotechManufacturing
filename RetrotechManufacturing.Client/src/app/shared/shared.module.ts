import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ErrorComponent } from './components/error/error.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    CarouselComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CarouselComponent,
    ErrorComponent
  ]
})
export class SharedModule { }
