import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {UserModelArray} from '../models/UserModelArray';
import {SessionService} from './session.service';
import {GroupeModel} from '../models/GroupeModel';
import {RoleModel} from '../models/RoleModel';
import {UserModelObject} from '../models/UserModelObject';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  /**
   * Variable id type user model to recupe the id from user
   */
  id:UserModelObject;

  /**
   * @param httpClient
   * @param sessionService
   */
  constructor(private httpClient: HttpClient, private sessionService:SessionService) { }

  /**
   * We get the user id from the server.
   */
  getIdUser(): Observable<UserModelObject>{
    return this.httpClient
      .get<UserModelObject>(environment.url+'user/'+this.sessionService.username)
  }

  /**
   * @param userModel
   * Update UserDetails
   * This service update the user. First a get the id user.After a put the new modification
   */
  updateUser(userModel:UserModelObject){
   this.getIdUser().subscribe(
      data => {
        this.id = data;
      },
     error => {
        console.log('Erreur : '+error);
     }
    );

    return this.httpClient
      .put(environment.url+'user/update/'+this.id,userModel).subscribe()
  }

  /**
   * @param user
   * I get a user if exist
   */
  getUser(user):Observable<UserModelArray[]>{
    return this.httpClient
      .get<UserModelArray[]>(environment.url+'user/search/'+user);
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

  /**
   * @param userId
   * @param roleModel
   */
  addRole(userId,roleModel:RoleModel){
    return this.httpClient.put(environment.url+'user/addRole/'+userId,roleModel).subscribe();
  }

  /**
   * @param userId
   * @param groupe
   */
  removeGroupe(userId,groupe){
    return this.httpClient.delete(environment.url+'user/removeGroupe/'+userId+'/'+groupe).subscribe();
  }

  /**
   * @param roleId
   */
  removeRole(roleId){
    return this.httpClient.delete(environment.url+'user/updateUserRole/'+roleId).subscribe();
  }
}
