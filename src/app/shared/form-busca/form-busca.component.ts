import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { DialogService } from 'primeng/dynamicdialog';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';
import { UnidadeFederativaService } from 'src/app/core/services/unidade-federativa.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss'],
})
export class FormBuscaComponent implements OnInit {
  @Output() realizarBusca = new EventEmitter();
  stateOptions: any[] = [];
  filteredCountries: string[] = [];

  passageiros: string = '1 adulto';
  tipoPassagem: string = 'Executiva';
  iconCheck: string = 'pi pi-check';

  passagensForm: UntypedFormGroup;

  constructor(
    private fb: UntypedFormBuilder,
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
      const formBuscaValue = this.formBuscaService.obterDadosDeBusca();
      this.realizarBusca.emit(formBuscaValue);
    } else {
      alert('Preencha todos os campos');
    }
  }

  show() {
    const ref = this.dialogService.open(ModalComponent, {
      header: 'Viajante',
      width: '520px',
    });

    ref.onClose.subscribe((viajante) => {
      console.log('Viajante: ', viajante);
      if (viajante) {
        if (viajante.passageirosAdultos) {
          console.log('tem passageiro adulto = ', viajante.passageirosAdultos);
          let qtdAdulto = viajante.passageirosAdultos;
          if (qtdAdulto > 1) {
            this.passageiros = `${viajante.passageirosAdultos} adultos`;
          } else if (qtdAdulto == 1) {
            this.passageiros = `${viajante.passageirosAdultos} adulto`;
          }
        }

        if (viajante.passageirosCriancas) {
          let qtdCrianca = viajante.passageirosCriancas;
          if (qtdCrianca > 1) {
            this.passageiros =
              this.passageiros + `, ${viajante.passageirosCriancas} crianças`;
          } else if (qtdCrianca == 1) {
            this.passageiros =
              this.passageiros + `, ${viajante.passageirosCriancas} criança`;
          }
        }

        if (viajante.passageirosBebes) {
          let qtdBebe = viajante.passageirosBebes;
          if (qtdBebe > 1) {
            this.passageiros =
              this.passageiros + `, ${viajante.passageirosBebes} bebês`;
          } else if (qtdBebe == 1) {
            this.passageiros =
              this.passageiros + `, ${viajante.passageirosBebes} bebê`;
          }
        }

        if (viajante.tipo) {
          let tipoPassagem = viajante.tipo;
          if (tipoPassagem === 'Executiva') {
            this.tipoPassagem = 'Executiva';
          } else {
            this.tipoPassagem = 'Econômica';
          }
        }

        console.log('passageiros => ', this.passageiros);
      }
    });
    // this.formBuscaService.openModalViajante();
  }
}
