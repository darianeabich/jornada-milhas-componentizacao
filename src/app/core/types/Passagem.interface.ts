import { Companhia } from './Companhia.interface';
import { Estado } from './Estado.interface';
import { Orcamento } from './Orcamento.interface';

export interface Passagem {
  tipo: string;
  precoIda: number;
  precoVolta: number;
  tacaEmbarque: number;
  conexoes: number;
  tempoVoo: number;
  origem: Estado;
  destino: Estado;
  companhia: Companhia;
  dataIda: string;
  dataVolta: string;
  total: number;
  orcamento: Orcamento;
}
