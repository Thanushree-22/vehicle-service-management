import { Injectable } from '@angular/core';
import { HttpClient }
from '@angular/common/http';

import { Observable }
from 'rxjs';

import { Issue } from '../models/issue.model';

import { API_URLS }
from '../constants/urls';


@Injectable({
  providedIn: 'root',
})
export class IssueService {
   private apiUrl =
    API_URLS.ISSUES;

    constructor(
    private http: HttpClient
  ) {}
   getIssues():
  Observable<Issue[]> {

    return this.http.get<Issue[]>(
      `${this.apiUrl}/`
    );
  }


  createIssue(
    issue: Issue
  ): Observable<Issue> {

    return this.http.post<Issue>(
      `${this.apiUrl}/`,
      issue
    );
  }


  deleteIssue(
    id: number
  ): Observable<any> {

    return this.http.delete(
      `${this.apiUrl}/${id}`
    );
  }

  updateIssueStatus(
    id: number,
    status: string
  ): Observable<any> {

    return this.http.put(
      `${this.apiUrl}/${id}/status`,
      { status }
    );
  }
  
}
