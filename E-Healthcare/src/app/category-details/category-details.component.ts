import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Icategory } from '../models/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css'],
})
export class CategoryDetailsComponent {
  id: any;
  errorMessage: string = '';
  categoryitem: any = [];
  constructor(
    private _categoryService: CategoryService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}
  ngOnInit() {
    this.id = this._route.snapshot.params[`id`];
    console.log(this.id);
    this._categoryService.getCategoryById(this.id).subscribe(
      (result) => {
        this.categoryitem = result;
        console.log(result);
        console.log(this.categoryitem);
        //console.log(this.categoryitem[0].categoryName);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  deleteCat(): void {
    this._categoryService.deleteCategoryById(this.id).subscribe(
      () => {
        this.errorMessage = '';
        alert('Category deleted');
        this._router.navigate(['/category-list']);
      },
      (error: any) => {
        this.errorMessage = 'there is a error while deleting';

        console.log(error);
      }
    );
  }
}
