import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {UserModel} from '../models/UserModel';
import {SessionService} from './session.service';
import {GroupeModel} from '../models/GroupeModel';
import {RoleModel} from '../models/RoleModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  /**
   * Variable id type user model to recupe the id from user
   */
  id:UserModel;

  /**
   * @param httpClient
   * @param sessionService
   */
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
   * This service update the user. First a get the id user.After a put the new modification
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

    return this.httpClient
      .put(environment.url+'user/update/'+this.id.id,userModel).subscribe()
  }

  /**
   * @param user
   * I get a user if exist
   */
  getUser(user):Observable<UserModel[]>{
    return this.httpClient
      .get<UserModel[]>(environment.url+'user/search/'+user);
  }

  /**
   *
   * @param userId
   * @param groupeModel
   * This service add a new groupe.
   */
  addGroupe(userId,groupeModel:GroupeModel){
    return this.httpClient.put(environment.url+'user/addGroupe/'+userId,groupeModel).subscribe();
  }

  addRole(userId,roleModel:RoleModel){
    console.log(userId,roleModel.id_role)
  }
}
