import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {GroupeModel} from '../models/GroupeModel';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupeService implements OnDestroy{

  private groupe$ = new BehaviorSubject<GroupeModel[]>([]);
  isLoading$ = new BehaviorSubject<boolean>(false);
  /**
   * @param httpClient
   */
  constructor(private httpClient: HttpClient) { }

  /**
   * This service request all groupe from server. This return a groupe model
   */
  getGroupe():Observable<GroupeModel[]>{
    this.isLoading$.next(true);
    this.httpClient.get<GroupeModel[]>(environment.url+'groupe').subscribe(data => {
      this.groupe$.next(data);
      this.isLoading$.next(false);
      });
    return this.groupe$;
  }

  ngOnDestroy(): void {
    this.groupe$.unsubscribe();
  }
}
