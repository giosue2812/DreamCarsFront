import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryModel} from '../../../../core/models/CategoryModel';
import {SupplierModel} from '../../../../core/models/SupplierModel';
import {ProductService} from '../../../../core/services/product.service';
import {CategoryService} from '../../../../core/services/category.service';
import {SupplierService} from '../../../../core/services/supplier.service';
import {Router} from '@angular/router';

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
              private formBuilder: FormBuilder,
              private router: Router) { }

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
      category: new FormGroup({name: new FormControl('')}),
      supplier: new FormGroup({name: new FormControl('')})
    },{validators: [Validators.required]})
  }

  onSubmitForm(){
    this.productService.createProduct(this.newFormGroup.getRawValue()).subscribe();
    this.router.navigateByUrl('');
  }
}
