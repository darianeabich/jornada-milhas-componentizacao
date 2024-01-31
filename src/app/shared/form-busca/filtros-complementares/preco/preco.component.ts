import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';
import { PassagensService } from 'src/app/core/services/passagens.service';

@Component({
  selector: 'app-preco',
  templateUrl: './preco.component.html',
  styleUrls: ['./preco.component.scss'],
})
export class PrecoComponent {
  precoMin: FormControl<number>;
  precoMax: FormControl<number>;
  // precoMin?: number = 200;
  // precoMax?: number = 1500;

  constructor(
    public passagemService: PassagensService,
    private formBuscaService: FormBuscaService
  ) {
    this.precoMin = this.formBuscaService.obterControle<number>('precoMin');
    this.precoMax = this.formBuscaService.obterControle<number>('precoMax');
  }
}
