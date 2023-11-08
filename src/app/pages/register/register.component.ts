import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroService } from 'src/app/core/services/cadastro.service';
import { FormularioService } from 'src/app/core/services/formulario.service';
import { User } from 'src/app/core/types/User.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private formularioService: FormularioService,
    private cadastroService: CadastroService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  cadastrar() {
    const formCadastro = this.formularioService.getCadastro();
    if (formCadastro?.valid) {
      const novoCadastro = formCadastro.getRawValue() as User;
      console.log('formCadastro => ', novoCadastro);

      this.cadastroService.cadastrar(novoCadastro).subscribe({
        next: (res) => {
          console.log('cadastrado => ', res);
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.log('erro ao cadastrar => ', err);
        },
      });
    }
    // console.log('cadastrado => ', formCadastro);
  }
}
