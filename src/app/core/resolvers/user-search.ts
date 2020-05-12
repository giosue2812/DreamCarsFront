import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {UserModelArray} from '../models/UserModelArray';
import {Observable} from 'rxjs';
import {UserService} from '../services/user.service';
import {Injectable} from '@angular/core';

@Injectable({providedIn:'root'})

export class UserSearch implements Resolve<UserModelArray[]>{
  /**
   * @param userService
   */
  constructor(private userService: UserService) {}

  /**
   * @param route
   * @param state
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserModelArray[]> | Promise<UserModelArray[]> | UserModelArray[] {
    /**
     * This service return the search user found
     */
    return this.userService.getUser(route.paramMap.get('keyWord'));
  }
}
