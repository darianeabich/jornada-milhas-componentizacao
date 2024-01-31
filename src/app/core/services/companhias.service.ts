import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CompanhiasService {
  apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  getCompanhias() {
    return this.httpClient.get(`${this.apiUrl}/companhias`);
  }
}
