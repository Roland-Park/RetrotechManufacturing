import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, tap, shareReplay, filter } from 'rxjs';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { environment } from 'src/environments/environment';
import { IPrice } from '../../entities/prices/price';
import { BaseService } from '../base/baseService';
import { IVehicle } from '../../entities/productGroups/vehicle';
import { ICategory } from '../../entities/products/category';

@Injectable({
  providedIn: 'root'
})
export class PriceService  extends BaseService{
  private priceListSubject = new BehaviorSubject<IPrice[]>([]);
  private endpoint: string = environment.priceEndpoint;
  public prices$ = this.priceListSubject.asObservable();
  constructor(
    private http: HttpClient,
    private toast: ToastService
  ) {
    super()
  }
  
  loadPrices(desiredVehicleIds: number[] = [], desiredCategoryIds: number[] = [], nameSearch: string | null = null){
    this.isLoadingSubject.next(true);
    return this.http.get<IPrice[]>(`${this.apiUrlRoot}/${this.endpoint}`, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    })
    .pipe(
      catchError(err => {
        this.endpoint = environment.priceEndpoint;
        this.priceListSubject.next([]);
        this.toast.notifyError("We're having problems getting data. Check your internet connection.");
        return this.handleError(err);
      }),
      tap(prices => {
        this.priceListSubject.next(
          prices.filter(price => {
            if(!desiredCategoryIds.length && !desiredVehicleIds.length) return true;

            const categoryIntersection = price.product.categories.map(c => c.id).filter(c => desiredCategoryIds.includes(c));
            const vehicleIntersection = price.product.productGroup.vehicles.map(x => x.id).filter(x => desiredVehicleIds.includes(x));

            if(desiredCategoryIds.length && !desiredVehicleIds.length) return categoryIntersection.length > 0;
            if(!desiredCategoryIds.length && desiredVehicleIds.length) return vehicleIntersection.length > 0;

            return categoryIntersection.length > 0 && vehicleIntersection.length > 0;
          })
          .filter(x => nameSearch 
            ? x.product.displayName.toLocaleLowerCase().includes(nameSearch?.toLocaleLowerCase())
            : true)
          .sort((a,b) => (a.product.displayName > b.product.displayName) ? 1 : ((b.product.displayName > a.product.displayName) ? -1 : 0))
        );
        this.isLoadingSubject.next(false);
        this.endpoint = environment.priceEndpoint;
      }),
      shareReplay()
    ).subscribe();
  }
}
