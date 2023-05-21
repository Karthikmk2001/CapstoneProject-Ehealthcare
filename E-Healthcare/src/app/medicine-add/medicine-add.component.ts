import { Component } from '@angular/core';
import { MedicinesService } from '../services/medicines.service';
import { Imedicine } from '../models/medicines';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicine-add',
  templateUrl: './medicine-add.component.html',
  styleUrls: ['./medicine-add.component.css'],
})
export class MedicineAddComponent {
  medicineitem: Imedicine = {
    medicineId: 0,
    medicineName: '',
    price: 0,
    availableQuantity: 0,
    image: '',
    categoryId: 0,
    medicineAddedDate: new Date(),
    medicineAdded: false,
  };
  constructor(
    private _medicineService: MedicinesService,
    private _routes: Router
  ) {}
  addMedicine() {
    this._medicineService.createMedicine(this.medicineitem).subscribe(
      (result) => {
        console.log(result);
        alert('Medicine Added');
        this._routes.navigate(['/medicine-list']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
