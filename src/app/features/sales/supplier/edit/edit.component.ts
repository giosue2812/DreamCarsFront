import { Component, OnInit } from '@angular/core';
import {CategoryModel} from '../../../../core/models/CategoryModel';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../../../../core/services/category.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SupplierService} from '../../../../core/services/supplier.service';
import {SupplierModel} from '../../../../core/models/SupplierModel';
import {$t} from 'codelyzer/angular/styles/chars';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  /**
   * @type supplierModel: SupplierModel[]
   */
  supplierModel: SupplierModel[];
  /**
   * @type editCategoryForm: FormGroup
   */
  editSupplierForm: FormGroup;

  /**
   * @param supplierService: SupplierService
   * @param route: ActivatedRoute
   * @param formBuilder: FormBuilder
   * @param router: Router
   */
  constructor(private supplierService:SupplierService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router) { }

  /**
   * @description Get a supplier to edit and inti form
   */
  ngOnInit(): void {
    this.supplierService.getSupplier(this.route.snapshot.paramMap.get('supplierId')).subscribe(
      data => {
        this.supplierModel = data;
      });
    this.initForm();
  }

  initForm(){
    this.editSupplierForm = this.formBuilder.group({
      name: new FormControl('',[Validators.required]),
      street: new FormControl('',[Validators.required]),
      number: new FormControl('',[Validators.required]),
      postalCode: new FormControl('',[Validators.required]),
      city: new FormControl('',[Validators.required]),
      country: new FormControl('',[Validators.required]),
      tel: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.email])
    });
  }

  onSubmit(){
    this.supplierService.editSupplier(this.route.snapshot.paramMap.get('supplierId'),this.editSupplierForm.getRawValue());
    this.router.navigate(['/sales/supplier']);
  }
}
