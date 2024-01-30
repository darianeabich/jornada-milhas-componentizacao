export interface DadosBusca {
  somenteIda?: boolean;
  passageirosAdultos?: number;
  passageirosCriancas?: number;
  passageirosBebes?: number;
  tipo?: string;
  origemId?: number;
  destinoId?: number;
  dataIda: string;
  dataVolta?: string;
  precoMin?: number;
  precoMax?: number;
  conexoes?: number;
  tempoVoo?: number;
  companhiasId?: number[];
  pagina: number;
  porPagina: number;
}
