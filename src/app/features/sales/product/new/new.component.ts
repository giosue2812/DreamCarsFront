import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryModel} from '../../../../core/models/CategoryModel';
import {SupplierModel} from '../../../../core/models/SupplierModel';
import {ProductService} from '../../../../core/services/product.service';
import {CategoryService} from '../../../../core/services/category.service';
import {SupplierService} from '../../../../core/services/supplier.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  newFormGroup: FormGroup;
  categoryModel: CategoryModel[];
  supplierModel: SupplierModel[];

  constructor(public productService: ProductService,
              public categoryService: CategoryService,
              public supplierService: SupplierService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      data => {
        this.categoryModel = data;
      }
    );
    this.supplierService.getSuppliers().subscribe(
      data => {
        this.supplierModel = data;
      }
    );
    this.initForm();
  }

  initForm(){
    this.newFormGroup = this.formBuilder.group({
      product: new FormControl(''),
      price: new FormControl(''),
      picture: new FormControl(''),
      description: new FormControl(''),
      avaibility: new FormControl(''),
      category: new FormControl(''),
      supplier: new FormControl('')
    },{validators: [Validators.required]})
  }

  onSubmitForm(){
    console.log(this.newFormGroup.getRawValue());
  }
}
