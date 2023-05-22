import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { Verdocentef } from 'src/app/models/verdocentef';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseFenixService } from 'src/app/services/fenix/base-fenix.service';
import { MatCheckbox } from '@angular/material/checkbox';
import { Usuarios } from 'src/app/models/usuarios';
import { RolToUser } from 'src/app/models/RolToUser';
import { UsuarioRol } from 'src/app/models/UsuarioRol';
import { UserService } from 'src/app/services/user.service';
import { CreateAccountService } from 'src/app/services/createaccount.service';
import { PermisosService } from 'src/app/services/permisos.service';
import Swal from 'sweetalert2';
import { take } from 'rxjs/operators';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Component({
  selector: 'app-register-coord-vinculacion',
  templateUrl: './register-coord-vinculacion.component.html',
  styleUrls: ['./register-coord-vinculacion.component.css'
]
})
export class RegisterCoordVinculacionComponent implements OnInit {
  usuario: Usuarios = new Usuarios;
  cedulafi:any
  correo:any
  carrera:any
  contrasenia:any;
  roltouser: RolToUser = new RolToUser();
  public usuariosrol: UsuarioRol = new UsuarioRol()
  roles: String[] = [];
  nombre:any;
  apellido:any;
  ROLE_CORDINADOR: boolean= false;
  
  displayedColumns: string[] = ['seleccionar','cedula', 'nombres', 'apellidos', 'correo_institucional', 'carrera'];
  dataSource = new MatTableDataSource<Verdocentef>([]);
  @ViewChild('modal')
  modal!: TemplateRef<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  listadocentes: any []=[];
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  @ViewChild('checkbox') checkbox!: MatCheckbox;

  constructor(public dialog: MatDialog, private basefenix: BaseFenixService, 
    private router: Router, public activatedRoute: ActivatedRoute,
    private permisoservice: PermisosService, private createAccountService: CreateAccountService, 
    private userService: UserService){

    this.traerdocente();
  }



  traermaterias(){

  }
  openModal(): void {
    const dialogRef = this.dialog.open(this.modal);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  closeModal(){
    this.dialog.closeAll();
    this.cedulasSeleccionadas = []; 
  }
  ngOnInit(): void {
    this.dataSource.filterPredicate = (data, filter) => {
      return data.cedula.toLowerCase().includes(filter);
    };

  }
  buscarPorCedula(cedula: string) {
    this.dataSource.filter = cedula.trim().toLowerCase();
  }

  traerdocente(){
    this.basefenix.getPersonasFenix().subscribe(
      data => {
        this.listadocentes = data;
        console.log(data);
        this.dataSource.data = this.listadocentes;
      }
    );
  }
  cedulaSeleccionada:any;
  cedulasSeleccionadas: string[] = [];
  

  capturarCheckbox(checkbox: MatCheckbox, cedula: string) {
    if (checkbox.checked) {
      console.log('El checkbox está seleccionado');
      this.cedulasSeleccionadas.push(cedula);
    } else {
      console.log('El checkbox no está seleccionado');
      const index = this.cedulasSeleccionadas.indexOf(cedula);
      if (index > -1) {
        this.cedulasSeleccionadas.splice(index, 1);
      }
    }
    console.log(`Cédulas seleccionadas: ${this.cedulasSeleccionadas}`);
  }

  

  cedulastra:any;
  obtenerCedulaSeleccionada() {
    const cedulaSeleccionada = this.cedulasSeleccionadas[this.cedulasSeleccionadas.length - 1];
    console.log(`Cédula seleccionada: ${cedulaSeleccionada}`);
    let cedulausuario: any = cedulaSeleccionada;
    this.basefenix.consultarUserDocente(cedulausuario).subscribe( data =>{
      this.usuario = new Usuarios();
      this.usuario.cedula = data.cedula;
      this.usuario.nombres = data.nombres;
      this.usuario.apellidos = data.apellidos;
      this.usuario.correo=data.correo_institucional;
      this.usuario.carrera = data.carrera;
      this.usuario.contrasenia = "Coordinador123";
      this.createAccountService.createUserdocente
      (this.usuario).subscribe(
        data => {
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Cuenta creada satisfactoriamente.',
            showConfirmButton: false,
            timer: 2000,
          });
          this.Agregarrol(this.usuario.cedula);
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
                `Este docenete no se encuentra registrado en fenix.`,
                'error'
              );
              this.closeModal();
              break;
  
            case 'Error: Usted no puede ingresar un correo existente!':
              Swal.fire(
                'Correo institucional ya registrado',
                `El correo ingresaso ya eta registrado con otro docente.`,
                'error'
              );
              break;
          }
        }
      
      );
    })


  }

  Agregarrol(cedula: any) {
    this.userService.getcedula(this.usuario.cedula).subscribe((usuarios) => {
      this.usuariosrol = usuarios;
      this.roltouser.cedula = this.usuariosrol.cedula;
      
      // Buscar si el usuario ya tiene el rol "ROLE_CORDINADOR"
      const tieneRolCordinador = this.usuariosrol.roles.some(r => r.rolNombre === 'ROLE_CORDINADOR');
      
      // Si el usuario no tiene el rol, se agrega
      if (!tieneRolCordinador) {
        this.roles.push('ROLE_CORDINADOR');
      }
  
      this.roltouser.roles = this.roles;
      console.log(this.roltouser);
  
      this.permisoservice.addRoleToUser(this.roltouser).subscribe(x => {
        this.roles = new Array<string>();
  
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Roles Actualizado',
          showConfirmButton: false,
          timer: 2000,
        });
        this.closeModal();
      });
    });
  }

}


