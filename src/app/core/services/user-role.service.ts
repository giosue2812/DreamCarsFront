import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {UserRoleModel} from '../models/UserRoleModel';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {

  private userRole$ = new BehaviorSubject<UserRoleModel>(null);
  private isLoading = new BehaviorSubject<boolean>(false);

  constructor(private httpClient:HttpClient) { }

  getUserRole(){
    this.isLoading.next(true);
    this.httpClient
      .get<UserRoleModel>(environment.url+'userRole').subscribe(data => {
        this.userRole$.next(data);
        this.isLoading.next(false);
    });
    return this.userRole$;
  }

}
