import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Observable, map, shareReplay } from 'rxjs';
import { IPrice } from 'src/app/core/entities/prices/price';
import { IVehicle } from 'src/app/core/entities/productGroups/vehicle';
import { ICategory } from 'src/app/core/entities/products/category';
import { CategoryService } from 'src/app/core/services/categories/category.service';
import { PriceService } from 'src/app/core/services/prices/price.service';
import { VehicleService } from 'src/app/core/services/vehicles/vehicle.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit{
  private vehicleIds: number[] = [];
  private categoryIds: number[] = [];
  prices$: Observable<IPrice[]>;
  vehicles$: Observable<IVehicle[]>;
  categories$: Observable<ICategory[]>;
  isLoading$: Observable<boolean>;

  filter: { desiredVehicles: IVehicle[], desiredCategories: ICategory[] };
  nameSearch: string | null;
  
  isHandset$: Observable<boolean> = this.breakpointObserver
  .observe([Breakpoints.XSmall, Breakpoints.Small])
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private priceService: PriceService,
    private vehicleService: VehicleService,
    private categoryService: CategoryService
  ){}

  ngOnInit(): void {
    this.categories$ = this.categoryService.categories$;
    this.vehicles$ = this.vehicleService.vehicles$;
    this.prices$ = this.priceService.prices$;
    this.isLoading$ = 
      this.priceService.isLoading$ &&
      this.vehicleService.isLoading$ &&
      this.categoryService.isLoading$;
      
    this.priceService.loadPrices();
    this.vehicleService.loadVehicles();
    this.categoryService.loadCategories();
  }

  openDrawer(drawer: MatDrawer){
    drawer.open();
  }

  closeDrawer(drawer: MatDrawer){
    drawer.close();
  }

  updateVehicleFilter(vehicleIds: number[]){
    this.vehicleIds = vehicleIds;
    this.updateFilter();
  }

  updateCategoryFilter(categoryIds: number[]){
    this.categoryIds = categoryIds;
    this.updateFilter();
  }

  onSearchChange(shouldClear: boolean = false){
    if(shouldClear) this.nameSearch = null;
    this.updateFilter(); //todo: debounce
  }

  updateFilter(){
    this.priceService.loadPrices(this.vehicleIds, this.categoryIds, this.nameSearch);
  }

  filtersExist(): boolean{
    return this.categoryIds.length > 0 || this.vehicleIds.length > 0 || !!this.nameSearch;
  }
}
