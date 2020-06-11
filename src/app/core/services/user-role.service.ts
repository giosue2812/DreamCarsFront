import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {UserRoleModel} from '../models/UserRoleModel';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {

  /**
   * userRole$: BehaviorSubject<UserRoleModel[]>
   */
  private userRole$ = new BehaviorSubject<UserRoleModel[]>([]);

  /**
   * @param httpClient HttpClient
   */
  constructor(private httpClient:HttpClient) { }

  /**
   * @return userRole$: BehaviorSubject<UserRoleModel[]>
   * @description Request a User Role
   */
  getUserRole(){
    this.httpClient
      .get<UserRoleModel[]>(environment.url+'userRole').subscribe(data => {
        this.userRole$.next(data);
    });
    return this.userRole$;
  }

}
