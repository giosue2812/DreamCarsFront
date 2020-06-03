import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {CategoryModel} from '../models/CategoryModel';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  isLoading$ = new BehaviorSubject<boolean>(false);
  category$ = new BehaviorSubject<CategoryModel[]>([]);
  constructor(private httpClient:HttpClient) { }

  getCategories():Observable<CategoryModel[]>
  {
    this.isLoading$.next(true);
    this.httpClient.get<CategoryModel[]>(environment.url+'categories').subscribe(
      data => {
        this.category$.next(data);
        this.isLoading$.next(false);
      }
    );
    return this.category$;
  }
}
