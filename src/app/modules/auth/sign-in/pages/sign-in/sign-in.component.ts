import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateAccountService } from 'src/app/services/createaccount.service';
import { StorageService } from 'src/app/services/storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  form: any = {
    correo: null,
    contrasenia: null,
};
isLoggedIn = false;
isLoginFailed = false;
errorMessage = '';
roles: string[] = [];

constructor(
    private authService: CreateAccountService,
    private storageService: StorageService,
    private router: Router
) { }

ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
    }
    
}

onSubmit(): void {
    const { correo, contrasenia } = this.form;

    console.log('Em --> ' + correo + '  pa --> ' + contrasenia);
    this.authService.login(correo, contrasenia).subscribe({
        next: (data) => {
            this.storageService.saveUser(data);
            this.isLoginFailed = false;
            this.isLoggedIn = true;
            this.roles = this.storageService.getUser().roles;
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Tamos dentro del sistema, credenciales correctas!!!',
                showConfirmButton: false,
                timer: 2000,
            });
            // this.reloadPage();

            // this.router.navigate(['/home']);
            this.router.navigate(['/administrador']) .then(() => { window.location.reload(); });
        },
        error: (err) => {
            console.log(err.error.message);
            if (err.error.message === 'No registrado!') {
                Swal.fire(
                    'Cuenta no registrada',
                    `La cuenta no esta registrada en el sistema`,
                    'error'
                );
            }

            if (err.error.message === 'Bad credentials') {
                Swal.fire(
                    'Credenciales erroneas',
                    `verifique su contraseña.`,
                    'warning'
                );
            }

            this.errorMessage = err.error.message;
            this.isLoginFailed = true;
        },
    });
}

autoCompleteEmail(evento: any) {
    let cedulaF = evento.target.value;

    let valor = cedulaF.substr(-1);

    cedulaF = cedulaF.trim();

    let cedulafinal = cedulaF.split(' ').join('');

    this.form.correo = cedulafinal;
    if (valor == '@') {
        console.log(cedulaF);
        this.form.correo = cedulafinal + 'tecazuay.edu.ec';
    }
}

reloadPage(): void {
    location.reload();
}



}