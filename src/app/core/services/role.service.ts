import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RoleModel} from '../models/RoleModel';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  /**
   * @param httpClient
   */
  constructor(private httpClient:HttpClient) { }

  /**
   * This service return the all roles. Return a response type Observable role model
   */
  getRoles():Observable<RoleModel[]>{
    return this.httpClient.get<RoleModel[]>(environment.url+'roles');
  }
}
