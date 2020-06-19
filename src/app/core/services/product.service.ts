import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {ProductModel} from '../models/ProductModel';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnDestroy{

  /**
   * @type products$: BehaviorSubject<ProductModel[]>
   */
  products$ = new BehaviorSubject<ProductModel[]>([]);
  /**
   * @param httpClient: HttpClient
   */
  constructor(private httpClient: HttpClient) { }

  /**
   * @return Observable<ProductModel[]>
   * @description Request list of product
   */
  getProductList():Observable<ProductModel[]>{
    this.httpClient.get<ProductModel[]>(environment.url+'product/list').subscribe(
      data => {
        this.products$.next(data);
      });
    return this.products$;
  }

  /**
   * @param productId: Number
   * @return Observable<ProductModel[]>
   * @description Request a product
   */
  getProduct(productId):Observable<ProductModel[]>{
    this.httpClient.get<ProductModel[]>(environment.url+'product/'+productId).subscribe(
      data => {
        this.products$.next(data);
      });
    return this.products$;
  }

  /**
   * @param keyWord: String
   * @return Observable<ProductModel[]>
   * @description Request a product
   */
  getSearchProduct(keyWord):Observable<ProductModel[]>{
    this.httpClient.post<ProductModel[]>(environment.url+'product/search',keyWord).subscribe(
      data => {
        this.products$.next(data);
      }
    );
    return this.products$;
  }

  /**
   * @param product: ProductModel
   * @return Observable<ProductModel[]>
   * @description Request to add a new product
   */
  createProduct(product: ProductModel):Observable<ProductModel[]>{
    this.httpClient.post<ProductModel[]>(environment.url+'product/create',product).subscribe(
      data => {
        this.getProductList().subscribe(data => {this.products$.next(data)})
    });
    return this.products$
  }

  /**
   * @param product: ProductModel
   * @param productId: Number
   * @return Observable<ProductModel[]>
   * @description Request to update a product
   */
  updateProduct(product: ProductModel, productId):Observable<ProductModel[]>{

    this.httpClient.put<ProductModel[]>(environment.url+'product/edit/'+productId,product).subscribe(
      data => {
        this.products$.next(data);
      }
    );
    return this.products$;
  }

  /**
   * @param productId: Number
   * @return Observable<ProductModel[]>
   * @description Request to remove a product
   */
  removeProduct(productId):Observable<ProductModel[]>{
    this.httpClient.delete<ProductModel[]>(environment.url+'product/remove/'+productId).subscribe(
      data => {
        this.products$.next(data);
      }
    );
    return this.products$;
  }

  /**
   * @description Unsubscribe the BehaviorSubject
   */
  ngOnDestroy(): void {
    this.products$.unsubscribe();
  }
}
