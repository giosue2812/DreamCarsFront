import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, finalize, retry, tap} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  /**
   * @param toasterService ToastrService
   */
  constructor(public toasterService: ToastrService) {
  }

  /**
   * @param request HttpRequest<any>
   * @param next HttpHandler
   * @return throwError if HttpRequest return an HttpErrorResponse
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
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
