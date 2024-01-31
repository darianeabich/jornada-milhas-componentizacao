import { Injectable } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormularioService {
  cadastroForm: UntypedFormGroup | null = null;

  getCadastro(): UntypedFormGroup | null {
    return this.cadastroForm;
  }

  setCadastro(form: UntypedFormGroup) {
    this.cadastroForm = form;
  }
}
