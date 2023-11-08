import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Token } from '../types/Token.interface';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private userService: UserService) {}

  autenticar(email: string, senha: string): Observable<HttpResponse<Token>> {
    return this.http
      .post<Token>(
        `${this.apiUrl}/auth/login`,
        { email, senha },
        { observe: 'response' }
      )
      .pipe(
        tap((res) => {
          const authToken = res.body?.access_token || '';
          this.userService.salvarToken(authToken);
        })
      );
  }
}
