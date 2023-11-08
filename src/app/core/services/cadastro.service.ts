import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../types/User.interface';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  cadastrar(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/auth/cadastro`, user);
  }

  buscarCadastro(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/auth/perfil`);
  }

  atualizarCadastro(user: User): Observable<User> {
    return this.http.patch<User>(`${this.apiUrl}/auth/perfil`, user);
  }
}
