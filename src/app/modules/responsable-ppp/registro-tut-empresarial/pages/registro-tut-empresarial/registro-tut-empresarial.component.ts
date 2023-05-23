import { CreateAccountService } from 'src/app/services/createaccount.service';
import { tutorempresarialService } from 'src/app/services/tutorempresarial.service';
import { tutorempresarial } from 'src/app/models//tutorempresarial';
import { Personas_empresa } from 'src/app/models/personaemp';
import { personaempService } from './../../../../../services/personaemp.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
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
import { FotoService } from 'src/app/services/foto.service';
import { MatStepper } from '@angular/material/stepper';
import { forkJoin } from 'rxjs';
@Component({
  selector: 'app-registro-tut-empresarial',
  templateUrl: './registro-tut-empresarial.component.html',
  styleUrls: ['./registro-tut-empresarial.component.css'],
})
export class RegistroTutEmpresarialComponent {
  selectedEmpresa: any;

  //TABLA empresa
  displayedColumns: string[] = ['rucEmpresa','nombreEmpresa', 'direccion','agg'];
  dataSource = new MatTableDataSource<Empresa>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatStepper) stepper!: MatStepper;

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
    cedula: [''],
    primer_nombre: [''],
    segundo_nombre: [''],
    primer_apellido: [''],
    segundo_apellido: [''],
    celular: [''],
    departamento: [''],
    titulo: [''],
    correo: [''],
    cargo: [''],
    genero: ['']
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
  personasemp: Personas_empresa = new Personas_empresa();
  tutorempresarial: tutorempresarial = new tutorempresarial();
  usuarios: Usuarios = new Usuarios();
  rol: RolToUser = new RolToUser();
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
  codigoempresa:any;
  idusuariotutor:any
  cedulapersonass:any;
  correoconsulta:any;
  constructor(
    private _formBuilder: FormBuilder,
    public dialog: MatDialog,
    private personaempService: personaempService,
    private tutorempresarialService: tutorempresarialService,
    private userService: UserService,
    private CreateAccountService:CreateAccountService,
    private permisoservice: PermisosService,
    private empresaService: EmpresaService,
    private FotoService:FotoService,
  ) {}

  ngOnInit(): void {
    this.personasemp = new Personas_empresa(); // Inicializar la propiedad 'personasemp' con una instancia de PersonasEmp
    this.personasemp.genero = '';
    this.personasemp.cedula = '';
    this.personasemp.correo = '';
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
      this.codigoempresa=empresa.idEmpresa;
      console.log("este el idempresa para tutor" +  this.codigoempresa);
    }
  }
  verficarcedula(){
    const correoPersona = document.getElementById(
      'correoPersona'
    ) as HTMLInputElement;
    const cedulaPersona = document.getElementById(
      'cedulaPersona'
    ) as HTMLInputElement;
    this.cedulapersonass=cedulaPersona.value;
    this.correoconsulta=correoPersona.value;
  }

  //funcion para copiar datos a diferentes forms
  cargardatoseninput() {
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
      this.celulartutor=celular.value;
    }
  }
  //obtener empresas
  obtenerEmpresas() {
    this.empresaService.listarEmpresa().subscribe((data) => {
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
  cedulausu:any;
  correousu:any;
  nombresusu:any;
  apellidosusu:any;
  crearpersona() {
    this.verficarcedula();
    this.personaempService.buscarcedulapersona(this.cedulapersonass).subscribe(buscarpersona => {
      if (buscarpersona.cedula == this.cedulapersonass) {
        Swal.fire(
          'Error',
          'La cedula ya está registrada.',
          'error'
        );
      }
    });
  
    this.personaempService.buscarcorreopersona(this.correoconsulta).subscribe(buscarpersona => {
      if (buscarpersona.correo == this.correoconsulta) {
        Swal.fire(
          'Error',
          'El correo ya está registrado.',
          'error'
        );
      }
    });
  
    // Expresión regular para validar el correo
    const emailRegex = /^[\w-]+(\.[\w-]+)*@gmail\.com$|^[\w-]+(\.[\w-]+)*@hotmail\.com$/;
  
    if (!emailRegex.test(this.personasemp.correo)) {
      Swal.fire(
        'Error',
        'El correo no tiene un formato válido.',
        'error'
      );
      return; // Salir de la función si el correo no es válido
    }
  
    this.personaempService.crearpersonaemp(this.personasemp).subscribe(data => {
      localStorage.setItem("cedulapersona", String(data.cedula));
      this.cargardatoseninput();
      this.stepperNext();
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Registro Exitoso.',
        showConfirmButton: false,
        timer: 2000,
      });
    });
  }
    

variableencontrada:any;
  crearusuario(){
    this.variableencontrada = localStorage.getItem("cedulapersona");
    this.personaempService.buscarcedulapersona(this.variableencontrada).subscribe(databus =>{
      console.log(databus);
      this.usuarios.usuario_persona_empresa= databus;
      this.usuarios.nombres = this.nombresCompleto;
      this.usuarios.apellidos=this.apellidosCompletos;
      this.usuarios.contrasenia=this.contraseniaDefecto;
      this.CreateAccountService.createUserempresa(this.usuarios).subscribe(datausu =>{
        this.Agregarrol(databus.cedula);
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Usuario Registrado Exitosamente.',
          text: '¡Recuerde que la contraseña por defecto es "Empresarial123"!',
          showConfirmButton: false,
          timer: 4000,
        });
        this.cargarImagen();
      });
    });
  }
  variableencontradatuto:any;
  creartutor(){
    this.variableencontradatuto = localStorage.getItem("cedulapersona");
    console.log(this.variableencontradatuto);
    this.empresaService.buscarId(this.codigoempresa).subscribe(dataempre =>{
      console.log(dataempre);
      this.tutorempresarial.empresa = dataempre;
      this.userService.getuscedula(this.variableencontradatuto).subscribe(datausututo =>{
        console.log(datausututo);
        this.tutorempresarial.usuario_empresarial = datausututo;
        this.tutorempresarial.numeroContacto=this.celulartutor;
        this.tutorempresarial.estado=true;
        console.log("este el celular" + this.tutorempresarial.numeroContacto);
        this.tutorempresarialService.creartutoremp(this.tutorempresarial).subscribe(datatutor =>{
          console.log(datatutor);
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Tutor Empresarial Registrado Exitosamente.',
            showConfirmButton: false,
            timer: 2000,
          });
          this.resetStepper();

        })
      })
    })
  }
  Agregarrol(cedula: any) {
    this.userService.getcedula(cedula).subscribe((usuarios) => {
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
    Swal.fire(
      'Error',
      'La imagen seleccionada es demasiado grande. El tamaño máximo permitido es de 1000 KB.',
      'error'
          );
    return;
  }

  if (!allowedExtensions.includes(extension)) {
    Swal.fire(
      'Error',
      'Solo se permiten imágenes en formato JPG, PNG o GIF.',
      'error'
          );
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
variableFoto:any
idpersonaencontrada:any
cargarImagen() {
  // this.FotoService.guardarImagenes(this.selectedFile);
  // console.log(this.selectedFile);
  this.variableFoto = localStorage.getItem("cedulapersona");
  this.personaempService.buscarcedulapersona(this.variableFoto).subscribe(datafoto=>{
  this.idpersonaencontrada= datafoto.idpersonaemp;
  console.log( this.idpersonaencontrada);
  this.personasemp=datafoto;
  this.personasemp.foto=this.foto_usuario;
  this.personaempService.actualizarpersona(this.personasemp,this.idpersonaencontrada).subscribe(
    (datapersencontrada) => {
      console.log(datapersencontrada);
    });
  });
 

}


 ////controlador botones xd
resetStepper() {
  this.stepper.reset();
}
stepperNext() {
  this.stepper.next();
}
}
