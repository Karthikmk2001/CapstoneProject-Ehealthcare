import { Component } from '@angular/core';
import { Imedicine } from '../models/medicines';
import { MedicinesService } from '../services/medicines.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent {
  constructor(
    private _medicineService: MedicinesService,
    private _routes: Router
  ) {}
  searchvalue: any = '';
  searched: boolean = false;
  medicineitemscommon: Imedicine[] = [];
  medicineitems: Imedicine[] = [];
  item: any = [];

  ngOnInit() {
    this._medicineService.getMedicines().subscribe((result) => {
      this.medicineitems = result;
      console.log(this.medicineitems);
    });
  }
  viewDetails(medicine: Imedicine) {
    alert(JSON.stringify(medicine));
  }
  addToCart(medicine: Imedicine) {
    let itemToAdd = {
      medicine_id: medicine.medicineId,
      medicine_name: medicine.medicineName,
      medicine_price: medicine.price,
      medicine_quantity: 1,
      medicine_image: medicine.image,
      medicine_categoryid: medicine.categoryId,
      medicine_date: medicine.medicineAddedDate,
    };
    //console.log(itemToAdd);

    this.medicineitems.map((med) => {
      if (med.medicineId == medicine.medicineId) {
        med.availableQuantity -= 1;
        med.medicineAdded = true;
      }
    });

    if (localStorage.getItem('cart') == null) {
      let cart: any = [];
      cart.push(JSON.stringify(itemToAdd));
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      let cart: any = JSON.parse(localStorage.getItem('cart') || '{}');
      let index: number = -1;
      for (var i = 0; i < cart.length; i++) {
        let cartitem = JSON.parse(cart[i]);
        console.log(cartitem);
        if (cartitem.medicine_id == itemToAdd.medicine_id) {
          index = i;
          break;
        }
      }
      if (index == -1) {
        cart.push(JSON.stringify(itemToAdd));
        localStorage.setItem('cart', JSON.stringify(cart));
      } else {
        let item = JSON.parse(cart[index]);
        item.medicine_quantity += 1;
        cart[index] = JSON.stringify(item);
        localStorage.setItem('cart', JSON.stringify(cart));
      }
    }

    alert('Added to the Cart');

    // window.location.reload()
  }
  onSubmit() {
    this.medicineitems.filter((value) => {
      if (value.medicineName == this.searchvalue) {
        this.medicineitemscommon.push(value);
        this.searched = true;
        this._routes.navigate(['/order']);
      } else if (this.searchvalue == '') {
        this.searched = false;
      }
    });
  }
}
