import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Icategory } from '../models/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css'],
})
export class CategoryUpdateComponent {
  id: any;
  categoryitem: any = [];
  constructor(
    private _categoryService: CategoryService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}
  ngOnInit() {
    this.id = this._route.snapshot.params[`id`];
    this._categoryService.getCategoryById(this.id).subscribe(
      (result) => {
        console.log(result);
        //this.fooditem = result;
        this.categoryitem = result;
        console.log(this.categoryitem);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  updateCategory() {
    this._categoryService
      .updateCategoryById(
        {
          categoryId: this.categoryitem[0].categoryId,
          categoryName: this.categoryitem[0].categoryName,
          categoryDescription: this.categoryitem[0].categoryDescription,
          categoryAddedDate: this.categoryitem[0].categoryAddedDate,
        },
        this.id
      )
      .subscribe(
        (result) => {
          console.log(result);

          alert('Category Details Updated!');
          this._router.navigate(['/category-list']);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
