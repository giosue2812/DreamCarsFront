import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../../../../core/services/category.service';

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
   * @param formBuilder: FormBuilder
   * @param categoryService: CategoryService
   */
  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.initForm();
  }

  /**
   * @description Form to add a new category
   */
  initForm(){
    this.newFormGroup = this.formBuilder.group({
      name: new FormControl('',[Validators.required])
    })
  }

  /**
   * @description Submition of the new category
   */
  onSubmit(){
    console.log(this.newFormGroup.getRawValue());
  }
}
