import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Imedicine } from '../models/medicines';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MedicinesService {
  constructor(private _http: HttpClient) {}
  getMedicines(): Observable<Imedicine[]> {
    return this._http.get<Imedicine[]>(
      'http://localhost:5095/api/Medicine/GetMedicineList'
    );
  }
  getMedicineById(id: number): Observable<Imedicine> {
    return this._http.get<Imedicine>(
      `http://localhost:5095/api/Medicine/GetMedicineById?MedicineId=${id}`
    );
  }
  createMedicine(medicineitems: Imedicine): Observable<Imedicine> {
    return this._http.post<Imedicine>(
      `http://localhost:5095/api/Medicine/AddMedicine`,
      medicineitems
    );
  }

  updateMedicineById(
    medicineitems: Imedicine,
    id: number
  ): Observable<Imedicine> {
    return this._http.put<Imedicine>(
      `http://localhost:5095/api/Medicine/UpdateMedicineById?MedicineId=${id}`,
      medicineitems
    );
  }

  deleteMedicineById(id: number): Observable<Imedicine> {
    return this._http.delete<Imedicine>(
      `http://localhost:5095/api/Medicine/DeleteMedicineById?MedicineId=${id}`
    );
  }
}
