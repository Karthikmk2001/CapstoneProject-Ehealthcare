import { Component } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Icategory } from '../models/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css'],
})
export class CategoryAddComponent {
  categoryitem: Icategory = {
    categoryId: 0,
    categoryName: '',
    categoryDescription: '',
    categoryAddedDate: new Date(),
  };
  constructor(
    private _catgoryService: CategoryService,
    private _routes: Router
  ) {}
  addCategory() {
    this._catgoryService.createCategory(this.categoryitem).subscribe(
      (result) => {
        console.log(result);
        alert('Category Added');
        this._routes.navigate(['/category-list']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
