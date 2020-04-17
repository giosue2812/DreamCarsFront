import { Injectable } from '@angular/core';
import {TokenModel} from '../../models/TokenModel';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  start(token: TokenModel){
    sessionStorage.setItem('TOKEN',token.token);
  }

  get isLogged():boolean{
    return sessionStorage.getItem('TOKEN') != null;
  }

  get tokken():string{
    return sessionStorage.getItem('TOKEN');
  }
}
