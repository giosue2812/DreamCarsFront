import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {RoleModel} from '../models/RoleModel';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleService implements OnDestroy{

  private roles$ = new BehaviorSubject<RoleModel[]>([]);
  isLoading$ = new BehaviorSubject<boolean>(false);

  /**
   * @param httpClient
   */
  constructor(private httpClient:HttpClient) { }

  /**
   * This service return the all roles. Return a response type Observable role model
   */
  getRoles():Observable<RoleModel[]>{
    this.isLoading$.next(true);
    this.httpClient.get<RoleModel[]>(environment.url+'roles').subscribe(data => {
      this.roles$.next(data);
      this.isLoading$.next(false);
    });
    return this.roles$;
  }

  /**
   * @param roleModel
   */
  newRole(roleModel){
    this.isLoading$.next(true);
    this.httpClient.post<RoleModel>(environment.url+'role/addRole',roleModel)
      .subscribe(data => {
        this.roles$.next([...this.roles$.getValue(), data]);
        this.isLoading$.next(false);
      });

    // return this.roles$;
  }

  ngOnDestroy(): void {
    this.roles$.unsubscribe();
  }



}
