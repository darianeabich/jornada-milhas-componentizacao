import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

    this.formBusca = new FormGroup({
      somenteIda,
      origem: new FormControl(null, [Validators.required]),
      destino: new FormControl(null, [Validators.required]),
      tipo: new FormControl('Executiva'),
      passageirosAdultos: new FormControl(1),
      passageirosCriancas: new FormControl(0),
      passageirosBebes: new FormControl(0),
      dataIda: new FormControl(null, [Validators.required]),
      dataVolta,
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

  obterControle<T>(nome: string): FormControl {
    const control = this.formBusca.get(nome);

    if (!control) {
      throw new Error(`Control ${nome} não encontrado`);
    }

    return control as FormControl;
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
      passageirosAdultos: this.obterControle<number>('adultos')?.value,
      passageirosCriancas: this.obterControle<number>('criancas')?.value,
      passageirosBebes: this.obterControle<number>('bebes')?.value,
      dataIda: dataIdaControl.toISOString(),
      dataVolta: this.obterControle<string>('dataVolta')?.value,
    };

    const dataVoltaControl = this.obterControle<Date>('dataVolta')?.value;
    if (dataVoltaControl) {
      dadosBusca.dataVolta = dataVoltaControl.toISOString();
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
  getForm(): FormGroup {
    return this.formBusca;
  }
}
