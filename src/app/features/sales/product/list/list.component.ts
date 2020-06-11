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

  /**
   * @type productModel: ProductModel[]
   */
  productModel: ProductModel[];
  /**
   * @type searchForm: FormGroup
   */
  searchForm: FormGroup;

  /**
   * @param productService: ProductService
   * @param formBuilder: FormBuilder
   */
  constructor(public productService:ProductService, private formBuilder:FormBuilder) { }

  /**
   * @description Get a list of product
   */
  ngOnInit(): void {
    this.productService.getProductList().subscribe(
      data => {
        this.productModel = data
      }
    );
    this.initForm();
  }

  /**
   * @description Form to search
   */
  initForm(){
    this.searchForm = this.formBuilder.group({
      keyWord: new FormControl('',[Validators.required])
    })
  }

  /**
   * @description to search a product
   */
  onSubmitForm(){
    this.productService.getSearchProduct(this.searchForm.getRawValue()).subscribe(
      data => {
        this.productModel = data;
      }
    )
  }

}
