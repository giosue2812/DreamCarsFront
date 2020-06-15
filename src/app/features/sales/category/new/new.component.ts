import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../../../../core/services/category.service';
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
   * @param formBuilder: FormBuilder
   * @param categoryService: CategoryService
   * @param router: Router
   */
  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private router: Router) { }

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
    this.categoryService.newCategory(this.newFormGroup.getRawValue());
    this.router.navigate(['/sales/category'])
  }
}
