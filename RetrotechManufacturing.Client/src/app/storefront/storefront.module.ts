import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

import { StorefrontRoutingModule } from './storefront-routing.module';
import { LandingComponent } from './pages/landing/landing.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { PriceListComponent } from './components/prices/price-list/price-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PriceDetailComponent } from './components/prices/price-detail/price-detail.component';

@NgModule({
  declarations: [
    LandingComponent,
    VehiclesComponent,
    CategoriesComponent,
    PriceListComponent,
    PriceDetailComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    StorefrontRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class StorefrontModule { }
