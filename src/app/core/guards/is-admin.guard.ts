import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {SessionService} from '../services/session.service';

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivate {

  /**
   * @param sessionService
   * @param router
   */
  constructor(private sessionService:SessionService, private router: Router) {}

  /**
   * @param next
   * @param state
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    /**
     * Route for admin only.Is not admin redirect to Home
     */
    if(!this.sessionService.isAdmin)
    {
      this.router.navigateByUrl('/home');
      throw new DOMException('The user is not admin');
    }
    else
    {
      return true
    }
  }

}
