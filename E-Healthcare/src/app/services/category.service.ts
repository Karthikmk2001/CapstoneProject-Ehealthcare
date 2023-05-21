import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Icategory } from '../models/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private _http: HttpClient) {}
  getCategories(): Observable<Icategory[]> {
    return this._http.get<Icategory[]>(
      'http://localhost:5095/api/Category/GetCategoryList'
    );
  }
  getCategoryById(id: number): Observable<Icategory> {
    return this._http.get<Icategory>(
      `http://localhost:5095/api/Category/GetCategoryById?CategoryId=${id}`
    );
  }
  createCategory(categoryitems: Icategory): Observable<Icategory> {
    return this._http.post<Icategory>(
      `http://localhost:5095/api/Category/AddCategory`,
      categoryitems
    );
  }

  updateCategoryById(
    categoryitems: Icategory,
    id: number
  ): Observable<Icategory> {
    return this._http.put<Icategory>(
      `http://localhost:5095/api/Category/UpdateCategoryById?CategoryId=${id}`,
      categoryitems
    );
  }

  deleteCategoryById(id: number): Observable<Icategory> {
    return this._http.delete<Icategory>(
      `http://localhost:5095/api/Category/DeleteCategoryById?CategoryId=${id}`
    );
  }
}
