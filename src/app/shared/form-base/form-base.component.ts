import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { FormularioService } from 'src/app/core/services/formulario.service';
import { FormValidations } from '../form-validations';

@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrls: ['./form-base.component.scss'],
})
export class FormBaseComponent implements OnInit {
  @Input() perfilComponent = false;
  @Input() tituloBotao: string = 'CADASTRAR';
  @Input() user: string = '';
  @Output() acaoClique = new EventEmitter();
  @Output() acaoLogout = new EventEmitter();

  registerForm!: UntypedFormGroup;
  estadoControl = new UntypedFormControl(null, Validators.required);
  nascimentoControl = new UntypedFormControl(null, Validators.required);
  categories: any[] = [
    { name: 'Feminino', key: 'F' },
    { name: 'Masculino', key: 'M' },
    { name: 'Prefiro não informar', key: 'PNI' },
  ];
  constructor(
    private fb: UntypedFormBuilder,
    private formularioService: FormularioService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      nome: [null, Validators.required],
      nascimento: this.nascimentoControl,
      cpf: [null, [Validators.required]],
      telefone: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      confirmarEmail: [
        null,
        [
          Validators.required,
          Validators.email,
          FormValidations.equalTo('email'),
        ],
      ],
      senha: [null, [Validators.required, Validators.minLength(3)]],
      confirmarSenha: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          FormValidations.equalTo('senha'),
        ],
      ],
      genero: ['PNI'],
      cidade: [null, Validators.required],
      estado: this.estadoControl,
      aceitarTermos: [false, Validators.required],
    });

    if (this.perfilComponent) {
      this.registerForm.get('aceitarTermos')?.setValidators(null);
    } else {
      this.registerForm
        .get('aceitarTermos')
        ?.setValidators(Validators.requiredTrue);
    }

    this.registerForm.get('aceitarTermos')?.updateValueAndValidity();

    this.formularioService.setCadastro(this.registerForm);
  }

  executarAcao() {
    this.acaoClique.emit();
    // console.log('formulário a ser enviado', this.registerForm.value);
  }

  logout() {
    console.log('sair');
    this.acaoLogout.emit();
  }
}
