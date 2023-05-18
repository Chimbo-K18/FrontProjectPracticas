import { Component, OnInit } from '@angular/core';
import { ViewChild } from "@angular/core";
import { HttpErrorResponse } from '@angular/common/http';
import { MatSidenav } from '@angular/material/sidenav';
import { ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { StorageService } from "src/app/services/storage.service";
import { Usuarios } from 'src/app/models/usuarios';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  private roles: string[] = [];
  isLoggedIn = false;

  username?: string;

  id_persona?: string;

  eventBusSub?: Subscription;

  //Acceso dependiendo de sus roles..

  //Roles Acceso-------------------------
  rolAdmin=false;
  rolCordinador=false;
  rolDirector=false;
  rolResponsablepp=false;
  rolTutorempresarial=false;
  rolTutoracademico=false;
  rolEstudiante=false;

  //Variables de captura de los nombres el user Log
  nombres_usuario?: string;
  apellidos_user?: string;
  user_final:any;
  rol_nombre:any;
  rol!:any;
  carrera:any;

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  public usuario: Usuarios = new Usuarios();

  constructor(
    private storageService: StorageService,
    private usuarios: UserService,
    private changeDedectionRef: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.extraerDatos();
    this.changeDedectionRef.detectChanges();

    //Metodo incorporado para el login..
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;
      console.log(user.id);
      this.rolAdmin = this.roles.includes('ROLE_ADMIN');
      this.rolCordinador = this.roles.includes('ROLE_CORDINADOR');
      this.rolDirector = this.roles.includes('ROLE_DIRECTOR');
      this.rolResponsablepp = this.roles.includes('ROLE_RESPONSABLEPP');
      this.rolTutorempresarial = this.roles.includes('ROLE_TUTOREMPRESARIAL');
      this.rolTutoracademico = this.roles.includes('ROLE_TUTORACADEMICO');
      this.rolEstudiante = this.roles.includes('ROLE_ESTUDIANTE');
      this.rol_nombre = user.rol_nombre;
      this.username = user.correo;
      this.nombres_usuario= user.nombres;
      this.apellidos_user= user.apellidos;
      this.user_final= this.nombres_usuario?.concat(' '+this.apellidos_user)
      this.id_persona= user.id;
      this.usuarios.getRolNombre(this.username).subscribe(datarol=>{
       this.rol=datarol;
      });
    }
      this.usuarios.listarUsuarios().subscribe((dataUsers) => {
        dataUsers.forEach((usuario) => {
          this.carrera=usuario.carrera;
        });
      },
      (error) => {
        console.error(error);
      }
    );
    }

  cedula!: string;
  correo!: string;
  newPassword!: string;
  message!: string;
  captura: any;
  captura2: any;
  cedula01 !: string;
  var1 !: string;


  extraerDatos(){

    this.captura = localStorage.getItem("idusuario");
    this.cedula01 = String(this.captura);
    console.log(this.cedula01);


    const idDoc = JSON.parse(
      sessionStorage.getItem('auth-user') || '{}'
    );
    this.captura2 = idDoc.correo;

    console.log(this.captura2)

  }

  onResetPassword() {

    this.var1 = this.captura;
    this.usuarios.resetPassword(this.cedula01, this.newPassword).subscribe(
      () => {

        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Contraseña restablecida satisfactoriamente.',
          showConfirmButton: false,
          timer: 2000,
        });

        this.newPassword = '';
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
