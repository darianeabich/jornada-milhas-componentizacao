import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DadosBusca } from '../types/DadosBusca.interface';
import { Pagination } from '../types/Pagination.interface';

@Injectable({
  providedIn: 'root',
})
export class PassagensService {
  apiUrl: string = environment.apiUrl;
  precoMin: number = 0;
  precoMax: number = 0;

  constructor(private httpClient: HttpClient) {}

  getPassagens(search: DadosBusca): Observable<Pagination> {
    const params = this.converterParametroParaString(search);

    const obs = this.httpClient.get<Pagination>(
      `${this.apiUrl}/passagem/search?` + params
    );
    obs.pipe(take(1)).subscribe((res) => {
      this.precoMin = res.precoMin;
      this.precoMax = res.precoMax;
    });

    return obs;
  }

  converterParametroParaString(busca: DadosBusca) {
    const query = Object.entries(busca)
      .map(([key, value]) => {
        if (!value) {
          return '';
        }
        return `${key}=${value}`;
      })
      .join('&');
    return query;
  }
}
