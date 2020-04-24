import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {SessionService} from '../services/connexion/session.service';
import {LoginModel} from '../models/LoginModel';

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivate {

  constructor(private sessionService:SessionService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    /**
     * Route for admin only.Is not admin redirect to Home
     */
    if(!this.sessionService.isAdmin)
    {
      this.router.navigateByUrl('/home');
    }

    return true
  }

}
