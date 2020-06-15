import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../../../core/services/category.service';
import {ActivatedRoute, Router} from '@angular/router';
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
   * @type editCategoryForm: FormGroup
   */
  editCategoryForm: FormGroup;

  /**
   * @param categoryService: CategoryService
   * @param route: ActivatedRoute
   * @param formBuilder: FormBuilder
   * @param router: Router
   */
  constructor(private categoryService:CategoryService,
              private route:ActivatedRoute,
              private formBuilder: FormBuilder,
              private router:Router) { }

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
      name: new FormControl('', [Validators.required])
    })
  }

  /**
   * @description Submition of the category updated
   */
  onSubmit(){
    this.categoryService.editCategory(this.route.snapshot.paramMap.get('categoryId'),this.editCategoryForm.getRawValue()).subscribe(
      data => {
        this.categoryModel = data;
      }
    );
    this.router.navigate(['/sales/category']);
  }
}
