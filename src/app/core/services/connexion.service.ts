import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {LoginModel} from '../models/LoginModel';
import {Observable} from 'rxjs';
import {TokenModel} from '../models/TokenModel';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  /**
   * @param httpClient: HttpClient
   */
  constructor(private httpClient:HttpClient) { }

  /**
   * @param login
   * @return Observable<TokenModel>
   * @description Send the login credential to the server.
   */
  login(login: LoginModel): Observable<TokenModel>{

    return this.httpClient.post<TokenModel>(environment.url + 'login_check',login)
  }
}
