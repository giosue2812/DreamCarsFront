import { Component, OnInit } from '@angular/core';
import {ProductModel} from '../../../../core/models/ProductModel';
import {ProductService} from '../../../../core/services/product.service';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SupplierModel} from '../../../../core/models/SupplierModel';
import {SupplierService} from '../../../../core/services/supplier.service';
import {CategoryModel} from '../../../../core/models/CategoryModel';
import {CategoryService} from '../../../../core/services/category.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
    productModel: ProductModel[];
    supplierModel: SupplierModel[];
    categoryModel: CategoryModel[];

    productFormUpdate: FormGroup;

  constructor(public productService: ProductService,
              public supplierService: SupplierService,
              public categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.productService.getProduct(this.activatedRoute.snapshot.paramMap.get('productId')).subscribe(
      data => {
        this.productModel = data;
      }
    );
    this.supplierService.getSuppliers().subscribe(
      data => {
        this.supplierModel = data
      }
    );
    this.categoryService.getCategories().subscribe(
      data => {
        this.categoryModel = data
      }
    );
    this.initForm();
  }

  initForm(){
    this.productFormUpdate = this.formBuilder.group({
      product: new FormControl(''),
      price: new FormControl(''),
      picture: new FormControl(''),
      description: new FormControl(''),
      avaibility: new FormControl(''),
      category: new FormControl(''),
      supplier: new FormControl('')
      }, {validators: [Validators.required]})
  }

  onSubmitForm(productId){
    console.log(productId);
    console.log(this.productFormUpdate.getRawValue());
  }
}
