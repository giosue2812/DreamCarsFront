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
  /**
   * userArray$: BehaviorSubject<UserModel[]>
   */
  userArray$ = new BehaviorSubject<UserModel[]>([]);

  /**
   * @param httpClient: HttpClient
   * @param sessionService: SessionService
   */
  constructor(private httpClient: HttpClient, private sessionService:SessionService) { }

  /**
   * @return Observable<UserModel[]>
   * @description Request a User by sessionService.username
   */
  getIdUser(): Observable<UserModel[]>{
    this.httpClient
      .get<UserModel[]>(environment.url+'user/'+this.sessionService.username).subscribe(
        data => {
          this.userArray$.next(data);
        }
      );
    return this.userArray$;
  }

  /**
   * @param userModel: UserModel
   * @return userArray$: BehaviorSubject<UserModel[]>
   * @description Request to update a user
   */
  updateUser(userModel:UserModel){
    this.getIdUser().subscribe(
      data => {
        this.userArray$.next(data);
      }
    );
    return this.httpClient
      .put(environment.url+'user/update/'+this.userArray$.getValue().find(u => u.id).id,userModel).subscribe()
  }

  /**
   * @param id string
   * @return Observable<UserModel[]>
   * @description Request a user
   */
  getUserById(id:string):Observable<UserModel[]>{
    this.httpClient
      .get<UserModel[]>(environment.url+'userID/'+id).subscribe(data => {
        this.userArray$.next(data);
    });
    return this.userArray$;
  }
  /**
   * @param user
   * @return Observable<UserModel[]>
   * @description Request a user
   */
  getUser(user):Observable<UserModel[]>{
    this.httpClient.get<UserModel[]>(environment.url+'user/search/'+user).subscribe(data => {
      this.userArray$.next(data);
    });
    return this.userArray$;
  }
  /**
   *
   * @param userId: Number
   * @param groupeModel: GroupeModel
   * @description Request to add a groupe to the user
   */
  addGroupe(userId,groupeModel:GroupeModel){
    this.httpClient.put<UserModel[]>(environment.url+'user/addGroupe/'+userId,groupeModel).subscribe(data =>{
      this.userArray$.next(data);
    });
  }

  /**
   * @param userId: Number
   * @param roleModel: RoleModel
   * @description Request to add a role from user
   */
  addRole(userId,roleModel:RoleModel){
    this.httpClient.put<UserRoleModel>(environment.url+'user/addRole/'+userId,roleModel).subscribe(
      data => {
        this.httpClient.get<UserModel[]>(environment.url+'userID/'+data.user).subscribe(
          data => {
            this.userArray$.next(data);
          }
        );
      }
    );
  }

  /**
   * @param userId Number
   * @param groupe String
   * @return userArray$: BehaviorSubject<UserModel[]>
   * @description Request to remove a groupe from user
   */
  removeGroupe(userId,groupe){
    this.httpClient.delete<UserModel[]>(environment.url+'user/removeGroupe/'+userId+'/'+groupe).subscribe(data => {
      this.userArray$.next(data);
    });
    return this.userArray$;
  }

  /**
   * @param roleId: Number
   * @description Request to remove a role from user
   */
  removeRole(roleId){
    return this.httpClient.delete<UserRoleModel>(environment.url+'user/updateUserRole/'+roleId).subscribe(
      data => {
        this.httpClient.get<UserModel[]>(environment.url+'userID/'+data.user).subscribe(
          data => {
            this.userArray$.next(data);
          });
      });
  }

  /**
   * @description Unsubscribe the BehaviorSubject
   */
  ngOnDestroy(): void {
    this.userArray$.unsubscribe();
  }
}
