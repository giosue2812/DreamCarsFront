import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {CardDetailModel} from '../models/CardDetailModel';
import {CardCountModel} from '../models/CardCountModel';

@Injectable({
  providedIn: 'root'
})
export class CardService implements OnDestroy{

  /**
   * @type card: BehaviorSubject<boolean>
   */
  card = new BehaviorSubject<CardCountModel>(null);
  /**
   * @type cardModel: BehaviorSubject<CardDetailModel>
   */
  cardModel = new BehaviorSubject<CardDetailModel[]>([]);
  /**
   * @param httpClient: HttpClient
   */
  constructor(private httpClient: HttpClient) { }

  /**
   * @param productId: Number
   * @param username: String
   * @return Observable<boolean>
   */
  addCard(productId,username):Observable<CardCountModel>{
    this.httpClient.get<CardCountModel>(environment.url+'sales/addCard/'+productId+'/'+username).subscribe(
      data => {
        this.card.next(data);
      });
    return this.card;
  }

  /**
   * @param username: String
   * @return Observable<boolean>
   */
  getCard(username):Observable<CardCountModel>{
    this.httpClient.get<CardCountModel>(environment.url+'sales/card/'+username).subscribe(
      data => {
        this.card.next(data);
      });
    return this.card;
  }

  /**
   * @param username: string
   * @return Observable<CardDetailModel>
   */
  getCardDetail(username):Observable<CardDetailModel[]>{
    this.httpClient.get<CardDetailModel[]>(environment.url+'sales/cardList/'+username).subscribe(
      data => {
        this.cardModel.next(data)
      });
    return this.cardModel;
  }

  ngOnDestroy(): void {
    this.card.unsubscribe();
  }
}
