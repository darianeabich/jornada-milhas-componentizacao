import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogService } from 'primeng/dynamicdialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

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
      adultos: new FormControl(1),
      criancas: new FormControl(0),
      bebes: new FormControl(0),
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

  openModalViajante() {
    const ref = this.dialogService.open(ModalComponent, {
      header: 'Viajante',
      width: '520px',
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
