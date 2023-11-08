import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroService } from 'src/app/core/services/cadastro.service';
import { FormularioService } from 'src/app/core/services/formulario.service';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/core/types/User.interface';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
  perfilComponent = true;
  tituloBotao = 'ATUALIZAR';

  nome = '';
  cadastro!: User;
  form!: FormGroup | null;

  constructor(
    private cadastroService: CadastroService,
    private formularioService: FormularioService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.cadastroService.buscarCadastro().subscribe({
      next: (cadastro) => {
        this.cadastro = cadastro;
        this.nome = cadastro.nome;
        this.loadingForm();
      },
    });
  }

  loadingForm() {
    this.form = this.formularioService.getCadastro();
    this.form?.patchValue({
      nome: this.cadastro.nome,
      nascimento: new Date(this.cadastro.nascimento),
      cpf: this.cadastro.cpf,
      telefone: this.cadastro.telefone,
      email: this.cadastro.email,
      senha: this.cadastro.senha,
      genero: this.cadastro.genero,
      cidade: this.cadastro.cidade,
      estado: this.cadastro.estado,
    });
  }

  update() {
    const dadosAtualizados = {
      nome: this.form?.value.nome,
      nascimento: this.form?.value.nascimento,
      cpf: this.form?.value.cpf,
      telefone: this.form?.value.telefone,
      email: this.form?.value.email,
      senha: this.form?.value.senha,
      genero: this.form?.value.genero,
      cidade: this.form?.value.cidade,
      estado: this.form?.value.estado,
    };

    this.cadastroService.atualizarCadastro(dadosAtualizados).subscribe({
      next: () => {
        alert('Cadastro atualizado com sucesso!');
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.log('Erro ao atualiar o cadastro: ', error);
      },
    });
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
