import { Component, OnInit } from '@angular/core';
import { DepoimentoService } from 'src/app/core/services/depoimento.service';
import { PromocaoService } from 'src/app/core/services/promocao.service';
import { Depoimento } from 'src/app/core/types/Depoimento.interface';
import { Promocao } from 'src/app/core/types/Promocao.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  listaPromocoes: Promocao[] = [];
  listaDepos: Depoimento[] = [];

  constructor(
    private promocaoService: PromocaoService,
    private depoimentoService: DepoimentoService
  ) {}

  ngOnInit(): void {
    this.promocaoService.listar().subscribe((promocoes) => {
      this.listaPromocoes = promocoes;
    });

    this.depoimentoService.getDepoimentos().subscribe((depoimentos) => {
      this.listaDepos = depoimentos;
    });
  }
}
