import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {SessionService} from './session.service';
import {GroupeModel} from '../models/GroupeModel';
import {RoleModel} from '../models/RoleModel';
import {UserModel} from '../models/UserModel';
import {UserRoleModel} from '../models/UserRoleModel';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy{
  userArray$ = new BehaviorSubject<UserModel[]>([]);
  isLoading$ = new BehaviorSubject<boolean>(false);

  /**
   * @param httpClient
   * @param sessionService
   */
  constructor(private httpClient: HttpClient, private sessionService:SessionService) { }

  /**
   * We get the user id from the server.
   */
  getIdUser(): Observable<UserModel[]>{
    this.isLoading$.next(true)
    this.httpClient
      .get<UserModel[]>(environment.url+'user/'+this.sessionService.username).subscribe(
        data => {
          this.userArray$.next(data);
          this.isLoading$.next(false);
        }
      );
    return this.userArray$;
  }

  /**
   * @param userModel
   * Update UserDetails
   * This service update the user. First a get the id user.After a put the new modification
   */
  updateUser(userModel:UserModel){
    this.getIdUser().subscribe(
      data => {
        this.userArray$.next(data);
      },
      error => {
        console.log('Erreur : '+error);
      }
    );
    console.log(this.userArray$.getValue().find(u => u.id).id);
    return this.httpClient
      .put(environment.url+'user/update/'+this.userArray$.getValue().find(u => u.id).id,userModel).subscribe()
  }

  /**
   * @param id
   */
  getUserById(id:string):Observable<UserModel[]>{
    this.isLoading$.next(true);
    this.httpClient
      .get<UserModel[]>(environment.url+'userID/'+id).subscribe(data => {
        this.userArray$.next(data);
        this.isLoading$.next(false);
    });
    return this.userArray$;
  }
  /**
   * @param user
   * I get a user if exist
   */
  getUser(user):Observable<UserModel[]>{
    this.isLoading$.next(true);
    this.httpClient.get<UserModel[]>(environment.url+'user/search/'+user).subscribe(data => {
      this.userArray$.next(data);
      this.isLoading$.next(false);
    });
    return this.userArray$;
  }
  /**
   *
   * @param userId
   * @param groupeModel
   * This service add a new groupe.
   */
  addGroupe(userId,groupeModel:GroupeModel){
    this.isLoading$.next(true);
    this.httpClient.put<UserModel[]>(environment.url+'user/addGroupe/'+userId,groupeModel).subscribe(data =>{
      this.userArray$.next(data);
      this.isLoading$.next(false);
    });
  }

  /**
   * @param userId
   * @param roleModel
   */
  addRole(userId,roleModel:RoleModel){
    this.isLoading$.next(true);
    this.httpClient.put<UserRoleModel>(environment.url+'user/addRole/'+userId,roleModel).subscribe(
      data => {
        this.httpClient.get<UserModel[]>(environment.url+'userID/'+data.user).subscribe(
          data => {
            this.userArray$.next(data);
          }
        );
        this.isLoading$.next(false);
      }
    );
  }

  /**
   * @param userId
   * @param groupe
   */
  removeGroupe(userId,groupe){
    this.isLoading$.next(true);
    this.httpClient.delete<UserModel[]>(environment.url+'user/removeGroupe/'+userId+'/'+groupe).subscribe(data => {
      this.userArray$.next(data);
      this.isLoading$.next(false);
    });
    return this.userArray$;
  }

  /**
   * @param roleId
   */
  removeRole(roleId){
    this.isLoading$.next(true);
    return this.httpClient.delete<UserRoleModel>(environment.url+'user/updateUserRole/'+roleId).subscribe(
      data => {
        this.httpClient.get<UserModel[]>(environment.url+'userID/'+data.user).subscribe(
          data => {
            this.userArray$.next(data);
          }
        );
        this.isLoading$.next(false);
      }
    );
  }

  ngOnDestroy(): void {
    this.userArray$.unsubscribe();
  }
}
