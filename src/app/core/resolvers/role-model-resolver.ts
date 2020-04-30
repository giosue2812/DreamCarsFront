import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {RoleModel} from '../models/RoleModel';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {RoleService} from '../services/role.service';

@Injectable({providedIn:'root'})
export class RoleModelResolver implements Resolve<RoleModel[]>{

  /**
   * @param roleService
   */
  constructor(private roleService: RoleService) {}

  /**
   * @param route
   * @param state
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RoleModel[]> | Promise<RoleModel[]> | RoleModel[] {
    /**
     * This service return all roles
     */
    return this.roleService.getRoles();

    }
}
