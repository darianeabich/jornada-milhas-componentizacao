import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  viajanteForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public formBuscaService: FormBuscaService
  ) {}

  ngOnInit(): void {
    // this.initForm();
  }
}
