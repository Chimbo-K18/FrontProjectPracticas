import { ActivatedRoute } from '@angular/router';
import { rolService } from './../../../../../services/rol.service';
import { tutorempresarialService } from 'src/app/services/tutorempresarial.service';
import { usuarioService } from 'src/app/services/usuario.service';
import { tutorempresarial } from 'src/app/models//tutorempresarial';
import { personasemp } from 'src/app/models/personaemp';
import { personaempService } from './../../../../../services/personaemp.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Usuarios } from 'src/app/models/usuarios';
import { UsuarioRol } from 'src/app/models/UsuarioRol';
// import { FormControl, FormGroup } from '@angular/forms';
import { Empresa } from 'src/app/models/empresa';
import { RolToUser } from 'src/app/models/RolToUser';
import Swal from 'sweetalert2';
import { UserService } from 'src/app/services/user.service';
import { PermisosService } from 'src/app/services/permisos.service';
// import { Rol } from 'src/app/models/rol';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-registro-tut-empresarial',
  templateUrl: './registro-tut-empresarial.component.html',
  styleUrls: ['./registro-tut-empresarial.component.css']
})
export class RegistroTutEmpresarialComponent {
  //TABLA
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  
    @ViewChild(MatPaginator) paginator!: MatPaginator;
  
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }
  
    //FINTABLA
    @ViewChild('modal')
    modal!: TemplateRef<any>;

    //MODAL
    openModal(): void {

      const dialogRef = this.dialog.open(this.modal);  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }

    closeModal(): void {
      this.dialog.closeAll();
    }
  
    // firstFormGroup = this._formBuilder.group({
    //   firstCtrl: ['', Validators.required],
    //   });
    firstFormGroup = this._formBuilder.group({
      firstCtrl: [''],
    });
    secondFormGroup = this._formBuilder.group({
      secondCtrl: [''],
    });
  
    isEditable = false;

    /////instancias
    personasemp: personasemp = new personasemp;
    tutorempresarial: tutorempresarial = new tutorempresarial();
    usuarios: Usuarios = new Usuarios();
    empresa: Empresa = new Empresa();
    rol: RolToUser = new RolToUser();
    // rol: Rol = new Rol();
    idUsuario: any;
    idEmpresa: any;
    idrol:any;
  ////
  usuario: Usuarios = new Usuarios;
  cedulafi:any
  correo:any
  carrera:any
  contrasenia:any;
  roltouser: RolToUser = new RolToUser();
  usuariosrol: UsuarioRol = new UsuarioRol()
  roles: String[] = [];
  nombre:any;
  apellido:any;
  ROLE_TUTOREMPRESARIAL: boolean= false;

    constructor(private _formBuilder: FormBuilder,public dialog: MatDialog, private personaempService: personaempService
      , private tutorempresarialService: tutorempresarialService , private usuarioService: usuarioService, private rolService: rolService,
      private userService: UserService,  private permisoservice: PermisosService) {}
  

    ngOnInit(): void {
      this.personasemp = new personasemp(); // Inicializar la propiedad 'personasemp' con una instancia de PersonasEmp
      this.personasemp.genero = '';


      this.obtenerUsuario();
      // this.obtenerEmpresa();
    }
    
    crearpersonaemp() {
      this.personaempService.crearpersonaemp(this.personasemp).subscribe(response => {
        console.log('Exito al Registrar persona empresa');
        this.copy_address();
      });
    }
    //funcion para copiar datos
    copy_address() {
      const correoPersona = document.getElementById('correoPersona') as HTMLInputElement;
      const cedulaPersona = document.getElementById('cedulaPersona') as HTMLInputElement;
      const first_name = document.getElementById('first_name') as HTMLInputElement;
      const last_name = document.getElementById('last_name') as HTMLInputElement;
      //
      const usercorreo = document.getElementById('usercorreo') as HTMLInputElement;
      const usercedula = document.getElementById('usercedula') as HTMLInputElement;
      const userpassword = document.getElementById('userpassword') as HTMLInputElement;
      const NombreCompleto = document.getElementById('NombreCompleto') as HTMLInputElement;
      const NombreCompleto2 = document.getElementById('NombreCompleto2') as HTMLInputElement;
      if (correoPersona && usercorreo && cedulaPersona && usercedula && userpassword) {
        usercorreo.value = correoPersona.value;
        usercedula.value = cedulaPersona.value;
        userpassword.value = cedulaPersona.value;
        NombreCompleto.value= first_name.value +" "+ last_name.value;
        NombreCompleto2.value= first_name.value +" "+ last_name.value;
        console.log(usercorreo);
      }
    }

    creartutoremp(){
      this.tutorempresarialService.creartutoremp(this.tutorempresarial)
      .subscribe(response => console.log('Exito al Registrar tutor empresarial'));
    }
    crearusuario(){
      this.usuarioService.crearusuario(this.usuarios)
      .subscribe(response => console.log('Exito al Registrar usuario'));
    }
 
    //////////////////obtener datos de otras tablas
    obtenerUsuario() {
      this.idUsuario = localStorage.getItem('idUsuario');
      if (this.idUsuario != '' && this.idUsuario != undefined) {
        this.usuarioService.buscarus(this.idUsuario).subscribe((data) => {
          console.log(data);
          this.usuarios = data;
          // this.idrol = data.rol?.idrol;
          this.obtenerRolDelUsuario(this.idrol);
        })
      } else {
        console.log("Usuario no foun => ")
      }
    }
    obtenerRolDelUsuario(idrol: any) {
      if (this.idrol != '' && this.idrol != undefined) {
        this.rolService.buscarrol(this.idrol).subscribe((data) => {
          console.log(data);
          this.rol = data;
        })
      } else {
        console.log("rol no found o esta vacio=> ")
      }
    }  
    
    
/////agregar roool
Agregarrol(cedula: any) {
  this.userService.getcedula(this.usuario.cedula).subscribe((usuarios) => {
    this.usuariosrol = usuarios;
    this.roltouser.cedula = this.usuariosrol.cedula;
    
    // Buscar si el usuario ya tiene el rol "ROLE_CORDINADOR"
    const tieneRolCordinador = this.usuariosrol.roles.some(r => r.rolNombre === 'ROLE_TUTOREMPRESARIAL');
    
    // Si el usuario no tiene el rol, se agrega
    if (!tieneRolCordinador) {
      this.roles.push('ROLE_TUTOREMPRESARIAL');
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





 // imageeeeeeeeeeeeeeeeeeeeen
 file: any = '';
 image!: any;
 retrievedImage: any;
 foto_usuario: string = "nodisponible.png";
 cap_nombre_archivo: any;
 selectedFile!: File;
 public imageSelected(event: any) {
    const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
    const file = event.target.files[0];
    const extension = file.name.split('.').pop().toLowerCase();
    const fileSize = file.size / 1024; // tamaño en KB

    if (!allowedExtensions.includes(extension)) {
    } else if (fileSize > 1000) {
    
      return;
    }

    if (!allowedExtensions.includes(extension)) {
 
      return;
    }
   this.selectedFile = event.target.files[0];
   this.image = this.selectedFile;
   const reader = new FileReader();
   reader.readAsDataURL(this.selectedFile);
   reader.onload = () => {
     this.file = reader.result;
   };
   this.cap_nombre_archivo = event.target.value;
   this.foto_usuario = this.cap_nombre_archivo.slice(12);
   console.log('Nombre imagen original => ' + this.foto_usuario);
 }




  }
  