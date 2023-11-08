import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/core/services/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  isInputFocused = false;

  constructor(
    private fb: FormBuilder,
    private authService: AutenticacaoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(3)]],
    });
  }

  login() {
    const email = this.loginForm.value.email;
    const senha = this.loginForm.value.senha;

    this.authService.autenticar(email, senha).subscribe({
      next: (response) => {
        console.log('login realizado ', response);
        this.router.navigateByUrl('/');
        this.loginForm.reset();
      },
      error: (error) => {
        console.log('erro ao realizar login ', error);
      },
    });
  }
}
