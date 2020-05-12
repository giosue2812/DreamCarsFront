import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GroupeModel} from '../models/GroupeModel';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupeService {

  /**
   * @param httpClient
   */
  constructor(private httpClient: HttpClient) { }

  /**
   * This service request all groupe from server. This return a groupe model
   */
  getGroupe():Observable<GroupeModel[]>{

    return this.httpClient.get<GroupeModel[]>(environment.url+'groupe');
  }
}
