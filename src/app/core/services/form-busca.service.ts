import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DialogService } from 'primeng/dynamicdialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Injectable({
  providedIn: 'root',
})
export class FormBuscaService {
  formBusca: FormGroup;

  constructor(private dialogService: DialogService) {
    this.formBusca = new FormGroup({
      somenteIda: new FormControl(false),
      origem: new FormControl(null),
      destino: new FormControl(null),
      dataIda: new FormControl(null),
      dataVolta: new FormControl(null),
      adultos: new FormControl(1),
      criancas: new FormControl(0),
      bebes: new FormControl(0),
      tipo: new FormControl('ECONOMICA'),
    });
  }

  obterControle(nome: string): FormControl {
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
      // if (tipo=== ) {

      // }
      this.formBusca.patchValue({
        tipo,
      });
      console.log('Trocou de tipo: ', tipo);
    }
  }
}
