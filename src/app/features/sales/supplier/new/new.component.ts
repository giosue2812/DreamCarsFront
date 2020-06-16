import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SupplierService} from '../../../../core/services/supplier.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  /**
   * @type supplierModel: SupplierMode[]
   */
  newSupplierForm: FormGroup;

  /**
   * @param supplierService: SupplierService
   * @param formBuilder: FormBuilder
   * @param router: Router
   */
  constructor(private supplierService: SupplierService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  /**
   * @description Init form to add supplier
   */
  ngOnInit(): void {
    this.intForm();
  }

  /**
   * @description Form to add supplier
   */
  intForm(){
    this.newSupplierForm = this.formBuilder.group({
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

  /**
   * @description Submition of new supplier
   */
  onSubmit(){
    this.supplierService.newSupplier(this.newSupplierForm.getRawValue());
    this.router.navigate(['/sales/supplier']);
  }
}
