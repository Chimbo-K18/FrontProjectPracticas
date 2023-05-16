import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateAccountService } from 'src/app/services/createaccount.service';
import { EstudiantePracticanteService } from 'src/app/services/estudiantepracticante.service';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';
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
    private authService: CreateAccountService, private userservice: UserService,
    private storageService: StorageService, private usuarios: UserService, private estudianteservice: EstudiantePracticanteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }

  }
  inputValue: string = '';

//   onInputChange() {
//     // El valor de ngModel se actualizará automáticamente en la variable "inputValue"
//     console.log('El usuario ingresó:', this.form.correo);
//     this.userservice.getRolNombre(this.form.correo).subscribe( datarol=>{
//         this.idnombrerol = datarol;
//             console.log(this.idnombrerol);
//     });
//   }

idnombrerol:any;
  onSubmit(): void {
    const { correo, contrasenia } = this.form;
    this.usuarios.getcorreo(correo).subscribe(datausu => {
      console.log(datausu);
      localStorage.setItem("idusuario", String(datausu.cedula));
      this.estudianteservice.getRequestEstudianteCedula(datausu.cedula).subscribe(dataestu => {
        localStorage.setItem("estudianteid", String(dataestu.idEstudiantePracticas));

      });
      this.userservice.getRolNombre(correo).subscribe(datarol=>{
        console.log(datarol);
        this.idnombrerol = datarol;
        console.log(this.idnombrerol);
      });

    });
    this.authService.login(correo, contrasenia).subscribe({
      next: (data) => {
        this.storageService.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Credenciales correctas',
          showConfirmButton: false,
          timer: 2000,
        });


        if (this.idnombrerol === 'ROLE_ADMIN') {
            this.router.navigate(['/administrador/dashboard']).then(() => { window.location.reload(); });
          } else if (this.idnombrerol === 'ROLE_CORDINADOR') {
            this.router.navigate(['/coordinador/dashboard']).then(() => { window.location.reload(); });
          } else if (this.idnombrerol === 'ROLE_DIRECTOR') {
            this.router.navigate(['/director/dashboard']).then(() => { window.location.reload(); });
          } else if (this.idnombrerol === 'ROLE_RESPONSABLEPP') {
            this.router.navigate(['/responsable/dashboard']).then(() => { window.location.reload(); });
          } else if (this.idnombrerol === 'ROLE_TUTOREMPRESARIAL') {
            this.router.navigate(['/empresarial/dashboard']).then(() => { window.location.reload(); });
        } else if (this.idnombrerol === 'ROLE_TUTORACADEMICO') {
            this.router.navigate(['/academico/dashboard']).then(() => { window.location.reload(); });
          } else if (this.idnombrerol === 'ROLE_ESTUDIANTE') {
            this.router.navigate(['/estudiante/dashboard']).then(() => { window.location.reload(); });
          }

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
