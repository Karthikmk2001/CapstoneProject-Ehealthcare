import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Imedicine } from '../models/medicines';
import { MedicinesService } from '../services/medicines.service';

@Component({
  selector: 'app-medicine-update',
  templateUrl: './medicine-update.component.html',
  styleUrls: ['./medicine-update.component.css'],
})
export class MedicineUpdateComponent {
  id: any;
  medicineitem: any = [];
  constructor(
    private _medicineService: MedicinesService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}
  ngOnInit() {
    this.id = this._route.snapshot.params[`id`];
    this._medicineService.getMedicineById(this.id).subscribe(
      (result) => {
        console.log(result);
        //this.fooditem = result;
        this.medicineitem = result;
        console.log(this.medicineitem);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  updateMedicine() {
    this._medicineService
      .updateMedicineById(
        {
          medicineId: this.medicineitem[0].medicineId,
          medicineName: this.medicineitem[0].medicineName,
          price: this.medicineitem[0].price,
          availableQuantity: this.medicineitem[0].availableQuantity,
          image: this.medicineitem[0].image,
          categoryId: this.medicineitem[0].categoryId,
          medicineAddedDate: this.medicineitem[0].medicineAddedDate,
        },
        this.id
      )
      .subscribe(
        (result) => {
          console.log(result);
          alert('Medicine Details Updated!');
          this._router.navigate(['/medicine-list']);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
