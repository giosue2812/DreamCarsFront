import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {SupplierModel} from '../models/SupplierModel';
import {environment} from '../../../environments/environment';
import {$t} from 'codelyzer/angular/styles/chars';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  suppliers$ = new BehaviorSubject<SupplierModel[]>([]);
  isLoadding$ = new BehaviorSubject<boolean>(false);
  constructor(private httpClient: HttpClient) { }

  getSuppliers():Observable<SupplierModel[]>{
    this.isLoadding$.next(true);
    this.httpClient.get<SupplierModel[]>(environment.url+'suppliers').subscribe(
      data => {
        this.suppliers$.next(data);
        this.isLoadding$.next(false);
      }
    );
    return this.suppliers$;
  }
}
