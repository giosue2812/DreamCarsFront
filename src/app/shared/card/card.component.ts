import {Component, OnInit} from '@angular/core';
import {CardService} from '../../core/services/card.service';
import {SessionService} from '../../core/services/session.service';
import {CardDetailModel} from '../../core/models/CardDetailModel';
import {CardCountModel} from '../../core/models/CardCountModel';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  /**
   * @type totalOrder: number;
   */
  totalOrder: number;
  /**
   * @type article: CardCountModel
   */
  article: CardCountModel;
  /**
   * @type cardDetailModel: CardDetailModel
   */
  cardDetailModel: CardDetailModel[];
  /**
   * @param cardService: CardService
   * @param sessionService: SessionService
   */
  constructor(public cardService: CardService,private sessionService: SessionService) {
  }

  /**
   * @description Get card's user
   */
  ngOnInit(): void {
    this.cardService.getCard(this.sessionService.username).subscribe(
    data => {
        this.article = data;
          });
  }

  /**
   * @description Get card details
   */
  getCardDetail(){
    this.cardService.getCardDetail(this.sessionService.username).subscribe(
      data => {
        this.cardDetailModel = data;
        this.calculTotalOrder();
      }
    );
  }

  /**
   * @description Method to calcul the order total
   */
  calculTotalOrder(){
    let total = 0;
    this.cardDetailModel.forEach(function(item) {
      let qty: any = 0;
      let price: any = 0;
      qty = item.quantity;
      price = item.price;
      total += (qty * price);
    });
    this.totalOrder = total;

  }

  /**
   * @param productId: Number
   * @description Remove product from the card
   */
  removeItem(productId){
    console.log(productId);
  }

  /**
   * @description Confirm the order
   */
  confirmOrder(){
    console.log('commande confirmer');
  }
}
