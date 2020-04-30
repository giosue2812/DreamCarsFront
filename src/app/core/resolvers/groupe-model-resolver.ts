import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {GroupeModel} from '../models/GroupeModel';
import {Observable} from 'rxjs';
import {GroupeService} from '../services/groupe.service';
import {Injectable} from '@angular/core';

@Injectable({providedIn:'root'})

export class GroupeModelResolver implements Resolve<GroupeModel[]>{

  /**
   * @param groupeService
   */
  constructor(private groupeService: GroupeService) {}

  /**
   * @param route
   * @param state
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<GroupeModel[]> | Promise<GroupeModel[]> | GroupeModel[] {
    /**
     * This service return all groupe
     */
    return this.groupeService.getGroupe();
  }
}
