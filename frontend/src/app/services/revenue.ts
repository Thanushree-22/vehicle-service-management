import { Injectable } from '@angular/core';

import { HttpClient }
from '@angular/common/http';

import { Observable }
from 'rxjs';

import {
  Revenue,
  DailyRevenue,
  MonthlyRevenue,
  YearlyRevenue
}
from '../models/revenue.model';

import { API_URLS }
from '../constants/urls';


@Injectable({
  providedIn: 'root',
})
export class RevenueService {
  private apiUrl =
    API_URLS.REVENUE;
  
    constructor(
    private http: HttpClient
  ) {}

   getTotalRevenue():
  Observable<Revenue> {

    return this.http.get<Revenue>(
      `${this.apiUrl}/total`
    );
  }


  getDailyRevenue():
  Observable<DailyRevenue[]> {

    return this.http.get<DailyRevenue[]>(
      `${this.apiUrl}/daily`
    );
  }

   getMonthlyRevenue():
  Observable<MonthlyRevenue[]> {

    return this.http.get<MonthlyRevenue[]>(
      `${this.apiUrl}/monthly`
    );
  }


  getYearlyRevenue():
  Observable<YearlyRevenue[]> {

    return this.http.get<YearlyRevenue[]>(
      `${this.apiUrl}/yearly`
    );
  }
}
