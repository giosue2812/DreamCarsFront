import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from '../../../../core/services/product.service';
import {ProductModel} from '../../../../core/models/ProductModel';
import {SessionService} from '../../../../core/services/session.service';
import {CardService} from '../../../../core/services/card.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  /**
   * @type productModel: ProductModel[]
   */
  productModel:ProductModel[];

  /**
   * @param productService: ProductService
   * @param sessionService: SessionService
   * @param cardService
   */
  constructor(public productService: ProductService,public sessionService:SessionService,private cardService: CardService) { }

  /**
   * @description Get a list of product
   */
  ngOnInit(): void {
    this.productService.getProductList().subscribe(
      data => {
        this.productModel = data
      }
    )
  }

  /**
   * @param productId Number
   */
  addCard(productId){
    if(!this.sessionService.isLogged)
    {
      console.log("Vous devez etre connecter");
    }
    else {
      this.cardService.addCard(productId,this.sessionService.username);
    }
  }
}
