import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CarreraService } from 'src/app/services/carrera.service';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Verdocentef } from 'src/app/models/verdocentef';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseFenixService } from 'src/app/services/base-fenix.service';
import { Usuarios } from 'src/app/models/usuarios';
import { RolToUser } from 'src/app/models/RolToUser';
import { UsuarioRol } from 'src/app/models/UsuarioRol';
import { UserService } from 'src/app/services/user.service';
import { CreateAccountService } from 'src/app/services/createaccount.service';
import { PermisosService } from 'src/app/services/permisos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-director',
  templateUrl: './register-director.component.html',
  styleUrls: ['./register-director.component.css'],
})
export class RegisterDirectorComponent implements OnInit {
  //TABLA empresa
  displayedColumns: string[] = [
    'cedula',
    'nombres',
    'apellidos',
    'correo_institucional',
    'opciones',
  ];
  dataSource = new MatTableDataSource<Verdocentef>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  //FINTABLA

  usuario: Usuarios = new Usuarios();
  roltouser: RolToUser = new RolToUser();
  public usuariosrol: UsuarioRol = new UsuarioRol();
  roles: String[] = [];
  nombre: any;
  apellido: any;
  ROLE_DIRECTOR: boolean = false;
  selectedDirector: any;
  listadocentes: any[] = [];
  Verdocentef: Verdocentef = new Verdocentef();
  ceduladoc: any;
  contraseniaDefecto: string = 'Directorl123';

  seleccionarDirector(Verdocentef: any) {
    console.log('Se seleccionó :', Verdocentef);
    const NombreCompletoDirector = document.getElementById(
      'NombreCompletoDirector'
    ) as HTMLInputElement;
    if (NombreCompletoDirector) {
      NombreCompletoDirector.value =
        Verdocentef.nombres + ' ' + Verdocentef.apellidos;
      this.ceduladoc = Verdocentef.cedula;
      console.log(this.ceduladoc);
    }
  }
  constructor(
    private _formBuilder: FormBuilder,
    private carrera: CarreraService,
    private basefenix: BaseFenixService,
    public activatedRoute: ActivatedRoute,
    private permisoservice: PermisosService,
    private CreateAccountService: CreateAccountService,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    this.Obtenerdocente();
  }
  //buscar usuario
  // para crear el usuario
  crearusuario() {
    this.basefenix.consultarUserDocente(this.ceduladoc).subscribe((data) => {
      console.log(data);
      this.usuario.contrasenia = this.contraseniaDefecto;
      this.usuario.nombres = data.nombres;
      this.usuario.apellidos = data.apellidos;
      this.usuario.cedula = data.cedula;
      this.usuario.correo = data.correo_institucional;
      this.usuario.carrera = data.carrera;
      this.CreateAccountService.createUserempresa(this.usuario).subscribe(
        (response) => {
          console.log('Exito al Registrar usuario');
          response.cedula;
          this.Agregarrol(response.cedula);
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Usuario Registrado Exitosamente.',
            text: '¡Recuerde que la contraseña por defecto es "Directorl123" !',
            showConfirmButton: false,
            timer: 4000,
          });
        }
      );
    });
  }
  Agregarrol(cedula: any) {
    this.userService.getcedula(this.usuario.cedula).subscribe((usuarios) => {
      this.usuariosrol = usuarios;
      this.roltouser.cedula = this.usuariosrol.cedula;
      // Buscar si el usuario ya tiene el rol "ROLE_DIRECTOR"
      const tieneRolCordinador = this.usuariosrol.roles.some(
        (r) => r.rolNombre === 'ROLE_DIRECTOR'
      );
      // Si el usuario no tiene el rol, se agrega
      if (!tieneRolCordinador) {
        this.roles.push('ROLE_DIRECTOR');
      }
      this.roltouser.roles = this.roles;
      console.log(this.roltouser);

      this.permisoservice.addRoleToUser(this.roltouser).subscribe((x) => {
        this.roles = new Array<string>();
      });
    });
  }

  /////////////obtener docentes

  Obtenerdocente() {
    this.basefenix.getPersonasFenix().subscribe((data) => {
      this.listadocentes = data.map((result) => {
        let docentes = new Verdocentef();
        docentes.cedula = result.cedula;
        docentes.nombres = result.nombres;
        docentes.apellidos = result.apellidos;
        docentes.carrera = result.carrera;
        docentes.correo_institucional = result.correo_institucional;
        return docentes;
      });
      this.listadocentes = data;
      console.log(data);
      this.dataSource.data = this.listadocentes;
    });
  }
}
