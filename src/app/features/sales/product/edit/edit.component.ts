import { Component, OnInit } from '@angular/core';
import {ProductModel} from '../../../../core/models/ProductModel';
import {ProductService} from '../../../../core/services/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
   productModel: ProductModel[];

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
  }

}
