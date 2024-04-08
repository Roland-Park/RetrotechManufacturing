import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, tap, shareReplay } from 'rxjs';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { environment } from 'src/environments/environment';
import { ICategory } from '../../entities/products/category';
import { BaseService } from '../base/baseService';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService{
  private categoryListSubject = new BehaviorSubject<ICategory[]>([]);
  public categories$ = this.categoryListSubject.asObservable();

  constructor(private http: HttpClient, private toast: ToastService) {
    super()
   }

   loadCategories(){
    this.isLoadingSubject.next(true);

    this.http.get<ICategory[]>(`${this.apiUrlRoot}/${environment.categoryEndpoint}`, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).pipe(
      catchError(err => {
        this.toast.notifyError("We're having problems getting data. Check your internet connection.");
        return this.handleError(err);
      }),
      tap(categories => {
        this.categoryListSubject.next(categories);
        this.isLoadingSubject.next(false);
      }),
      shareReplay()
    )
    .subscribe();
   }
}
