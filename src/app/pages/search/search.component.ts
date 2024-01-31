import { Component, OnInit } from '@angular/core';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';
import { PassagensService } from 'src/app/core/services/passagens.service';
import { DadosBusca } from 'src/app/core/types/DadosBusca.interface';
import { Passagem } from './../../core/types/Passagem.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  passagens: Passagem[] = [];
  constructor(
    private passagensService: PassagensService,
    private formBuscaService: FormBuscaService
  ) {}

  ngOnInit(): void {
    const buscaPadrao: DadosBusca = {
      dataIda: new Date().toISOString(),
      pagina: 1,
      porPagina: 25,
      somenteIda: false,
      passageirosAdultos: 1,
      tipo: 'Executiva',
    };

    const busca = this.formBuscaService.formEstaValido
      ? this.formBuscaService.obterDadosDeBusca()
      : buscaPadrao;
    this.passagensService.getPassagens(busca).subscribe((response: any) => {
      console.log(response.resultado);
      this.passagens = response.resultado;
    });
  }

  busca(event: DadosBusca) {
    this.passagensService.getPassagens(event).subscribe((response: any) => {
      console.log(response.resultado);
      this.passagens = response.resultado;
    });
  }
}
