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
  opcaoSelecionada: OpcoesDeParada | null = null;
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
        this.opcaoSelecionada = null;
      }
    });
  }

  alternarParada(checked: boolean, opcao: OpcoesDeParada) {
    console.log('parada selecionada => ', opcao, ' - valor: ', checked);
    if (!checked) {
      console.log('desmarcou');
      this.opcaoSelecionada = null;
      this.formBuscaService.formBusca.patchValue({
        conexoes: null,
      });
      return;
    }
    console.log('marcou');
    this.opcaoSelecionada = opcao;
    this.formBuscaService.formBusca.patchValue({
      conexoes: Number(opcao.value),
    });
  }

  paradaSelecionada(event: any, opcao: OpcoesDeParada): boolean {
    console.log('event =>', event.checked);
    console.log('opcao =>', opcao);
    if (event.checked) {
      return this.opcaoSelecionada === opcao;
    } else {
      return false;
    }
  }

  incluirParada(opcao: OpcoesDeParada) {
    if (!this.opcaoSelecionada) {
      return false;
    }

    return this.opcaoSelecionada.value > opcao.value;
  }
}
