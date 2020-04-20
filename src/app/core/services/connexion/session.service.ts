import { Injectable } from '@angular/core';
import {TokenModel} from '../../models/TokenModel';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  /**
   * @param token
   * Whe the login is success. Saving the tokken in session storage.
   */
  start(token: TokenModel){
    sessionStorage.setItem('TOKEN',token.token);
  }

  /**
   * To check if the token is always available
   */
  get isLogged():boolean{
    return sessionStorage.getItem('TOKEN') != null;
  }

  /**
   * Recuperation tokken.
   */
  get tokken():string{
    return sessionStorage.getItem('TOKEN');
  }
}
