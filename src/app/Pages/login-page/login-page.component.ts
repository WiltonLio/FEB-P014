import { Component } from '@angular/core';
import { LoadingSpinnerComponent } from "../../Components/loading-spinner/loading-spinner.component";
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import {HttpClientModule} from '@angular/common/http';

@Component({
    selector: 'app-login-page',
    standalone: true,
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.scss',
    imports: [LoadingSpinnerComponent, CommonModule, FormsModule, HttpClientModule, RouterModule],
    
})
export class LoginPageComponent {
    modoLogin = true;
    estaCarregando = false;
    erro: string = '';
    temErro: boolean = false;

    constructor(private authService: AuthService,
        private router: Router) { }

    onTrocarModo() {
        this.modoLogin = !this.modoLogin;

    }

    onSubmit(formulario: NgForm) {
        if (!formulario.valid) {
            return;
        }
        const email = formulario.value.email;
        const password = formulario.value.password;

        this.estaCarregando = true;

        if (this.modoLogin) {
            this.authService.loginUser(email, password).subscribe(
                responseData => {
                    console.log(responseData);
                    this.estaCarregando = false;
                    this.temErro = false;
                    this.router.navigate(['/home']);
                }
            );
        } else {
            this.authService.signupUser(email, password).subscribe(
                responseData => {
                    console.log(responseData);
                    this.estaCarregando = false;
                    this.temErro = false;
                    this.router.navigate(['/home']);
                },
                error => {
                    console.log(error);
                    switch (error.error.error.message) {
                        case 'EMAIL_EXISTS':
                            this.erro = 'O e-mail já está em uso.';
                            break;
                        default:
                            this.erro = 'Ocorreu um erro ao cadastrar o usuário.'
                            break;

                    }
                    this.temErro = true;
                    this.erro = 'Ocorreu um erro ao cadastrar o usuário.'
                    this.estaCarregando = false;
                }
            );
        }

        formulario.reset();

    }

}
