import { Component, OnInit } from '@angular/core';
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
  stateOptions: any[] = [];
  filteredCountries: string[] = [];

  oneAdult: string = '1 adulto';
  iconCheck: string = 'pi pi-check';

  passagensForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogService: DialogService,
    private ufService: UnidadeFederativaService,
    public formBuscaService: FormBuscaService
  ) {}

  ngOnInit(): void {
    this.initForm();

    this.stateOptions = [
      {
        label: 'IDA E VOLTA',
        value: true,
      },
      {
        label: 'SOMENTE IDA',
        value: false,
      },
    ];
  }

  initForm() {
    this.passagensForm = this.fb.group({
      somenteIda: [true],
      adulto: [true],
      classeEconomica: [true],
      origem: [''],
      destino: [''],
      dataIda: [''],
      dataVolta: [''],
    });
  }

  search(event: any) {
    this.ufService.listar().subscribe((estados) => {
      estados.forEach((estado) => {
        this.filteredCountries.push(estado.nome);
      });
    });
  }

  show() {
    this.formBuscaService.openModalViajante();
  }
}
