import { Passagem } from './Passagem.interface';

export interface Pagination {
  paginaAtual: number;
  ultimaPagina: number;
  total: number;
  precoMin: number;
  precoMax: number;
  resultado: Passagem;
}
