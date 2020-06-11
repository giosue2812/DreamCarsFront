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

  /**
   * @type newFormGroup: FormGroup
   */
  newFormGroup: FormGroup;
  /**
   * @type categoryModel:CategoryModel[]
   */
  categoryModel: CategoryModel[];
  /**
   * @type supplierModel: SupplierModel[]
   */
  supplierModel: SupplierModel[];

  /**
   * @param productService: ProductService
   * @param categoryService: CategoryService
   * @param supplierService: SupplierService
   * @param formBuilder: FormBuilder
   * @param router: Router
   */
  constructor(public productService: ProductService,
              public categoryService: CategoryService,
              public supplierService: SupplierService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  /**
   * @description List of categories and suppliers and init form
   */
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

  /**
   * @description Add new product
   */
  initForm(){
    this.newFormGroup = this.formBuilder.group({
      product: new FormControl('',[Validators.required]),
      price: new FormControl('',[Validators.required]),
      picture: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required]),
      avaibility: new FormControl('',[Validators.required]),
      category: new FormGroup({name: new FormControl('')},[Validators.required]),
      supplier: new FormGroup({name: new FormControl('')},[Validators.required])
    })
  }

  /**
   * @description Add to create product
   */
  onSubmitForm(){
    this.productService.createProduct(this.newFormGroup.getRawValue()).subscribe();
    this.router.navigateByUrl('');
  }
}
