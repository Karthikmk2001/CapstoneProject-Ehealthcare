import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iorder } from '../models/orders';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private _http: HttpClient) {}
  createOrder(order: Iorder): Observable<Iorder> {
    return this._http.post<Iorder>(
      `http://localhost:5095/api/Order/AddOrder`,
      order
    );
  }
}
