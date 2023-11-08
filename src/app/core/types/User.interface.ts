import { Estado } from './Estado.interface';

export interface User {
  nome: string;
  nascimento: string;
  cpf: string;
  telefone: string;
  email: string;
  senha: string;
  genero: string;
  cidade: string;
  estado: Estado;
}
