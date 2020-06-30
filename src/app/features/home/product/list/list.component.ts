import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from '../../../../core/services/product.service';
import {ProductModel} from '../../../../core/models/ProductModel';
import {SessionService} from '../../../../core/services/session.service';
import {CardService} from '../../../../core/services/card.service';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  idArticle = 0;

  /**
   * @type qtyForm: FormGroup
   */
  qtyForm: FormGroup;
  /**
   * @type productModel: ProductModel[]
   */
  productModel:ProductModel[];

  /**
   * @param productService: ProductService
   * @param sessionService: SessionService
   * @param cardService: CardService
   * @param formBuilder: FormBuilder
   * @param router: Router
   */
  constructor(public productService: ProductService,
              public sessionService:SessionService,
              private cardService: CardService,
              private formBuilder:FormBuilder,
              private router: Router) { }

  /**
   * @description Get a list of product
   */
  ngOnInit(): void {
    this.productService.getProductList().subscribe(
      data => {
        this.productModel = data;
      }
    );
    this.initForm();
  }

  initForm(){
    this.qtyForm = this.formBuilder.group({
      qty: new FormControl('',[Validators.required])
    })
  }

  /**
   * @param productId Number
   */
  addCard(productId){
    if(!this.sessionService.isLogged)
    {
      M.toast({html:'Vous devez etre connecter pour pouvoir passer une commande',classes:'red'})
    }
    else {
      this.cardService.addCard(productId,this.sessionService.username,this.qtyForm.get('qty').value).subscribe(
        () => {
          $("#modal2").modal('close');
          this.cardService.getCard(this.sessionService.username);
        });
    }
  }

  getItemIdArticle(productId)
  {
     return this.idArticle = productId;
  }
}
