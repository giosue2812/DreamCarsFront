import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardService implements OnDestroy{

  /**
   * @type card: BehaviorSubject<boolean>
   */
  card = new BehaviorSubject<boolean>(false);

  /**
   * @param httpClient: HttpClient
   */
  constructor(private httpClient: HttpClient) { }

  /**
   * @param productId: Number
   * @param username: String
   * @return Observable<boolean>
   */
  addCard(productId,username):Observable<boolean>{
    this.httpClient.get<boolean>(environment.url+'sales/addCard/'+productId+'/'+username).subscribe(
      data => {
        this.card.next(data);
      });
    return this.card;
  }

  /**
   * @param username: String
   * @return Observable<boolean>
   */
  getCard(username):Observable<boolean>{
    this.httpClient.get<boolean>(environment.url+'sales/card/'+username).subscribe(
      data => {
        this.card.next(data);
      });
    return this.card;
  }

  ngOnDestroy(): void {
    this.card.unsubscribe();
  }
}
