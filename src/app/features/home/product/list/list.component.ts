import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../../core/services/product.service';
import {ProductModel} from '../../../../core/models/ProductModel';

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
   */
  constructor(public productService: ProductService) { }

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
    console.log(productId);
  }

}
