import { Component } from '@angular/core';
import { MedicinesService } from '../services/medicines.service';
import { Imedicine } from '../models/medicines';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css'],
})
export class MedicineListComponent {
  medicineitems: Imedicine[] = [];

  constructor(private _medicineService: MedicinesService) {}

  ngOnInit() {
    this._medicineService.getMedicines().subscribe((result) => {
      this.medicineitems = result;
      console.log(this.medicineitems);
    });
  }

  title: string = 'Medicines Available';
}
