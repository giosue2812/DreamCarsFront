import {ActivatedRouteSnapshot, provideRoutes, Resolve, RouterStateSnapshot} from '@angular/router';
import {UserModel} from '../models/UserModel';
import {Observable} from 'rxjs';
import {UserService} from '../services/user.service';
import {Injectable} from '@angular/core';

@Injectable({providedIn:'root'})

export class UserModelResolver implements Resolve<UserModel[]>{
  constructor(private userService: UserService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserModel[]> | Promise<UserModel[]> | UserModel[] {

    return this.userService.getUser(route.paramMap.get('keyWord'));

  }
}
