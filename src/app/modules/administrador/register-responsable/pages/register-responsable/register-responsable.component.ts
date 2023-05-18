import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { RolToUser } from 'src/app/models/RolToUser';
import { UsuarioRol } from 'src/app/models/UsuarioRol';
import { Responsable_PPP } from 'src/app/models/responsable_ppp';
import { Usuarios } from 'src/app/models/usuarios';
import { Verdocentef } from 'src/app/models/verdocentef';
import { BaseFenixService } from 'src/app/services/fenix/base-fenix.service';
import { CarreraService } from 'src/app/services/carrera.service';
import { CreateAccountService } from 'src/app/services/createaccount.service';
import { PermisosService } from 'src/app/services/permisos.service';
import { Responsable_PPPService } from 'src/app/services/responsable_ppp.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-register-responsable',
  templateUrl: './register-responsable.component.html',
  styleUrls: ['./register-responsable.component.css']
})
export class RegisterResponsableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'carrera', 'usuario_responsable.nombres', 'usuario_responsable.apellidos'];
  dataSource = new MatTableDataSource<Responsable_PPP>([]);


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource2.paginator = this.paginator2;
  }

  @ViewChild('paginator2', { static: true }) paginator2!: MatPaginator;

  
  usuario: Usuarios = new Usuarios;
  responsable_ppp: Responsable_PPP = new Responsable_PPP;
  cedulafi:any
  correo:any
  contrasenia:any;
  roltouser: RolToUser = new RolToUser();
  public usuariosrol: UsuarioRol = new UsuarioRol()
  roles: String[] = [];
  nombre:any;
  apellido:any;
  ROLE_RESPONSABLEPP: boolean= false;
  
  displayedColumns2: string[] = ['seleccionar','cedula', 'nombres', 'apellidos', 'correo_institucional', 'carrera'];
  dataSource2 = new MatTableDataSource<Verdocentef>([]);



  listadocentes: any []=[];

  @ViewChild('checkbox') checkbox!: MatCheckbox;

  constructor( private basefenix: BaseFenixService, private router: Router, private responsableservice : Responsable_PPPService ,private carrera: CarreraService,public activatedRoute: ActivatedRoute,private permisoservice: PermisosService, private createAccountService: CreateAccountService, private userService: UserService){

    this.traerdocente();
    this.traercarreras();
    
  }


  carrera_nombre : any [] = [];
traercarreras() {
  this.carrera.getCarreras().subscribe(data => {
    this.carrera_nombre = data;
    console.log(this.carrera_nombre);
  });
}
carreraSeleccionada:any;
seleccionarCarrera() {
console.log(this.carreraSeleccionada);

}



  ngOnInit(): void {
    this.dataSource2.filterPredicate = (data, filter) => {
      return data.cedula.toLowerCase().includes(filter);
    };

    
    setInterval(() => {
      
      this.traerresponsable();
 
    }, 2000);
  }
  buscarPorCedula(cedula: string) {
    this.dataSource2.filter = cedula.trim().toLowerCase();
  }

  traerdocente(){
    this.basefenix.getPersonasFenix().subscribe(
      data => {
        this.listadocentes = data;
        console.log(data);
        this.dataSource2.data = this.listadocentes;
      }
    );
  }

  listaresposables: any []=[];
  traerresponsable(){
    this.responsableservice.getResponsables().subscribe(
      data => {
        this.listaresposables = data;
        console.log(data);
        this.dataSource.data = this.listaresposables;
      }
    );
  }
  cedulaSeleccionada:any;
  cedulasSeleccionadas: string[] = [];
  nombresSeleccionadas: string[] = [];
  apellidosSeleccionadas: string[] = [];
  capturarCheckbox(checkbox: MatCheckbox, cedula: string, nombres: string, apellidos:string) {
    if (checkbox.checked) {
      console.log('El checkbox está seleccionado');
      this.cedulasSeleccionadas.push(cedula);
      this.nombresSeleccionadas.push(nombres);
      this.apellidosSeleccionadas.push(apellidos);
    } else {
      console.log('El checkbox no está seleccionado');
      const index = this.cedulasSeleccionadas.indexOf(cedula);
      if (index > -1) {
        this.cedulasSeleccionadas.splice(index, 1);
      }
    }
    console.log(`Cédulas seleccionadas: ${this.cedulasSeleccionadas}`);
    console.log(`Cédulas seleccionadas: ${this.nombresSeleccionadas}`);
    console.log(`Cédulas seleccionadas: ${this.apellidosSeleccionadas}`);
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
      this.usuario.contrasenia = "Responsable123";
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
          this.crearresponsable(this.usuario.cedula);
        },
        (err) => {
          console.log('Lo que me viene en el err --> ' + err.error.message);
  
          switch (err.error.message) {
            case 'Error: Usuario ya esta en la BD!':
              Swal.fire(
                'El usuario ya es un responsable de practicas',
                `No permitido`,
                'error'
              );
              break;
  
            case 'Error: El usuario no esta en FENIX!':
              Swal.fire(
                'Docente no registrado en FENIX',
                `Este docenete no se encuentra registrado en fenix.`,
                'error'
              );
          
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
usuarioid:any;
  crearresponsable(idusuario:any){
    this.userService.getcedula(idusuario).subscribe(data =>{
      this.usuarioid = data;
      console.log(data);
      this.responsable_ppp.usuario_responsable =data;
      this.responsable_ppp.carrera=this.carreraSeleccionada;
      this.responsableservice.crearResponsable(this.responsable_ppp).subscribe(data =>{
        console.log(data);
      });
    })
  }

  Agregarrol(cedula: any) {
    this.userService.getcedula(this.usuario.cedula).subscribe((usuarios) => {
      this.usuariosrol = usuarios;
      this.roltouser.cedula = this.usuariosrol.cedula;
      
      // Buscar si el usuario ya tiene el rol "ROLE_CORDINADOR"
      const tieneRolCordinador = this.usuariosrol.roles.some(r => r.rolNombre === 'ROLE_RESPONSABLEPP');
      
      // Si el usuario no tiene el rol, se agrega
      if (!tieneRolCordinador) {
        this.roles.push('ROLE_RESPONSABLEPP');
      }
  
      this.roltouser.roles = this.roles;
      console.log(this.roltouser);
  
      this.permisoservice.addRoleToUser(this.roltouser).subscribe(x => {
        this.roles = new Array<string>();
  
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Datos Creados Correctamente',
          showConfirmButton: false,
          timer: 2000,
        });
     
      });
    });
  }



}
