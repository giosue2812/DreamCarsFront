import {Injectable} from '@angular/core';
import {TokenModel} from '../models/TokenModel';
import * as jwt_decode from 'jwt-decode';
import {LoginModel} from '../models/LoginModel';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private loginModel:LoginModel;

  /**
   * @param token
   * When the login is success. Saving the tokken in session storage.
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

  /**
   * Recuperation of user role
   */
    get isAdmin():boolean{
    let role = [];
    this.tokenDecode();
    this.loginModel.roles.forEach(function(item) {
      role.push(item)
    });
    return !!role.find(p => p === 'ROLE_ADMIN');
  }

  /**
   * Get the username from the token
   */
  get username():string{
    this.tokenDecode();
    return this.loginModel.username;
  }

  /**
   * When the session is disconnect remove the session
   */
  remove()
  {
    sessionStorage.removeItem('TOKEN');
  }

  /**
   * Decode the token to get Role and Username
   */
  private tokenDecode(){
    this.loginModel = jwt_decode(this.tokken);
  }
}
