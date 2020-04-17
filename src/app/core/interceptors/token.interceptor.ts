import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {SessionService} from '../services/connexion/session.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private sessionService: SessionService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.sessionService.tokken != null)
    {
      let clone = request.clone({setHeaders:{'Authorisation':'Bearer' + this.sessionService.tokken}});
      return next.handle(clone);
    }
    return next.handle(request);
  }
}
