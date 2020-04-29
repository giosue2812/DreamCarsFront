import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {GroupeModel} from '../models/GroupeModel';
import {Observable} from 'rxjs';
import {GroupeService} from '../services/groupe.service';
import {Injectable} from '@angular/core';

@Injectable({providedIn:'root'})

export class GroupeModelResolver implements Resolve<GroupeModel[]>{

  constructor(private groupeService: GroupeService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<GroupeModel[]> | Promise<GroupeModel[]> | GroupeModel[] {

    return this.groupeService.getGroupe();
  }
}
