import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DialogService } from 'primeng/dynamicdialog';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';
import { UnidadeFederativaService } from 'src/app/core/services/unidade-federativa.service';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss'],
})
export class FormBuscaComponent implements OnInit {
  @Output() realizarBusca = new EventEmitter();
  stateOptions: any[] = [];
  filteredCountries: string[] = [];

  oneAdult: string = '1 adulto';
  iconCheck: string = 'pi pi-check';

  passagensForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogService: DialogService,
    private ufService: UnidadeFederativaService,
    public formBuscaService: FormBuscaService
  ) {
    this.passagensForm = this.formBuscaService.getForm();
  }

  ngOnInit(): void {
    this.stateOptions = [
      {
        label: 'IDA E VOLTA',
        value: false,
      },
      {
        label: 'SOMENTE IDA',
        value: true,
      },
    ];
  }

  // search(event: any) {
  // this.ufService.listar().subscribe((estados) => {
  //   estados.forEach((estado) => {
  //     this.filteredCountries.push(estado.nome);
  //   });
  // });
  // }

  buscar() {
    if (this.formBuscaService.formEstaValido) {
      const formBuscaValue = this.formBuscaService.formBusca.value;
      this.realizarBusca.emit(formBuscaValue);
    } else {
      alert('Preencha todos os campos');
    }
  }

  show() {
    this.formBuscaService.openModalViajante();
  }
}
