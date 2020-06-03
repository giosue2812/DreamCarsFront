import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {ProductModel} from '../models/ProductModel';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

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

  ngOnDestroy(): void {
    this.products$.unsubscribe();
  }
}
