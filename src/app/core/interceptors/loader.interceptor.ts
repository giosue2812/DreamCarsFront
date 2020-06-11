import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {finalize} from 'rxjs/operators';
import {NgxSpinnerService} from 'ngx-spinner';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
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
    return next.handle(request).pipe(
      finalize(()=>this.ngxSpinnerService.hide())
    )
  }
}
