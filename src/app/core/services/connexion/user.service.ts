import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';
import {UserModel} from '../../models/UserModel';
import {SessionService} from './session.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient, private sessionService:SessionService) { }

  /**
   * We get the user id from the server.
   */
  getIdUser(): Observable<UserModel>{
    return this.httpClient
      .get<UserModel>(environment.url+'user/'+this.sessionService.user)
  }

}
