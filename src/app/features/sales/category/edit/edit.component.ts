import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../../../core/services/category.service';
import {ActivatedRoute} from '@angular/router';
import {CategoryModel} from '../../../../core/models/CategoryModel';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  /**
   * @type categoryModel: CategoryModel[]
   */
  categoryModel:CategoryModel[];
  /**
   * @type categoryCheck: CategoryModel[]
   */
  categoryCheck :CategoryModel[];
  /**
   * @type editCategoryForm: FormGroup
   */
  editCategoryForm: FormGroup;

  /**
   * @param categoryService: CategoryService
   * @param route: ActivatedRoute
   * @param formBuilder: FormBuilder
   */
  constructor(private categoryService:CategoryService,
              private route:ActivatedRoute,
              private formBuilder: FormBuilder) { }

  /**
   * @description Get a category to edit and init form to edit
   */
  ngOnInit(): void {
    this.categoryService.getCategory(this.route.snapshot.paramMap.get('categoryId')).subscribe(
      data => {
        this.categoryModel = data;
      }
    );
    this.initForm();
  }

  /**
   * @description Form to edit
   */
  initForm() {
    this.editCategoryForm = this.formBuilder.group({
      category: new FormControl('', [Validators.required])
    })
  }

  /**
   * @description Submition of the category updated
   */
  onSubmit(){
    console.log(this.editCategoryForm.getRawValue());
  }
}
