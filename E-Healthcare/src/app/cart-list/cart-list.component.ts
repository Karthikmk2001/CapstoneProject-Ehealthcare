import { Component } from '@angular/core';
import { Imedicine } from '../models/medicines';
import { MedicinesService } from '../services/medicines.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent {
  constructor(private _router: Router) {}

  items: any;
  total: number = 0;

  ngOnInit() {
    this.items = [];
    let cart = JSON.parse(localStorage.getItem('cart') || '{}');
    console.log(cart);
    for (var i = 0; i < cart.length; i++) {
      let item = JSON.parse(cart[i]);
      this.items.push({
        id: item.medicine_id,
        price: item.medicine_price,
        image: item.medicine_img,
        product: item.medicine_name,
        quantity: item.medicine_quantity,
      });
      this.total += item.medicine_price * item.medicine_quantity;
    }
  }

  isCartEmpty(): boolean {
    if (this.items.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  removeItem(productID: any) {
    let cart: any = JSON.parse(localStorage.getItem('cart') || '{}');

    cart.splice(productID, 1);

    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.reload();
  }

  increment(productID: any) {
    let cart: any = JSON.parse(localStorage.getItem('cart') || '{}');

    JSON.parse(cart[productID]).medicine_quantity += 1;

    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.reload();
  }

  decrement(productID: any) {
    let cart: any = JSON.parse(localStorage.getItem('cart') || '{}');

    cart[productID].medicine_quantity -= 1;

    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.reload();
  }
  checkout() {
    this._router.navigate(['/checkout']);
  }
}
