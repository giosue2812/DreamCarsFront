import { Component, OnInit } from '@angular/core';
import {ProductModel} from '../../../../core/models/ProductModel';
import {ProductService} from '../../../../core/services/product.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

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
      search: new FormControl('',[Validators.required])
    })
  }

  onSubmitForm(){
    console.log(this.searchForm.value);
  }

}
