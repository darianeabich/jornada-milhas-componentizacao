import { Injectable } from '@angular/core';
import {
  FormControl,
  FormGroup,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { DialogService } from 'primeng/dynamicdialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { DadosBusca } from '../types/DadosBusca.interface';

@Injectable({
  providedIn: 'root',
})
export class FormBuscaService {
  formBusca: FormGroup;

  constructor(private dialogService: DialogService) {
    const somenteIda = new FormControl(false, [Validators.required]);
    const dataVolta = new FormControl(null, [Validators.required]);

    this.formBusca = new UntypedFormGroup({
      somenteIda,
      origem: new FormControl(null, [Validators.required]),
      destino: new FormControl(null, [Validators.required]),
      tipo: new FormControl('Executiva'),
      passageirosAdultos: new FormControl(1),
      passageirosCriancas: new FormControl(0),
      passageirosBebes: new FormControl(0),
      dataIda: new FormControl(null, [Validators.required]),
      dataVolta,
      conexoes: new FormControl(null),
      companhias: new FormControl(null),
      precoMin: new FormControl(200),
      precoMax: new FormControl(1500),
    });

    somenteIda.valueChanges.subscribe((somenteIda) => {
      console.log('somente ida mudou', somenteIda);
      if (somenteIda) {
        console.log('é somente ida');
        dataVolta.disable();
        dataVolta.setValue(null);
        dataVolta.setValidators(null);
        dataVolta.updateValueAndValidity();
      } else {
        console.log('é ida&volta');
        dataVolta.enable();
        dataVolta.setValidators([Validators.required]);
        dataVolta.updateValueAndValidity();
      }
    });
  }

  obterControle<T>(nome: string): UntypedFormControl {
    const control = this.formBusca.get(nome);

    if (!control) {
      throw new Error(`Control ${nome} não encontrado`);
    }

    return control as UntypedFormControl;
  }

  obterDadosDeBusca(): DadosBusca {
    const dataIdaControl = this.obterControle<Date>('dataIda')?.value;

    const dadosBusca: DadosBusca = {
      pagina: 1,
      porPagina: 50,
      somenteIda: this.obterControle<boolean>('somenteIda')?.value,
      origemId: this.obterControle<number>('origem')?.value.id,
      destinoId: this.obterControle<number>('destino')?.value.id,
      tipo: this.obterControle<string>('tipo')?.value,
      passageirosAdultos:
        this.obterControle<number>('passageirosAdultos')?.value,
      passageirosCriancas: this.obterControle<number>('passageirosCriancas')
        ?.value,
      passageirosBebes: this.obterControle<number>('passageirosBebes')?.value,
      dataIda: dataIdaControl.toISOString(),
      dataVolta: this.obterControle<string>('dataVolta')?.value,
    };

    const dataVoltaControl = this.obterControle<Date>('dataVolta')?.value;
    if (dataVoltaControl) {
      dadosBusca.dataVolta = dataVoltaControl.toISOString();
    }

    const conexoesControl = this.obterControle<number>('conexoes');
    if (conexoesControl.value) {
      dadosBusca.conexoes = conexoesControl.value;
    }

    const companhiasControl = this.obterControle<number[]>('companhias');
    if (companhiasControl.value) {
      dadosBusca.companhiasId = companhiasControl.value;
    }

    const precoMinControl = this.obterControle<number>('precoMin');
    if (precoMinControl.value) {
      dadosBusca.precoMin = precoMinControl.value;
    }

    const precoMaxControl = this.obterControle<number>('precoMin');
    if (precoMaxControl.value) {
      dadosBusca.precoMax = precoMaxControl.value;
    }

    return dadosBusca;
  }

  openModalViajante() {
    const ref = this.dialogService.open(ModalComponent, {
      header: 'Viajante',
      width: '520px',
    });

    ref.onClose.subscribe((viajante) => {
      console.log('Viajante: ', viajante);
    });
  }

  alterarClasse(event: any, tipo: string) {
    if (event.checked) {
      this.formBusca.patchValue({
        tipo,
      });
      console.log('Trocou de tipo: ', tipo);
    }
  }

  trocarOrigemDestino(): void {
    const origem = this.formBusca.get('origem')?.value;
    const destino = this.formBusca.get('destino')?.value;

    this.formBusca.patchValue({
      origem: destino,
      destino: origem,
    });
  }

  get formEstaValido() {
    return this.formBusca.valid;
  }

  /*
   * Retorna o formulário
   */
  getForm(): UntypedFormGroup {
    return this.formBusca;
  }
}
