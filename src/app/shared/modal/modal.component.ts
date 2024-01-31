import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  viajanteForm!: UntypedFormGroup;
  stateOptions: any[] = [];

  constructor(
    private fb: UntypedFormBuilder,
    public formBuscaService: FormBuscaService,
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig
  ) {
    this.viajanteForm = this.formBuscaService.getForm();
  }

  ngOnInit(): void {
    // this.initForm();

    this.stateOptions = [
      { label: 'Econômica', value: 'Econômica' },
      { label: 'Executiva', value: 'Executiva' },
    ];
  }

  applyValues() {
    this.ref.close(this.viajanteForm.value);
  }

  close() {
    this.ref.close(this.viajanteForm.value);
  }
}
