import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';
import { OpcoesDeParada } from 'src/app/core/types/OpcoesDeParada.interface';

@Component({
  selector: 'app-paradas',
  templateUrl: './paradas.component.html',
  styleUrls: ['./paradas.component.scss'],
})
export class ParadasComponent implements OnInit {
  opcoesSelecionadas: OpcoesDeParada | null = null;
  opcoes: OpcoesDeParada[] = [
    {
      display: 'Direto',
      value: '0',
    },
    {
      display: '1 conexão',
      value: '1',
    },
    {
      display: '2 conexões',
      value: '2',
    },
    {
      display: 'Mais de 2 conexões',
      value: '3',
    },
  ];

  conexoesControl: FormControl<number | null>;

  constructor(private formBuscaService: FormBuscaService) {
    this.conexoesControl =
      this.formBuscaService.obterControle<number>('conexoes');
  }

  ngOnInit() {
    this.conexoesControl.valueChanges.subscribe((value) => {
      if (!value) {
        this.opcoesSelecionadas = null;
      }
    });
  }
}
