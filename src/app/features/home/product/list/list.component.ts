import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../../core/services/product.service';
import {ProductModel} from '../../../../core/models/ProductModel';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  productModel:ProductModel[];

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductList().subscribe(
      data => {
        this.productModel = data
      }
    )
  }

  addCard(productId){
    console.log(productId);
  }

}
