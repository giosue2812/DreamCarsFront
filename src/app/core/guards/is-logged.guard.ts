import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {SessionService} from '../services/session.service';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedGuard implements CanActivate {

  /**
   * @param sessionService
   * @param router
   */
  constructor(
    private sessionService: SessionService,
    private router: Router
  ) {}

  /**
   * @param next
   * @param state
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    /**
     * This.sessionService.isLogged => False
     */
    if(!this.sessionService.isLogged)
    {
      /**
       * Navigation to url Connexion
       */
      this.router.navigateByUrl('/connexion');
    }
    return this.sessionService.isLogged;
  }

}
