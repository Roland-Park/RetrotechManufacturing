import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, tap, shareReplay } from 'rxjs';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { environment } from 'src/environments/environment';
import { IVehicle } from '../../entities/productGroups/vehicle';
import { BaseService } from '../base/baseService';

@Injectable({
  providedIn: 'root'
})
export class VehicleService  extends BaseService{
  private vehicleListSubject = new BehaviorSubject<IVehicle[]>([]);
  vehicles$ = this.vehicleListSubject.asObservable();
  constructor(private http: HttpClient, private toast: ToastService) {
    super()
   }
   loadVehicles(){
    this.isLoadingSubject.next(true);

    return this.http.get<IVehicle[]>(`${this.apiUrlRoot}/${environment.vehicleEndpoint}`, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    })
    .pipe(
      catchError(err => {
        this.toast.notifyError("We're having problems getting data. Check your internet connection.");
        return this.handleError(err);
      }),
      tap(vehicles => {
        this.vehicleListSubject.next(vehicles);
        this.isLoadingSubject.next(false);
      }),
      shareReplay()
    ).subscribe();
  }
}
