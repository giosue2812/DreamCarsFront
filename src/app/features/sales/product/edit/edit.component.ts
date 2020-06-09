import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ProductModel} from '../../../../core/models/ProductModel';
import {ProductService} from '../../../../core/services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SupplierModel} from '../../../../core/models/SupplierModel';
import {SupplierService} from '../../../../core/services/supplier.service';
import {CategoryModel} from '../../../../core/models/CategoryModel';
import {CategoryService} from '../../../../core/services/category.service';
import {UploadService} from '../../../../core/services/upload.service';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

    selectedFile: File;

    productModel: ProductModel[];
    supplierModel: SupplierModel[];
    categoryModel: CategoryModel[];

    productFormUpdate: FormGroup;


  constructor(public productService: ProductService,
              public supplierService: SupplierService,
              public categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private uploadService: UploadService,
              private formBuilder: FormBuilder,
              private router: Router) { }

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
      product: new FormControl('',[Validators.required]),
      price: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required]),
      avaibility: new FormControl('',[Validators.required]),
      category: new FormGroup({name:new FormControl('')},[Validators.required]),
      supplier: new FormGroup({name: new FormControl('')},[Validators.required])
      })
  }

  submitFile(event){
    this.selectedFile = event.target.files[0];
  }
  onSubmitForm(productId){
    this.uploadService.upload(this.selectedFile,productId);
    this.productService.updateProduct(this.productFormUpdate.getRawValue(),productId);
  }

  onDelete(productId){
    this.productService.removeProduct(productId).subscribe();
    return this.router.navigate(['sales/product'])

  }
}

