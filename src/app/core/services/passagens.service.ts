import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pagination } from '../types/Pagination.interface';

@Injectable({
  providedIn: 'root',
})
export class PassagensService {
  apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  getPassagens(search: any): Observable<Pagination> {
    const params = search;
    return this.httpClient.get<Pagination>(`${this.apiUrl}/passagem/search`, {
      params,
    });
  }
}
