import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import {ProductModel} from '../models/ProductModel';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnDestroy{

  products$ = new BehaviorSubject<ProductModel[]>([]);
  isLoading$ = new BehaviorSubject<boolean>(false);

  constructor(private httpClient: HttpClient) { }

  getProductList():Observable<ProductModel[]>{
    this.isLoading$.next(true);
    this.httpClient.get<ProductModel[]>(environment.url+'product/list').subscribe(
      data => {
        this.products$.next(data);
        this.isLoading$.next(false);
      });
    return this.products$;
  }

  getProduct(productId):Observable<ProductModel[]>{
    this.isLoading$.next(true);
    this.httpClient.get<ProductModel[]>(environment.url+'product/'+productId).subscribe(
      data => {
        this.products$.next(data);
        this.isLoading$.next(false);
      });
    return this.products$;
  }

  getSearchProduct(keyWord):Observable<ProductModel[]>{
    this.isLoading$.next(true);
    this.httpClient.post<ProductModel[]>(environment.url+'product/search',keyWord).subscribe(
      data => {
        this.products$.next(data);
        this.isLoading$.next(false);
      }
    );
    return this.products$;
  }

  createProduct(product: ProductModel):Observable<ProductModel[]>{
    this.httpClient.post<ProductModel[]>(environment.url+'product/create',product).subscribe(
      data => {
        this.getProductList().subscribe(data => {this.products$.next(data)})
    });
    return this.products$
  }

  updateProduct(product: ProductModel, productId):Observable<ProductModel[]>{

    this.httpClient.put<ProductModel[]>(environment.url+'product/edit/'+productId,product).subscribe(
      data => {
        this.products$.next(data);
      }
    );
    return this.products$;
  }

  removeProduct(productId):Observable<ProductModel[]>{
    this.isLoading$.next(true)
    this.httpClient.delete<ProductModel[]>(environment.url+'product/remove/'+productId).subscribe(
      data => {
        this.products$.next(data);
        this.isLoading$.next(false);
      }
    );
    return this.products$;
  }
  ngOnDestroy(): void {
    this.products$.unsubscribe();
  }
}
