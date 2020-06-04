import { Component, OnInit } from '@angular/core';
import {ProductModel} from '../../../../core/models/ProductModel';
import {ProductService} from '../../../../core/services/product.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {dashCaseToCamelCase} from '@angular/compiler/src/util';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  productModel: ProductModel[];
  searchForm: FormGroup;
  constructor(private productService:ProductService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.productService.getProductList().subscribe(
      data => {
        this.productModel = data
      }
    );
    this.initForm();
  }

  initForm(){
    this.searchForm = this.formBuilder.group({
      keyWord: new FormControl('',[Validators.required])
    })
  }

  onSubmitForm(){
    this.productService.getSearchProduct(this.searchForm.getRawValue()).subscribe(
      data => {
        this.productModel = data;
      }
    )
  }

}
