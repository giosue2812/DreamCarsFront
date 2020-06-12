import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../../../core/services/category.service';
import {CategoryModel} from '../../../../core/models/CategoryModel';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  /**
   * @type categoryModel:CategoryModel[]
   */
  categoryModel: CategoryModel[];

  /**
   * @param categoryService: CategoryService
   */
  constructor(private categoryService:CategoryService) { }

  /**
   * @description Get list of categories
   */
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      data => {
        this.categoryModel = data;
      })
  }

  /**
   * @param categoryId: Number
   * @description Remove category
   */
  onRemove(categoryId){
    console.log(categoryId);
  }
}
