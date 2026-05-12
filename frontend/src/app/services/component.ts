import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Component } from '../models/component.model';
import { API_URLS }
from '../constants/urls';

@Injectable({
  providedIn: 'root',
})
export class ComponentService {

  private apiUrl =
    API_URLS.COMPONENTS;


  constructor(
    private http: HttpClient
  ) {}


  getComponents():
  Observable<Component[]> {

    return this.http.get<Component[]>(
      `${this.apiUrl}/`
    );
  }


  createComponent(
    component: Component
  ): Observable<Component> {

    return this.http.post<Component>(
      `${this.apiUrl}/`,
      component
    );
  }

   deleteComponent(
    id: number
  ): Observable<any> {

    return this.http.delete(
      `${this.apiUrl}/${id}`
    );
  }
  
}
