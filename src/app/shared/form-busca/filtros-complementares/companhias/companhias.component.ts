import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CompanhiasService } from 'src/app/core/services/companhias.service';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';
import { Companhia } from 'src/app/core/types/Companhia.interface';

@Component({
  selector: 'app-companhias',
  templateUrl: './companhias.component.html',
  styleUrls: ['./companhias.component.scss'],
})
export class CompanhiasComponent implements OnInit {
  companhias: Companhia[] = [];
  selecionadas: Companhia[] = [];

  companhiasControl: FormControl<number[] | null>;

  constructor(
    private formBuscaService: FormBuscaService,
    private companhiasService: CompanhiasService
  ) {
    this.companhiasControl =
      this.formBuscaService.obterControle<number[]>('companhias');
  }

  ngOnInit(): void {
    this.companhiasService.getCompanhias().subscribe((response: any) => {
      this.companhias = response;
    });

    this.companhiasControl.valueChanges.subscribe((value) => {
      if (!value) {
        this.selecionadas = [];
      }
    });
  }

  alternarCompanhias(checked: boolean, opcao: Companhia) {
    if (!checked) {
      this.selecionadas = this.selecionadas.filter((comp) => comp != opcao);
    } else {
      this.selecionadas.push(opcao);
    }

    this.formBuscaService.formBusca.patchValue({
      companhias: this.selecionadas.map((comp) => comp.id),
    });
  }

  companhiaSelecionada(companhia: Companhia): boolean {
    return this.selecionadas.includes(companhia);
  }
}
