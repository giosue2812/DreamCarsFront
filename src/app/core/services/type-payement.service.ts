import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {PayementModel} from '../models/PayementModel';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TypePayementService {

  /**
   * @type typePayement: BehaviorSubject<PayementModel[]>
   */
  typePayement = new BehaviorSubject<PayementModel[]>([]);

  /**
   * @param httpClient
   */
  constructor(private httpClient: HttpClient) { }

  /**
   * @description Get list of payements
   */
  getPayements():Observable<PayementModel[]>{
    this.httpClient.get<PayementModel[]>(environment.url+'payement').subscribe(
      data => {
        this.typePayement.next(data);
      });
    return this.typePayement;
  }
}
