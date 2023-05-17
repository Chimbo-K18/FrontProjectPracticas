import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormControl } from '@angular/forms';
import { ConvocatoriasService } from 'src/app/services/convocatorias.service';
import { Convocatorias } from 'src/app/models/convocatorias';
import { SolicitudPracticas } from 'src/app/models/solicitudpracticas';
import { SolicitudConvocatoria } from 'src/app/models/solicitudconvocatoria';
import { PracticaService } from 'src/app/services/practica.service';
import { Practica } from 'src/app/models/practica';
import { BaseFenixService } from 'src/app/services/fenix/base-fenix.service';
import { UserService } from 'src/app/services/user.service';
import { CreateAccountService } from 'src/app/services/createaccount.service';
import Swal from 'sweetalert2';
import { Usuarios } from 'src/app/models/usuarios';
import { RolToUser } from 'src/app/models/RolToUser';
import { UsuarioRol } from 'src/app/models/UsuarioRol';
import { PermisosService } from 'src/app/services/permisos.service';
import { DocumentoAsigTutorAcademico } from 'src/app/services/doc/DocumentoAsigTutorAcademico.service';
import { HttpEventType } from '@angular/common/http';
import { Responsable_PPPService } from 'src/app/services/responsable_ppp.service';
import { MatStepper } from '@angular/material/stepper';

export interface Aprobados {
  nombre: string;
  fecha: string;
  carrera: string;
  esta: string;

}


@Component({
  selector: 'app-asigna-academico',
  templateUrl: './asigna-academico.component.html',
  styleUrls: ['./asigna-academico.component.css']
})

export class AsignaAcademicoComponent implements AfterViewInit {


  practicasSolicitud: SolicitudPracticas[] = [];
  mivariable !: any;
  listaSolicitudesAprobadas: any;
  convocatoria: Convocatorias = new Convocatorias();
  usuario: Usuarios = new Usuarios();
  roltouser: RolToUser = new RolToUser();
  public usuariosrol: UsuarioRol = new UsuarioRol()
  roles: String[] = [];
  practica: Practica = new Practica();

  //TABLA
  displayedColumns: string[] = ['position', 'name', 'weight', 'estado', 'symbol'];
  dataF1 = new MatTableDataSource<SolicitudPracticas>([]);

  dColumns: string[] = ['nombre', 'fechainicio', 'fechafin', 'horainicio', 'horafin', 'sy'];
  dataTabla = new MatTableDataSource<SolicitudConvocatoria>([]);

  diColumns: string[] = ['nombre', 'fecha', 'carrera', 'esta'];


  @ViewChild('paginator1', { static: true }) paginator1!: MatPaginator;
  @ViewChild('paginator2', { static: true }) paginator2!: MatPaginator;
  @ViewChild('inputFile') inputFile!: ElementRef;
  @ViewChild(MatStepper) stepper!: MatStepper;
  ngAfterViewInit() {
    this.dataF1.paginator = this.paginator1;
    this.dataTabla.paginator = this.paginator2;
  }

  //FINTABLA

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  tresFormGroup = this._formBuilder.group({
    tresCtrl: ['', Validators.required],
  });

  cuatroFormGroup = this._formBuilder.group({
    cuatroCtrl: ['', Validators.required],
  });

  cincoFormGroup = this._formBuilder.group({
    cincoCtrl: ['', Validators.required],
  });

  isEditable = false;
  idDocumento!: any;

  constructor(private basefenix: BaseFenixService,
    private _formBuilder: FormBuilder,
    private convocatoriaservice: ConvocatoriasService,
    private practicaservice: PracticaService,
    private userservice: UserService,
    private permisoservice: PermisosService,
    private crearusuarioservice: CreateAccountService,
    private documentoAsig: DocumentoAsigTutorAcademico, private responsableppservice: Responsable_PPPService) {
    this.traerdocente();
    this.traerdocenteRolAcademico();
  }

  ngOnInit(): void {


    setInterval(() => {

      this.listarConvocatorias();
      this.traerdocenteRolAcademico();
    }, 3500);

  }

  Ce:any;
  carreradata:any;
  listaconvocatoria: any[] = [];
  listarConvocatorias() {
    this.Ce = localStorage.getItem("idusuario");
    this.responsableppservice.getBuscarcedula(this.Ce).subscribe(datausu => {
    this.carreradata = datausu.carrera;
        this.convocatoriaservice.listarPorestadoConvocatoriaPorcarrera(this.carreradata).subscribe(dataconvo => {
          console.log(dataconvo);
          this.listaconvocatoria = dataconvo;
          this.dataF1.data = this.listaconvocatoria;

        });
      });

  }

  llevarid: any;
  llevarpracticadata: any;
  llevarpractica(practica: any) {
    this.llevarid = practica;
    this.practicaservice.buscarId(this.llevarid).subscribe(datapractica => {
      console.log(datapractica);
      this.llevarpracticadata = datapractica;
    });
  }


  listadocentes: any[] = [];
  traerdocente() {
    this.basefenix.getPersonasFenix().subscribe(
      data => {
        this.listadocentes = data;
        console.log(this.listadocentes);

      }
    );
  }

  listadocentesporrol: any[] = [];

  traerdocenteRolAcademico() {
    this.userservice.buscarUsuarioPorRol().subscribe(
      datadoce => {
        console.log(datadoce);
        this.listadocentesporrol = [];
        datadoce['forEach']((usuario: Usuarios) => {
          this.listadocentesporrol.push(usuario);
        });
        // Asignar la lista al datasource de la tabla
        console.log(this.listadocentesporrol);
      }
    );
  }
  tutorrolselectRol: any;
  cedulaencontradaRol: any;
  onSelectTutorRol(event: Event): void {
    const selectedValueROL = (event.target as HTMLSelectElement).value;
    if (selectedValueROL) {
      console.log('La cédula del tutor seleccionado es:', selectedValueROL);
      this.cedulaencontradaRol = selectedValueROL;
      console.log(this.cedulaencontradaRol);
      // hacer cualquier otra acción con la cédula seleccionada
    } else {
      console.log('No se ha seleccionado ningún tutor.');
    }
  }

  tutorselect: any;
  cedulaencontrada: any;
  onSelectTutor(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    if (selectedValue) {
      console.log('La cédula del tutor seleccionado es:', selectedValue);
      this.cedulaencontrada = selectedValue;
      console.log(this.cedulaencontrada);
      // hacer cualquier otra acción con la cédula seleccionada
    } else {
      console.log('No se ha seleccionado ningún tutor.');
    }
  }



  usuariocompleto: any;
  TraerUsuario() {
    this.userservice.getcedula(this.cedulaencontrada).subscribe(datacedula => {
      if (datacedula == null) {

        this.basefenix.consultarUserDocente(this.cedulaencontrada).subscribe(datadocente => {
          console.log(datadocente);
          this.usuario = new Usuarios();
          this.usuario.cedula = datadocente.cedula;
          this.usuario.nombres = datadocente.nombres;
          this.usuario.apellidos = datadocente.apellidos;
          this.usuario.correo = datadocente.correo_institucional;
          this.usuario.carrera = datadocente.carrera;
          this.usuario.contrasenia = 'Academico123';
          this.usuariocompleto = this.usuario;
        });


      } else {
        Swal.fire({
          position: 'top',
          icon: 'info',
          title: 'Usuario ya registrado o con otra función',
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  }

  crearusuario() {

    this.crearusuarioservice.createUserdocente(this.usuariocompleto).subscribe(data => {
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
  }

  Agregarrol(cedula: any) {
    this.userservice.getcedula(this.usuario.cedula).subscribe((usuarios) => {
      this.usuariosrol = usuarios;
      this.roltouser.cedula = this.usuariosrol.cedula;

      // Buscar si el usuario ya tiene el rol "ROLE_CORDINADOR"
      const tieneRolCordinador = this.usuariosrol.roles.some(r => r.rolNombre === 'ROLE_TUTORACADEMICO');

      // Si el usuario no tiene el rol, se agrega
      if (!tieneRolCordinador) {
        this.roles.push('ROLE_TUTORACADEMICO');
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

  resetStepper() {
    this.stepper.reset();
  }



  listapraacticas: any[] = [];
  seleccionarConvocatoria(solicitud: any) {
    console.log(solicitud);

    this.practicaservice.buscarPorconvocatoria(solicitud).subscribe(datapracticalist => {
      console.log(datapracticalist);
      this.listapraacticas = [];
      datapracticalist.forEach((practica: Practica) => {
        this.listapraacticas.push(practica);
      });
      // Asignar la lista al datasource de la tabla
      this.dataTabla.data = this.listapraacticas;
      console.log(this.listapraacticas);
    }
    );

  }

  AsignarTutorAcademico() {
    this.userservice.getcedula(this.cedulaencontradaRol).subscribe(databusroldoce => {
      this.practica = this.llevarpracticadata;
      this.practica.usuario = databusroldoce;
      this.practica = this.llevarpracticadata;
      this.practica.checkAcademico = true;
      this.practicaservice.UpdatePractica(this.practica, this.llevarid).subscribe(dataactualizado => {
        console.log(dataactualizado);
        Swal.fire(
          'PROCESO',
          'TERMINADO CON EXITO',
          'success'
        )
      });
    });
  }

  public upload(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];

      this.documentoAsig.uploadFileDocumentoAsigTutor(file,).subscribe(
        data => {
          if (data) {
            switch (data.type) {
              case HttpEventType.UploadProgress:
                console.log("progreso....");

                break;
              case HttpEventType.Response:
                this.inputFile.nativeElement.value = '';
                sessionStorage.setItem('ArchivoAsigTutorA', JSON.stringify(data.body));
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Documento guardado correctamente',
                  showConfirmButton: false,
                  timer: 1500,
                });

                this.actualizarDocumento();

                break;
            }
          }

        },
        error => {
          this.inputFile.nativeElement.value = '';
          Swal.fire(
            'Error',
            'El documento no se pudo subir.',
            'error'
          );

        }
      );
    }
  }

  actualizarDocumento() {
    const idDoc = JSON.parse(
      sessionStorage.getItem('ArchivoAsigTutorA') || '{}'
    );
    this.idDocumento = idDoc.id_documentoasigtutoracademico;
    console.log(this.idDocumento);
    this.practicaservice.updateDocumentoAsigTutorAcademico(this.llevarid, this.idDocumento).subscribe(
      response => {
        console.log('Documento actualizado correctamente');
      },
      error => {
        //console.error('Error al actualizar el documento');
      }
    );
  }

  //Metodo para descargar el documento
  descargarPDF() {
    const idPractica = this.llevarid; // obtén el ID de la solicitud
    const url = `http://localhost:8080/api/jasperReport/academico/${idPractica}`;
    window.open(url, '_blank');
  }


}

