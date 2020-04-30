import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {UserModel} from '../models/UserModel';
import {Observable} from 'rxjs';
import {UserService} from '../services/user.service';
import {Injectable} from '@angular/core';

@Injectable({providedIn:'root'})

export class UserModelResolver implements Resolve<UserModel[]>{
  /**
   * @param userService
   */
  constructor(private userService: UserService) {}

  /**
   * @param route
   * @param state
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserModel[]> | Promise<UserModel[]> | UserModel[] {
    /**
     * This service return the search user found
     */
    return this.userService.getUser(route.paramMap.get('keyWord'));
  }
}
