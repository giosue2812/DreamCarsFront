import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {CardDetailModel} from '../models/CardDetailModel';
import {CardCountModel} from '../models/CardCountModel';
import {SummaryProductSaleModel} from '../models/SummaryProductSaleModel';

@Injectable({
  providedIn: 'root'
})
export class CardService implements OnDestroy{

  summaryProductSaleModel$= new BehaviorSubject<SummaryProductSaleModel[]>([]);
  /**
   * @type card: BehaviorSubject<boolean>
   */
  card$ = new BehaviorSubject<boolean>(false);
  /**
   * @type cardCount$: BehaviorSubject<CardCountModel>
   */
  cardCount$ = new BehaviorSubject<CardCountModel>(null);
  /**
   * @type cardModel$: BehaviorSubject<CardDetailModel[]>
   */
  cardModel$ = new BehaviorSubject<CardDetailModel[]>([]);
  /**
   * @param httpClient: HttpClient
   */
  constructor(private httpClient: HttpClient) { }

  /**
   * @param productId: Number
   * @param username: String
   * @param qty
   * @return Observable<boolean>
   */
  addCard(productId,username,qty):Observable<boolean>{
    this.httpClient.get<boolean>(environment.url+'sales/addCard/'+productId+'/'+username+'/'+qty).subscribe(
      data => {
        this.card$.next(data);
      });
    return this.card$;
  }

  /**
   * @param username: String
   * @return Observable<boolean>
   */
  getCard(username):Observable<CardCountModel>{
    this.httpClient.get<CardCountModel>(environment.url+'sales/card/'+username).subscribe(
      data => {
        this.cardCount$.next(data);
      });
    return this.cardCount$;
  }

  /**
   * @param username: string
   * @return Observable<CardDetailModel>
   */
  getCardDetail(username):Observable<CardDetailModel[]>{
    this.httpClient.get<CardDetailModel[]>(environment.url+'sales/cardList/'+username).subscribe(
      data => {
        this.cardModel$.next(data)
      });
    return this.cardModel$;
  }

  /**
   * @param username: string
   * @return Observable<SummaryProductSaleModel[]>
   */
  getSummaryOrder(username):Observable<SummaryProductSaleModel[]>{
    this.httpClient.get<SummaryProductSaleModel[]>(environment.url+'sales/summaryOrder/'+username).subscribe(
      data => {
        this.summaryProductSaleModel$.next(data);
        this.getCard(username);
      }
    );
    return this.summaryProductSaleModel$;
  }
  /**
   * @param username: string
   * @param payementType: Number
   * @return Observable<SummaryProductSaleModel[]>
   */
  confirmCard(username,payementType){
    this.httpClient.get(environment.url+'sales/confirmCard/'+username+'/'+payementType).subscribe();
  }

  /**
   * @param productSaleId: Number
   * @param username: string
   * @return getCardDetail
   */
  removeProductFromCard(username,productSaleId){
    console.log(username);
    this.httpClient.delete<CardDetailModel[]>(environment.url+'sales/removeProduct/'+username+'/'+productSaleId).subscribe(
      data => {
        this.getCardDetail(username);
        this.getCard(username);
      }
    );
  }

  ngOnDestroy(): void {
    this.card$.unsubscribe();
    this.cardModel$.unsubscribe();
    this.summaryProductSaleModel$.unsubscribe();
  }
}
