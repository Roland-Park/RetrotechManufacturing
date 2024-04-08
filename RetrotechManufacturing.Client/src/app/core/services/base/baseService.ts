import { HttpErrorResponse } from "@angular/common/http";
import { BehaviorSubject, throwError } from "rxjs";
import { environment } from "src/environments/environment";

export abstract class BaseService{
    protected apiUrlRoot: string = environment.apiUrlRoot;
    protected isLoadingSubject = new BehaviorSubject<boolean>(false);
    isLoading$ = this.isLoadingSubject.asObservable();

    constructor() {
    }

    handleError(error: HttpErrorResponse){
      // this.errorService.handleError(error);
      this.isLoadingSubject.next(false);
      return throwError(() => error);
    }

    getToken(): string{
      return localStorage.getItem("jwt") 
      ? `bearer ${localStorage.getItem("jwt")}` 
      : "";
    }
  }