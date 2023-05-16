import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CreateAccountService } from 'src/app/services/createaccount.service';
import { StorageService } from 'src/app/services/storage.service';
import { EventBusService } from 'src/app/shared/event-bus.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ViewChild } from "@angular/core";
import { Subscription } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-profile-admin',
  templateUrl: './profile-admin.component.html',
  styleUrls: ['./profile-admin.component.css']
})
export class ProfileAdminComponent implements OnInit {

  private roles: string[] = [];
  isLoggedIn = false;
  username?: string;
  id_persona?: string;
  eventBusSub?: Subscription;

  //Acceso dependiendo de sus roles..

  //Roles Acceso-------------------------
  rolAdmin = false;
  rolCordinador = false;
  rolDirector = false;
  rolResponsablepp = false;
  rolTutorempresarial = false;
  rolTutoracademico = false;
  rolEstudiante = false;

  //Variables de captura de los nombres el user Log
  nombres_usuario?: string;
  apellidos_user?: string;
  user_final: any;
  rol_nombre: any;

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(
    private storageService: StorageService,
    private authService: CreateAccountService,
    private eventBusService: EventBusService,
    private observer: BreakpointObserver,
    private changeDedectionRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.changeDedectionRef.detectChanges();

    //Metodo incorporado para el login..
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      console.log('Estamos logiados satisfacririamente')
      const user = this.storageService.getUser();
      this.roles = user.roles;

      this.rolAdmin = this.roles.includes('ROLE_ADMIN');
      this.rolCordinador = this.roles.includes('ROLE_CORDINADOR');
      this.rolDirector = this.roles.includes('ROLE_DIRECTOR');
      this.rolResponsablepp = this.roles.includes('ROLE_RESPONSABLEPP');
      this.rolTutorempresarial = this.roles.includes('ROLE_TUTOREMPRESARIAL');
      this.rolTutoracademico = this.roles.includes('ROLE_TUTORACADEMICO');
      this.rolEstudiante = this.roles.includes('ROLE_ESTUDIANTE');
      this.rol_nombre = user.rol_nombre;
      this.username = user.correo;
      this.nombres_usuario = user.nombres;
      this.apellidos_user = user.apellidos;
      this.user_final = this.nombres_usuario?.concat(' ' + this.apellidos_user)
      this.id_persona = user.id;
      console.log('La obtencio del email del storage--> ' + user.correo)
    }
  }

}
