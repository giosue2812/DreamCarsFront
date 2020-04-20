import { Injectable } from '@angular/core';
import {TokenModel} from '../../models/TokenModel';
import {LoginModel} from '../../models/LoginModel';
import {log} from 'util';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  /**
   * @param token
   * When the login is success. Saving the tokken in session storage and the user.
   * @param username
   */
  start(token: TokenModel,username){
    sessionStorage.setItem('USER', username);
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

  /**
   * Recuperation of the User
   */
  get user():string{
    return sessionStorage.getItem('USER');
  }

  /**
   * When the session is disconnect remove the session
   */
  remove()
  {
    sessionStorage.removeItem('TOKEN');
    sessionStorage.removeItem('USER');
  }
}
