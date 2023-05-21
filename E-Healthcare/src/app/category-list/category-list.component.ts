import { Component } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Icategory } from '../models/category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent {
  categoryitems: Icategory[] = [];

  constructor(private _categoryService: CategoryService) {}

  ngOnInit() {
    this._categoryService.getCategories().subscribe((result) => {
      this.categoryitems = result;
      console.log(this.categoryitems);
    });
  }

  title: string = 'Categories Available';
}
