import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {SessionService} from '../services/session.service';
import {Session} from 'protractor';
import {retry} from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  /**
   * @param sessionService
   */
  constructor(private sessionService: SessionService) {}

  /**
   * @param request
   * @param next
   */
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    /**
     * This.sessionService.tokken is not empty
     */
    if(this.sessionService.tokken != null)
    {
      /**
       * Clone the httpRequest i put the Headers with the tokken.
       */
      let clone = request.clone({setHeaders:{'Authorization':'Bearer ' + this.sessionService.tokken}});
      return next.handle(clone);
    }
    return next.handle(request);
  }
}
