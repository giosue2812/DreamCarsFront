import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry, tap} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(public toasterService: ToastrService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry(1),
      catchError((error: HttpErrorResponse)=>{
        let errorMessage = '';
        if(error.error instanceof ErrorEvent){
          this.toasterService.error('Unexpected Error try to logout/login',error.error.error,{positionClass:'toast-bottom-center'});
        } else {
          this.toasterService.error(error.error.message,error.error.error,{positionClass:'toast-bottom-right'});
        }
        return throwError(errorMessage);
      })
    );
  }
}
