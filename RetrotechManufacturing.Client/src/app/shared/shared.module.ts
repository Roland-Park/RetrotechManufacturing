import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ErrorComponent } from './components/error/error.component';
import { MaterialModule } from '../material/material.module';
import { ContactComponent } from './components/contact/contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductTagsComponent } from './components/product-tags/product-tags.component';

@NgModule({
  declarations: [
    CarouselComponent,
    ErrorComponent,
    ContactComponent,
    ProductTagsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FontAwesomeModule
  ],
  exports: [
    CarouselComponent,
    ErrorComponent,
    ContactComponent,
    ProductTagsComponent
  ]
})
export class SharedModule { }
