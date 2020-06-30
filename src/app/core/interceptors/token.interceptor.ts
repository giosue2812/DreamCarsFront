import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {SessionService} from '../services/session.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  /**
   * @param sessionService
   */
  constructor(private sessionService: SessionService) {}

  /**
   * @param request HttpRequest<unknown>
   * @param next HttpHandler
   * @return Clone request with the header set with tokken or return the request normal
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
