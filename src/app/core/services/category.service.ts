import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {CategoryModel} from '../models/CategoryModel';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  /**
   * @type category$: BehaviorSubject<CategoryModel[]>
   */
  category$ = new BehaviorSubject<CategoryModel[]>([]);

  /**
   * @param httpClient: HttpClient
   */
  constructor(private httpClient:HttpClient) { }

  /**
   * @return Observable<CategoryModel[]>
   * @description Return an array of category
   */
  getCategories():Observable<CategoryModel[]>
  {
    this.httpClient.get<CategoryModel[]>(environment.url+'categories').subscribe(
      data => {
        this.category$.next(data);
      }
    );
    return this.category$;
  }
}
