import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Depoimento } from '../types/Depoimento.interface';

@Injectable({
  providedIn: 'root',
})
export class DepoimentoService {
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getDepoimentos(): Observable<Depoimento[]> {
    return this.http.get<Depoimento[]>(`${this.apiUrl}/depoimentos`);
  }
}
