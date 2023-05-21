import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import { EstudiantePracticante } from 'src/app/models/estudiantepracticante';
import { Usuarios } from 'src/app/models/usuarios';
import { Verestudiantef } from 'src/app/models/verestudiantef';
import { BaseFenixService } from 'src/app/services/fenix/base-fenix.service';
import { CreateAccountService } from 'src/app/services/createaccount.service';
import { EstudiantePracticanteService } from 'src/app/services/estudiantepracticante.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public usuario: Usuarios = new Usuarios();
  estudiantepracticante: EstudiantePracticante = new EstudiantePracticante();
  estadoContra: boolean = false;


  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();
  constructor(
    private router: Router, private userservice: UserService,
    private createAccountService: CreateAccountService, private estudiantepracticanteservice: EstudiantePracticanteService,
    private bd_fenix: BaseFenixService
  ) { }

  ngOnInit() { }

  estupracti:any;
  public create(): void {
    if (this.estadoContra == false) {
      Swal.fire({
        text: 'Contraseña no cumple con los requisitos de seguridad.',
        icon: 'error',
        confirmButtonText: 'Cool',
      });
    } else {
      let interceptor = this.usuario.correo.split('@');

      let dominio = interceptor[1];

      if (dominio === 'tecazuay.edu.ec') {
        this.createAccountService.createUserestudiante(this.usuario).subscribe(
          data=> {
           
            Swal.fire({
              position: 'top',
              icon: 'success',
              title: 'Cuenta creada satisfactoriamente.',
              showConfirmButton: false,
              timer: 2000,
            });
            this.crearestudiantepracticante();
            this.router.navigate(['/auth/sign-in']);
          },
          (err) => {
            console.log('Lo que me viene en el err --> ' + err.error.message);

            switch (err.error.message) {
              case 'Error: Usuario ya esta en la BD!':
                Swal.fire(
                  'No se puedo crear el usuario',
                  `Este usuario ya esta registrado`,
                  'error'
                );
                break;

              case 'Error: El usuario no esta en FENIX!':
                Swal.fire(
                  'Docente no registrado en FENIX',
                  `Este docente no se encuentra registrado en fenix.`,
                  'error'
                );
                break;

              case 'Error: Usted no puede ingresar un correo existente!':
                Swal.fire(
                  'Correo institucional ya registrado',
                  `El correo ingresado ya esta registrado con otro docente.`,
                  'error'
                );
                break;
            }
          }
        );
      } else {
        Swal.fire(
          'El correo no es institucional',
          `Correo incorrecto`,
          'warning'
      );
      }
    }
  }
variableencontrada:any;
  crearestudiantepracticante(){
    const cedulausu = document.getElementById(
      'cedulausu'
    ) as HTMLInputElement;
    this.variableencontrada = cedulausu.value;
    this.userservice.getcedula(this.variableencontrada).subscribe(datace=>{
      console.log(datace);
      this.estudiantepracticante.estado =true;
      this.estudiantepracticante.usuario_estudiante_practicante =datace;
      this.estudiantepracticanteservice.crearEstudiantePracticante(this.estudiantepracticante).subscribe(dataestu=>{

      });
    });

  }

  validarCoontra(evento: any) {
    let password = evento.target.value;

    if (
      password.length >= 6 &&
      password.match(/.*[A-Z]/) &&
      password.match(/.*[a-z]/)
    ) {
      console.log('Contra correcta..');
      this.estadoContra = true;
    } else {
      this.estadoContra = false;
      console.log('Fail..');
    }
    this.geteventOculta()
  }

  geteventOculta() {
    const spamm = document.getElementById('elemento') as HTMLButtonElement | null;
    if (spamm != null) {

      if (this.estadoContra == false) {
        spamm.style.display = 'block';
      }

      if (this.estadoContra == true) {
        spamm.style.display = 'none';
      }
    }
  }

  //Vamos a manejar el evento de busqueda..
  correoe = document.getElementById('correo');
  public personas: Verestudiantef = new Verestudiantef();

  public consultaUserFenix(ci: string): void {
    this.bd_fenix.consultarUserEstudiante(ci).subscribe((response) => {
      this.usuario.nombres = response.nombres;
      this.usuario.apellidos = response.apellidos;
      this.usuario.correo = response.correo_institucional;
      this.usuario.carrera = response.carrera;
    });
  }

  escribirInput(evento: any) {
    let cedulaF = evento.target.value;
  

    if (cedulaF.length == 10) {
      console.log('paso con 10');
      this.bd_fenix.consultarUserEstudiante(cedulaF).subscribe((response) => {
        if (response == null) {
          Swal.fire(
            'Usuario no registrado en FENIX',
            `Verifique si su cedula esta correcta.`,
            'warning'
          );
        } else {
          const campoCorreo = document.getElementById(
            'correoe'
          ) as HTMLButtonElement | null;

          if (response.correo_institucional == null) {
            if (campoCorreo == null) {
            } else {
              campoCorreo.disabled = false;
            }
          } else {
            if (campoCorreo == null) {
            } else {
              campoCorreo.disabled = true;
            }
          }
          this.usuario.nombres = response.nombres;
          this.usuario.apellidos = response.apellidos;
          this.usuario.correo = response.correo_institucional;
          this.usuario.carrera = response.carrera;
        }
      });
    } else {
      this.usuario.nombres = '';
      this.usuario.apellidos = '';
      this.usuario.correo = '';
      this.usuario.carrera='';
    }
    console.log(evento.target.value);
  }

  //Metodo que nos servira para autocompletar con el tecazuay
  autoEmail(evento: any) {
    let cedulaF = evento.target.value;

    let valor = cedulaF.substr(-1);

    cedulaF = cedulaF.trim();

    let cedulafinal = cedulaF.split(' ').join('');

    this.usuario.correo = cedulafinal;
    if (valor == '@') {
      console.log(cedulaF);
      this.usuario.correo = cedulafinal + 'tecazuay.edu.ec';
    }
  }


 


}

