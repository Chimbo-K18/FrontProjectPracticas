import { Component, OnInit } from '@angular/core';
import { ViewChild } from "@angular/core";
import { MatSidenav } from '@angular/material/sidenav';
import { ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { StorageService } from "src/app/services/storage.service"; 
import { Usuarios } from 'src/app/models/usuarios';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

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
    private changeDedectionRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
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

}
