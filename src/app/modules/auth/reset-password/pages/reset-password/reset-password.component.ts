import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Usuarios } from 'src/app/models/usuarios';
import { BaseFenixService } from 'src/app/services/fenix/base-fenix.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  public usuario: Usuarios = new Usuarios();

  cedula!: string;
  correo!:string;
  newPassword!: string;
  message!: string;

  constructor(private userService: UserService,
    private bd_fenix: BaseFenixService) { }



  ngOnInit(): void {
  }

  onResetPassword() {
    this.userService.resetPassword(this.usuario.cedula, this.newPassword).subscribe(
      () => {
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Contraseña restablecida satisfactoriamente.',
          showConfirmButton: false,
          timer: 2000,
        });
      },
      (error: HttpErrorResponse) => {
        if (error.status === 404) {
          this.message = "No se encontró ningún usuario con el número de cédula proporcionado.";
        } else {
          this.message = "Error al restablecer la contraseña.";
        }
      }
    );
  }

  public consultaUserFenix(ci: string): void {
    this.userService.getcedula(ci).subscribe((response) => {
      this.usuario.nombres = response.nombres;
      this.usuario.apellidos = response.apellidos;
      this.usuario.correo = response.correo;
      this.usuario.carrera = response.carrera;
    });
  }

  escribirInput(evento: any) {
    let cedulaF = evento.target.value;
    if (cedulaF.length == 10) {
      this.userService.getcedula(cedulaF).subscribe((response) => {
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

          if (response.correo == null) {
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
          this.usuario.correo = response.correo;
          this.usuario.carrera = response.carrera;
        }
      });
    } else {
      this.usuario.nombres = '';
      this.usuario.apellidos = '';
      this.usuario.correo = '';
      this.usuario.carrera='';
    }
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
