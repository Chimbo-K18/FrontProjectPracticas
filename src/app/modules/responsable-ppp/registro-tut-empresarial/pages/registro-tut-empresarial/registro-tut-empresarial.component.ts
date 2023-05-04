import { CreateAccountService } from 'src/app/services/createaccount.service';
import { ActivatedRoute } from '@angular/router';
import { rolService } from './../../../../../services/rol.service';
import { tutorempresarialService } from 'src/app/services/tutorempresarial.service';
import { tutorempresarial } from 'src/app/models//tutorempresarial';
import { personasemp } from 'src/app/models/personaemp';
import { personaempService } from './../../../../../services/personaemp.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Usuarios } from 'src/app/models/usuarios';
import { UsuarioRol } from 'src/app/models/UsuarioRol';
import { Empresa } from 'src/app/models/empresa';
import { RolToUser } from 'src/app/models/RolToUser';
import Swal from 'sweetalert2';
import { UserService } from 'src/app/services/user.service';
import { PermisosService } from 'src/app/services/permisos.service';
import { EmpresaService } from 'src/app/services/empresa.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro-tut-empresarial',
  templateUrl: './registro-tut-empresarial.component.html',
  styleUrls: ['./registro-tut-empresarial.component.css'],
})
export class RegistroTutEmpresarialComponent {
  selectedEmpresa: any;

  //TABLA empresa
  displayedColumns: string[] = ['idEmpresa', 'nombreEmpresa', 'direccion'];
  dataSource = new MatTableDataSource<Empresa>([]);

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
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  closeModal(): void {
    this.dialog.closeAll();
  }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: [''],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: [''],
  });

  isEditable = false;
  //empresa
  listaEmpresa: Empresa[] = [];
  loading: boolean = true;
  empresa: Empresa = new Empresa();

  /////instancias
  personasemp: personasemp = new personasemp();
  tutorempresarial: tutorempresarial = new tutorempresarial();
  usuarios: Usuarios = new Usuarios();
  // Empresa:Empresa= new Empresa();
  rol: RolToUser = new RolToUser();
  // rol: Rol = new Rol();
  idUsuario: any;
  idEmpresa: any;
  idrol: any;
  ////
  cedulafi: any;
  correo: any;
  carrera: any;
  contrasenia: any;
  roltouser: RolToUser = new RolToUser();
  usuariosrol: UsuarioRol = new UsuarioRol();
  roles: String[] = [];
  nombresCompleto: any;
  apellidosCompletos: any;
  celulartutor: any;
  idpersonaempresa: any;
  ROLE_TUTOREMPRESARIAL: boolean = false;
contraseniaDefecto: string="Empresarial123";

  constructor(
    private _formBuilder: FormBuilder,
    public dialog: MatDialog,
    private personaempService: personaempService,
    private tutorempresarialService: tutorempresarialService,
    private userService: UserService,
    private CreateAccountService:CreateAccountService,
    private permisoservice: PermisosService,
    private empresaService: EmpresaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.personasemp = new personasemp(); // Inicializar la propiedad 'personasemp' con una instancia de PersonasEmp
    this.personasemp.genero = '';
    // this.obtenerUsuario();
  }
  // para seleccionar la empresa
  seleccionarEmpresa(empresa: any) {
    console.log('Se seleccionó la empresa:', empresa);
    this.selectedEmpresa = empresa.idEmpresa;
    console.log('Valor seleccionado:', this.selectedEmpresa);
    const nombreEmp = document.getElementById('nombreEmp') as HTMLInputElement;
    const codigoEmp = document.getElementById('codigoEmp') as HTMLInputElement;
    if (codigoEmp && nombreEmp) {
      codigoEmp.value = empresa.idEmpresa;
      nombreEmp.value = empresa.nombreEmpresa;
      console.log(codigoEmp);
    }
  }
  //obtener empresas
  obtenerEmpresas() {
    this.empresaService.listarEmpresas().subscribe((data) => {
      this.listaEmpresa = data.map((result) => {
        let empresa = new Empresa();
        empresa.idEmpresa = result.idEmpresa;
        empresa.nombreEmpresa = result.nombreEmpresa;
        empresa.rucEmpresa = result.rucEmpresa;
        empresa.correo = result.correo;
        empresa.direccion = result.direccion;
        empresa.numeroTelefono = result.numeroTelefono;
        return empresa;
      });
      this.dataSource.data = this.listaEmpresa;
      this.loading = false;
    
    });
  }

  //registrar la persona empresa
  crearpersonaemp() {
    this.personaempService
      .crearpersonaemp(this.personasemp)
      .subscribe((response) => {
        this.idpersonaempresa=response.idpersonaemp;
        this.capturarpersona(response.idpersonaemp);
        console.log('Exito al Registrar persona empresa',this.idpersonaempresa);
        this.copy_address();
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Registro existosp.',
          showConfirmButton: false,
          timer: 2000,
        });
      });
  }
  //funcion para copiar datos a diferentes forms
  copy_address() {
    const correoPersona = document.getElementById(
      'correoPersona'
    ) as HTMLInputElement;
    const cedulaPersona = document.getElementById(
      'cedulaPersona'
    ) as HTMLInputElement;
    const usercorreo = document.getElementById(
      'usercorreo'
    ) as HTMLInputElement;
    const usercedula = document.getElementById(
      'usercedula'
    ) as HTMLInputElement;
    const userpassword = document.getElementById(
      'userpassword'
    ) as HTMLInputElement;
    const NombreCompleto = document.getElementById(
      'NombreCompleto'
    ) as HTMLInputElement;
    const NombreCompleto2 = document.getElementById(
      'NombreCompleto2'
    ) as HTMLInputElement;
    ////nombres para usuario
    const first_name = document.getElementById(
      'first_name'
    ) as HTMLInputElement;
    const last_name = document.getElementById(
      'last_name') as HTMLInputElement;
    const second_name = document.getElementById(
      'second_name'
    ) as HTMLInputElement;
    const secondlast_name = document.getElementById(
      'secondlast_name'
    ) as HTMLInputElement;
    const celular = document.getElementById(
      'celular'
    ) as HTMLInputElement;
    if (
      correoPersona &&
      usercorreo &&
      cedulaPersona &&
      usercedula &&
      userpassword
    ) {
      usercorreo.value = correoPersona.value;
      usercedula.value = cedulaPersona.value;
      userpassword.value = this.contraseniaDefecto;
      NombreCompleto.value = first_name.value + ' ' + last_name.value;
      NombreCompleto2.value = first_name.value + ' ' + last_name.value;
      this.nombresCompleto = first_name.value.toUpperCase() + ' ' + second_name.value.toUpperCase();
      this.apellidosCompletos= last_name.value.toUpperCase() + ' ' + secondlast_name.value.toUpperCase();
      this.celulartutor= celular.value;
      console.log(this.celulartutor);
    }
  }

  idempre:any;
  //para crear el tutor empresarial
  empresacreada:any;
  obtenerempresacreada(idEmpresa: any){
   this.empresaService.getPorId(idEmpresa).subscribe(
     data =>{
      //  this.empresa = data;
       this.empresacreada = data;
       console.log(this.empresa);
       
     });
 }
 // obtener id usuario
 usuariocreada:any;
 obtenerUsuariocreado(idUsuario: any){
  this.userService.getUsuarioporId(idUsuario).subscribe(
    data =>{
      // this.usuarios = data;
      this.usuariocreada = data;
      console.log("estas es el id del usuario"+ this.usuariocreada);
      
    });
}
//crear tutor
tutorregistrado:any;
  creartutoremp() {
    this.tutorempresarial.numerocontacto=this.celulartutor;
    this.tutorempresarialService
      .creartutoremp(this.tutorempresarial)
      .subscribe(data =>{
        this.tutorregistrado = data;
        this.tutorempresarial.Empresa = this.empresacreada;
        this.tutorempresarial.usuario=this.usuariocreada;
        console.log("usuario del tutor"+ this.empresacreada)
        console.log("usuario del tutor"+ this.usuariocreada)
        console.log(("Exito al registrar el tutor"));
        this.tutorempresarialService.creartutoremp(this.tutorempresarial).subscribe({
        });
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Tutor Empresarial Registrado Exitosamente.',
          showConfirmButton: false,
          timer: 2000,
        });
        this.recargarPagina();
      });
      
      } 
//capturar persona

  idper!:any;
  capturarpersona(idpersonaemp:any){
    this.personaempService.buscarpersona(idpersonaemp).subscribe(data => {
      this.personasemp = data; // Se captura el valor de la propiedad idpersonaemp en la variable idper
     this.idper= this.personasemp.idpersonaemp;
      console.log(this.idper);
    });
  }


  // para crear el usuario
  crearusuario() {
    this.usuarios.idpersonaemp=this.idper;
    this.usuarios.contrasenia=this.contraseniaDefecto;
    this.usuarios.nombres= this.nombresCompleto;
    this.usuarios.apellidos=this.apellidosCompletos
    console.log("new"+ this.usuarios.contrasenia)
    console.log(this.usuarios.idpersonaemp);
    this.CreateAccountService.createUserempresa(this.usuarios).subscribe(response => {
      console.log('Exito al Registrar usuario');
      response.cedula;
      response.idUsuario;
      console.log("estas es la contrase;a"+ response.contrasenia);
      this.Agregarrol(response.cedula);
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Usuario Registrado Exitosamente.',
        text: '¡Recuerde que la contraseña por defecto es "Empresarial123"!',
        showConfirmButton: false,
        timer: 4000,
      });
    });
  }
  
  idemp:any;
  //////////////////obtener datos de otras tablas
  /////agregar roool
  Agregarrol(cedula: any) {
    this.userService.getcedula(this.usuarios.cedula).subscribe((usuarios) => {
      this.usuariosrol = usuarios;
      this.roltouser.cedula = this.usuariosrol.cedula;
      // Buscar si el usuario ya tiene el rol "ROLE_TUTOREMPRESARIAL"
      const tieneRol = this.usuariosrol.roles.some(
        (r) => r.rolNombre === 'ROLE_TUTOREMPRESARIAL'
      );
      // Si el usuario no tiene el rol, se agrega
      if (!tieneRol) {
        this.roles.push('ROLE_TUTOREMPRESARIAL');
      }
      this.roltouser.roles = this.roles;
      console.log(this.roltouser);
      this.permisoservice.addRoleToUser(this.roltouser).subscribe((x) => {
        this.roles = new Array<string>();
        this.closeModal();
      });
    });
  }

  // imageeeeeeeeeeeeeeeeeeeeen
  file: any = '';
  image!: any;
  retrievedImage: any;
  foto_usuario: string = 'nodisponible.png';
  cap_nombre_archivo: any;
  selectedFile!: File;
  public imageSelected(event: any) {
    const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
    const file = event.target.files[0];
    const extension = file.name.split('.').pop().toLowerCase();
    const fileSize = file.size / 1024;

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


  recargarPagina() {
    this.router.navigateByUrl('responsable/registro-empresarial', { skipLocationChange: true }).then(() => {
      this.router.navigate([this.router.url]);
    });
  }


}
