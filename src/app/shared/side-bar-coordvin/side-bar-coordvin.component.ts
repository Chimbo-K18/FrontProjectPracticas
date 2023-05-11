import { Component, OnInit } from '@angular/core';
import { ViewChild } from "@angular/core";
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';

import { StorageService } from "src/app/services/storage.service";
import { CreateAccountService } from "src/app/services/createaccount.service";
import { EventBusService } from "../event-bus.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-side-bar-coordvin',
  templateUrl: './side-bar-coordvin.component.html',
  styleUrls: ['./side-bar-coordvin.component.css']
})
export class SideBarCoordvinComponent implements OnInit {



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

    this.eventBusSub = this.eventBusService.on('logout', () => {
      this.logout();
    });
  }

  selectedItem = "";
  selectItem(item: string): void {
    this.selectedItem = item;
  }

  ngAfterContentInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        // this.sidenav.mode = 'side';
        // this.sidenav.open();
      }
    });
  }



  //Parte de login y logout..
  logout(): void {

    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'success',
      title: 'Signed in successfully'
    })

    this.authService.logout().subscribe({
      next: res => {
        console.log('Salimos del sistema con --> ' + res)
        console.log(res);
        this.storageService.clean();
        window.location.reload();
      },
      error: err => {
        console.log('Tenemos un error a la hora de un logOut')
        console.log(err);
      }
    });
  }


}




