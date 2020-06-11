import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {RoleModel} from '../models/RoleModel';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleService implements OnDestroy{

  /**
   * @type roles$: BehaviorSubject<RoleModel[]>
   */
  private roles$ = new BehaviorSubject<RoleModel[]>([]);

  /**
   * @param httpClient: HttpClient
   */
  constructor(private httpClient:HttpClient) { }

  /**
   * @return Observable<RoleModel[]>
   * @description Request a list of roles
   */
  getRoles():Observable<RoleModel[]>{
    this.httpClient.get<RoleModel[]>(environment.url+'roles').subscribe(data => {
      this.roles$.next(data);
    });
    return this.roles$;
  }

  /**
   * @param roleModel: RoleModel
   * @description Request to add a new role
   */
  newRole(roleModel){
    this.httpClient.post<RoleModel[]>(environment.url+'role/addRole',roleModel)
      .subscribe(data => {
        this.roles$.next(data);
      });
  }

  /**
   * @param idRole: Number
   * @param role: String
   * @return BehaviorSubject<RoleModel[]>
   * @description Request to update a role
   */
  updateRole(idRole,role){
    this.httpClient.put<RoleModel[]>(environment.url+'role/updateRole/'+idRole,role)
      .subscribe(data => {
        this.roles$.next(data);
      });
    return this.roles$;
  }

  /**
   * @param idRole: Number
   * @return BehaviorSubject<RoleModel[]>
   * @description Request to remove a role
   */
  removeRole(idRole){
    this.httpClient.delete<RoleModel[]>(environment.url+'role/removeRole/'+idRole).subscribe(
      data => {
        this.roles$.next(data);
      });
    return this.roles$;
  }

  /**
   * @description Unsubscribe the BehaviorSubject
   */
  ngOnDestroy(): void {
    this.roles$.unsubscribe();
  }
}
