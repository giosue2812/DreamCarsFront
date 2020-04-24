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

  id:UserModel;

  constructor(private httpClient: HttpClient, private sessionService:SessionService) { }

  /**
   * We get the user id from the server.
   */
  getIdUser(): Observable<UserModel>{
    return this.httpClient
      .get<UserModel>(environment.url+'user/'+this.sessionService.username)
  }

  /**
   * @param userModel
   * Update User
   */
  updateUser(userModel:UserModel){
   this.getIdUser().subscribe(
      data => {
        this.id = data;
      },
     error => {
        console.log('Erreur : '+error);
     }
    );
    console.log(userModel);
    return this.httpClient
      .put(environment.url+'user/update/'+this.id.id,userModel).subscribe()
  }

  getUser(any):Observable<UserModel>{
    console.log(any);
    return any
  }

}
