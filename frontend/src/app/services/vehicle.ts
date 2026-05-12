import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Vehicle } from '../models/vehicle.model';
import { API_URLS } from '../constants/urls';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
   private apiUrl =
  API_URLS.VEHICLES;


  constructor(
    private http: HttpClient
  ) {}

   getVehicles(): Observable<Vehicle[]> {

    return this.http.get<Vehicle[]>(
      `${this.apiUrl}/`
    );
  }

  createVehicle(
    vehicle: Vehicle
  ): Observable<Vehicle> {

    return this.http.post<Vehicle>(
      `${this.apiUrl}/`, vehicle
    );
  }

  deleteVehicle(
    id: number
  ): Observable<any> {

    return this.http.delete(
      `${this.apiUrl}/${id}`
    );
  }
}
