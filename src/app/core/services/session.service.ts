import {Injectable} from '@angular/core';
import {TokenModel} from '../models/TokenModel';
import * as jwt_decode from 'jwt-decode';
import {LoginModel} from '../models/LoginModel';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  /**
   * @type loginModel: LoginModel
   */
  private loginModel:LoginModel;

  /**
   * @param token: TokenModel
   * @description Add the tokken to the sessionStorage
   */
  start(token: TokenModel){
    sessionStorage.setItem('TOKEN',token.token);
  }

  /**
   * @return Boolean
   * @description Get a token if != null
   */
  get isLogged():boolean{
    return sessionStorage.getItem('TOKEN') != null;
  }

  /**
   * @return string
   * @description Get token
   */
  get tokken():string{
    return sessionStorage.getItem('TOKEN');
  }

  /**
   * @return boolean
   * @description Get if the user is an role admin
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
   * @return boolean
   * @description Get if the user is a role vente
   */
  get isVente():boolean{
      let role = [];
      this.tokenDecode();
      this.loginModel.roles.forEach(function(item) {
        role.push(item)
      });
      return !!role.find(p => p === 'ROLE_VENTE');
  }

  /**
   * @return string
   * @description Get username
   */
  get username():string{
    this.tokenDecode();
    return this.loginModel.username;
  }

  /**
   * @description Remove the token
   */
  remove()
  {
    sessionStorage.removeItem('TOKEN');
  }

  /**
   * @description Private function to decode the tokken
   */
  private tokenDecode(){
    this.loginModel = jwt_decode(this.tokken);
  }
}
