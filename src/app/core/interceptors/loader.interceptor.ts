import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {finalize, tap} from 'rxjs/operators';
import {NgxSpinnerService} from 'ngx-spinner';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  count = 0;
  /**
   * @param ngxSpinnerService NgxSpinnerService
   */
  constructor(public ngxSpinnerService: NgxSpinnerService) {}

  /**
   * @param request HttpRequest
   * @param next HttpHandler
   * @return Observable
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.ngxSpinnerService.show();
    this.count++;
    return next.handle(request)
      .pipe(tap(
        event => console.log(event),
        error => console.log(error)
      ),finalize(()=> {
        this.count --;
        if(this.count == 0) this.ngxSpinnerService.hide()
      }))

  }
}
