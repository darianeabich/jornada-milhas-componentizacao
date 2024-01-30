import { Component, OnInit } from '@angular/core';
import { PassagensService } from 'src/app/core/services/passagens.service';
import { Passagem } from './../../core/types/Passagem.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  passagens: Passagem[] = [];
  constructor(private passagensService: PassagensService) {}

  ngOnInit(): void {
    const buscaPadrao = {
      date: new Date().toISOString(),
      pagina: 1,
      porPagina: 25,
      somenteIda: false,
      passageirosAdultos: 1,
      tipo: 'Executiva',
    };

    this.passagensService
      .getPassagens(buscaPadrao)
      .subscribe((response: any) => {
        console.log(response.resultado);
        this.passagens = response.resultado;
      });
  }
}
