import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {SupplierModel} from '../models/SupplierModel';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  /**
   * @type suppliers$: BehaviorSubject<SupplierModel[]>
   */
  suppliers$ = new BehaviorSubject<SupplierModel[]>([]);

  /**
   * @param httpClient: HttpClient
   */
  constructor(private httpClient: HttpClient) { }

  /**
   * @return Observable<SupplierModel[]>
   * @description Request a list of suppliers
   */
  getSuppliers():Observable<SupplierModel[]>{
    this.httpClient.get<SupplierModel[]>(environment.url+'suppliers').subscribe(
      data => {
        this.suppliers$.next(data);
      }
    );
    return this.suppliers$;
  }

  /**
   * @param supplierId: Number
   * @description Return a supplier
   * @return Observable<SupplierModel[]>
   */
  getSupplier(supplierId):Observable<SupplierModel[]>{
    this.httpClient.get<SupplierModel[]>(environment.url+'supplier/'+supplierId).subscribe(
      data => {
        this.suppliers$.next(data);
      });
    return this.suppliers$;
  }

  /**
   * @param supplierModel: SupplierModel
   * @description Add a new Supplier
   * @return Observable<SupplierModel[]>
   */
  newSupplier(supplierModel):Observable<SupplierModel[]>{
    this.httpClient.post<SupplierModel[]>(environment.url+'supplier/new',supplierModel).subscribe(
      data => {
        this.suppliers$.next(data);
      });
    return this.suppliers$;
  }
  /**
   * @param supplierId: Number
   * @param supplierModel: SupplierModel
   * @return Observable<SupplierModel[]>
   */
  editSupplier(supplierId,supplierModel):Observable<SupplierModel[]>{
    this.httpClient.put<SupplierModel[]>(environment.url+'supplier/edit/'+supplierId,supplierModel).subscribe(
      data => {
        this.suppliers$.next(data);
      });
    return this.suppliers$;
  }

  /**
   * @param supplierId: Number
   * @return Observable<SupplierModel[]>
   */
  removeSupplier(supplierId):Observable<SupplierModel[]>{
    this.httpClient.delete<SupplierModel[]>(environment.url+'supplier/remove/'+supplierId).subscribe(
      data => {
        this.suppliers$.next(data);
      });
    return this.suppliers$;
  }
}
