import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  cedula!: string;
  correo!: string;
  newPassword!: string;
  message!: string;

  constructor(private userService: UserService) {
  }
  ngOnInit(): void {
  }


  onResetPassword() {
    this.userService.resetPassword(this.cedula, this.newPassword).subscribe(
      () => {
        this.message = "Contraseña modificada correctamente";
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

}
