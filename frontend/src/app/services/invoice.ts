import { Injectable } from '@angular/core';

import { HttpClient }
from '@angular/common/http';

import { Observable }
from 'rxjs';

import { Invoice }
from '../models/invoice.model';

import { API_URLS }
from '../constants/urls';


@Injectable({
  providedIn: 'root',
})
export class InvoiceService {

  private apiUrl =
    API_URLS.INVOICES;

    constructor(
    private http: HttpClient
  ) {}

   getInvoices():
  Observable<Invoice[]> {

    return this.http.get<Invoice[]>(
      `${this.apiUrl}/`
    );
  }


  generateInvoice(
    issueId: number
  ): Observable<Invoice> {

    return this.http.post<Invoice>(
      `${this.apiUrl}/generate/${issueId}`,
      {}
    );
  }
}
