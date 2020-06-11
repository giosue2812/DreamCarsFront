import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {GroupeModel} from '../models/GroupeModel';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupeService implements OnDestroy{

  /**
   * @type groupe$: BehaviorSubject<GroupeModel[]>
   */
  private groupe$ = new BehaviorSubject<GroupeModel[]>([]);

  /**
   * @param httpClient: HttpClient
   */
  constructor(private httpClient: HttpClient) { }

  /**
   * @return Observable<GroupeModel[]>
   * @description Request list of groupe
   */
  getGroupes():Observable<GroupeModel[]>{
    this.httpClient.get<GroupeModel[]>(environment.url+'groupe').subscribe(data => {
      this.groupe$.next(data);
      });
    return this.groupe$;
  }

  /**
   * @param groupeModel: GroupeModel
   * @description Request to add a new groupe
   */
  newGroupe(groupeModel){
    this.httpClient.post<GroupeModel[]>(environment.url+'groupe/addGroupe',groupeModel).subscribe(
      data => {
        this.groupe$.next(data);
      });
  }

  /**
   * @param idGroupe: Number
   * @param groupeModel: GroupeModel
   * @return BehaviorSubject<GroupeModel[]>
   * @description Request to update a groupe
   */
  updateGroupe(idGroupe,groupeModel){
    this.httpClient.put<GroupeModel[]>(environment.url+'groupe/updateGroupe/'+idGroupe,groupeModel).subscribe(
      data => {
        this.groupe$.next(data);
      });
    return this.groupe$;
  }

  /**
   * @param idGroupe: Number
   * @return BehaviorSubject<GroupeModel[]>
   * @description Request to remove a groupe
   */
  removeGroupe(idGroupe){
    this.httpClient.delete<GroupeModel[]>(environment.url+'groupe/removeGroupe/'+idGroupe).subscribe(
      data => {
        this.groupe$.next(data);
      });
    return this.groupe$;
  }

  /**
   * @description Unsubscribe the BehaviorSubject
   */
  ngOnDestroy(): void {
    this.groupe$.unsubscribe();
  }
}
