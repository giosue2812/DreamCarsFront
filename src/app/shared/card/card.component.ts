import {Component, OnInit} from '@angular/core';
import {CardService} from '../../core/services/card.service';
import {SessionService} from '../../core/services/session.service';
import {CardDetailModel} from '../../core/models/CardDetailModel';
import {CardCountModel} from '../../core/models/CardCountModel';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PayementModel} from '../../core/models/PayementModel';
import {TypePayementService} from '../../core/services/type-payement.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  idArticle = 0;
  /**
   * @type payementModel: PayementModel[]
   */
  payementModel:PayementModel[];
  /**
   * @type confirmForm: FormGroup
   */
  confirmForm: FormGroup;
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
   * @param formBuilder
   * @param typePayementService
   * @param router
   */
  constructor(public cardService: CardService,
              public sessionService: SessionService,
              private formBuilder:FormBuilder,
              private typePayementService: TypePayementService,
              private router: Router) {
  }

  /**
   * @description Get card's user
   */
  ngOnInit(): void {
    this.cardService.getCard(this.sessionService.username).subscribe(
    data => {
        this.article = data;
          });
    this.typePayementService.getPayements().subscribe(
      data => {
        this.payementModel = data;
      });
    this.initForm();
  }

  initForm(){
    this.confirmForm = this.formBuilder.group({
      typePayement: new FormControl('',[Validators.required])
    })
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
   * @param productSaleId: Number
   * @description Remove product from the card
   */
  removeItem(productSaleId){
    this.cardService.removeProductFromCard(this.sessionService.username,productSaleId);
  }

  /**
   * @description Confirm the order
   */
  confirmOrder(){
      this.cardService.confirmCard(this.sessionService.username,this.confirmForm.get('typePayement').value);
         $('#modal3').modal('close');
         $('#modal1').modal('close');
         this.cardService.getCard(this.sessionService.username);
         return this.router.navigate(['/sales/summaryOrder']);
  }

  getItemIdArticle(productId){
    return this.idArticle = productId;
  }
}
