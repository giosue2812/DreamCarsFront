import {Component, OnInit} from '@angular/core';
import {ProductModel} from '../../../../core/models/ProductModel';
import {ProductService} from '../../../../core/services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SupplierModel} from '../../../../core/models/SupplierModel';
import {SupplierService} from '../../../../core/services/supplier.service';
import {CategoryModel} from '../../../../core/models/CategoryModel';
import {CategoryService} from '../../../../core/services/category.service';
import {UploadService} from '../../../../core/services/upload.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  /**
   * @type selectedFile: File
   */
  selectedFile: File;
  /**
   * @type productModel: ProductModel[]
   */
  productModel: ProductModel[];
  /**
   * @type supplierModel: SupplierModel[]
   */
  supplierModel: SupplierModel[];
  /**
   * @type categoryModel:CategoryModel[]
   */
  categoryModel: CategoryModel[];
  /**
   * @type productFormUpdate: FormGroup
   */
  productFormUpdate: FormGroup;

  /**
   * @param productService: ProductService
   * @param supplierService: SupplierService
   * @param categoryService: CategoryService
   * @param activatedRoute: ActivatedRoute
   * @param uploadService: UploadService
   * @param formBuilder: FormBuilder
   * @param router: Router
   */
  constructor(public productService: ProductService,
              public supplierService: SupplierService,
              public categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private uploadService: UploadService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  /**
   * @description Get product id and list of suppliers and categories and init form
   */
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

  /**
   * @description Form to edit form
   */
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

  /**
   * @param event Event
   * @description Event object to get a file to upload
   */
  submitFile(event){
    this.selectedFile = event.target.files[0];
  }

  /**
   * @param productId Number
   * @description Upload a picture to updateProduct
   */
  onSubmitForm(productId){
    this.uploadService.upload(this.selectedFile,productId);
    this.productService.updateProduct(this.productFormUpdate.getRawValue(),productId);
  }

  /**
   * @param productId Number
   * @description Remove product
   * @return Router
   */
  onDelete(productId){
    this.productService.removeProduct(productId).subscribe();
    return this.router.navigate(['sales/product'])

  }
}

