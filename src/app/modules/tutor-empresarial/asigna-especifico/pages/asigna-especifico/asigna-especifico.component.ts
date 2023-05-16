import { PracticaService } from 'src/app/services/practica.service';
import { AfterViewInit, Component, ViewChild, ElementRef} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SolicitudpracticasService } from 'src/app/services/solicitudpracticas.service';
import { SolicitudConvocatoriasService } from 'src/app/services/solicitudconvocatoria.service';
import { SolicitudPracticas } from 'src/app/models/solicitudpracticas';
import { SolicitudConvocatoria } from 'src/app/models/solicitudconvocatoria';
import { UserService } from 'src/app/services/user.service';
import { tutorempresarialService } from './../../../../../services/tutorempresarial.service';
import { MatStepper } from '@angular/material/stepper';
import Swal from 'sweetalert2';
import { Practica } from 'src/app/models/practica';
import { DocumentoAsigTutorEmpresarialService } from 'src/app/services/doc/DocumentoAsigTutorEmpresarial.service';
import { HttpEventType } from '@angular/common/http';


export interface Aprobados {
  nombre: string;
  fecha: string;
  carrera: string;
  esta: string;

}

const AP: Aprobados[] = [
  { nombre: 'Bryam Tenecota', fecha: '05-01-2022', carrera: 'TDS', esta: 'Finalizado' },
  { nombre: 'Carlos Ibarra', fecha: '05-01-2022', carrera: 'TDS', esta: 'Finalizado' },
  { nombre: 'Christian Barbecho', fecha: '05-01-2022', carrera: 'TDS', esta: 'Finalizado' },
  { nombre: 'Erika Fernandez', fecha: '08-01-2022', carrera: 'TDS', esta: 'Finalizado' },
  { nombre: 'Adriana Jaya', fecha: '08-01-2022', carrera: 'TDS', esta: 'Finalizado' },
];

@Component({
  selector: 'app-asigna-especifico',
  templateUrl: './asigna-especifico.component.html',
  styleUrls: ['./asigna-especifico.component.css']
})


export class AsignaEspecificoComponent implements AfterViewInit {


  practicasSolicitud: any;
  mivariable !: any;
  listaSolicitudesAprobadas: any;

  public filesToUpload!: Array<File>;

  //TABLA
  displayedColumns: string[] = ['position', 'name', 'weight', 'estado', 'symbol'];
  dataF1 = new MatTableDataSource<SolicitudPracticas>([]);

  dColumns: string[] = ['fecha', 'carrera', 'esta', 'sy', 'nombre'];
  dataTabla = new MatTableDataSource<SolicitudConvocatoria>([]);

  diColumns: string[] = ['nombres', 'apellidos', 'horai', 'horaf', 'opciones'];
  datam = new MatTableDataSource<Practica>([]);
  ///usuarios
  datosCargadosAprobados: boolean = false;
  datosTablaAprobados: any[] = [];

  idDocumento!: any;

  @ViewChild('paginator1', { static: true }) paginator1!: MatPaginator;
  @ViewChild('paginator2', { static: true }) paginator2!: MatPaginator;
  @ViewChild(MatStepper) stepper!: MatStepper;
  @ViewChild('inputFile') inputFile!: ElementRef;
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
  SolicitudPracticas: SolicitudPracticas = new SolicitudPracticas();
  Practica: Practica = new Practica();
  constructor(private _formBuilder: FormBuilder, private solicitudPracticas: SolicitudpracticasService,
    private solicitudService: SolicitudConvocatoriasService,
    private SolicitudpracticasService: SolicitudpracticasService,
    private PracticaService: PracticaService, private UserService: UserService,
    private tutorempresarialService: tutorempresarialService,
    private documentoAsigTutorEm: DocumentoAsigTutorEmpresarialService) { }

  ngOnInit(): void {
    this.ObtenerTutores();
    this.listarSolicitudesAprobadasPracticas();
  }
  estdo: string = "solicitud aprobada";
  idempres: any;
  cedus: any;

  listarSolicitudesAprobadasPracticas() {
    this.cedus = localStorage.getItem("idusuario");
    this.UserService.getuscedula(this.cedus).subscribe(datBuscar => {
      this.tutorempresarialService.extraerEmpresarialIdUsuario(datBuscar.idUsuario).subscribe(DataExtaer => {
        this.idempres = DataExtaer.empresa?.idEmpresa;
        this.solicitudPracticas.getBuscarPorEmpresa(this.idempres).subscribe(
          (res) => {
            this.practicasSolicitud = res;
            console.log(res);
            this.dataF1.data = this.practicasSolicitud
          }
        );
      });
    });
  }
  seleccionarConvocatoria(solicitud: any) {
    sessionStorage.setItem('solicitudPractica', JSON.stringify(solicitud));
    const valor = JSON.parse(
      sessionStorage.getItem('solicitudPractica') || '{}'
    );
    this.mivariable = valor.idSolicitudPracticas;
    console.log(this.mivariable)

  }
  selectedConvocatoria: any;
  lista: any[] = [];
  seleccionarSolicitud(soli: any) {
    this.selectedConvocatoria = soli;
    console.log('Valor seleccionado:', this.selectedConvocatoria);
    this.PracticaService.buscarPorUsuarioSolicitud(this.selectedConvocatoria).subscribe(dataSolictud => {
      console.log(dataSolictud)

      this.datosCargadosAprobados = true;
      this.lista = [];
      dataSolictud.forEach((practica: Practica) => {
        this.lista.push(practica);
      });
      this.datam.data = this.lista;
      console.log(this.lista);

    })
  }

  /////////////Listar Tutores
  ids: number = 1;
  listatutores: any;
  listatutorestrados: any[] = [];
  ce:any;
  empresadataid:any;
  ObtenerTutores() {
    this.ce = localStorage.getItem("idusuario");
    console.log("id usuario " + this.ce)
    this.UserService.getuscedula(this.ce).subscribe(dataUserEncon => {
      this.tutorempresarialService.extraerEmpresarialIdUsuario(dataUserEncon.idUsuario).subscribe(dataTutor => {
        console.log("esta es la dat del tuto");
        console.log(dataTutor);
        this.empresadataid = dataTutor.empresa.idEmpresa;
        console.log(this.empresadataid);
        this.SolicitudpracticasService.listarDocentes(this.empresadataid).subscribe((datax) => {
          if (Array.isArray(datax)) {
            this.listatutores = datax
          } else {
            console.log("Error: data no es un arreglo.");
          }
        });
      });
    });
    
  };

  tutorselect: any;
  cedulatutor: any
  idUsTuto: any;
  dataTutorcod: any
  onSelectTutor(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.cedulatutor = selectedValue;
    this.UserService.getuscedula(this.cedulatutor).subscribe(dataUsuario => {
      console.log(dataUsuario);
      this.idUsTuto = dataUsuario.idUsuario;
      this.tutorempresarialService.extraerEmpresarialIdUsuario(this.idUsTuto).subscribe(dataTutor => {
        this.dataTutorcod = dataTutor;
      });
    });
  }
  ///asignar tutor 
  idAsignar: any
  idPrac: any
  cedUsuario: any
  dataPracticacod: any

  asignar(id: any) {
    this.idAsignar = id;
    this.PracticaService.buscarId(this.idAsignar).subscribe(dataPractica => {
      this.dataPracticacod = dataPractica;
      this.idPrac = dataPractica.idPractica;
    });
  }

  actualizar() {
    this.Practica = this.dataPracticacod;
    this.Practica.tutorEmpresarial = this.dataTutorcod;
    this.Practica.checkEmpresarial = true;
    this.Practica.estadoPractica = true;
    this.PracticaService.UpdatePractica(this.Practica, this.idPrac).subscribe(datapractica => {
      console.log(datapractica);
    });
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Asignación de Tutor, Exitoso.',
      showConfirmButton: false,
      timer: 1000,
    });

  }

  resetStepper() {
    this.stepper.reset();
  }


  
  descargarPDF() {
    const idSolicitud = this.idPrac; // obtén el ID de la solicitud
    console.log(idSolicitud);
    
    const url = `http://localhost:8080/api/jasperReport/especifico/${idSolicitud}`;
    window.open(url, '_blank');
  }


  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

  onLoad(event: Event): void {

    const element = event.target as HTMLInputElement;
    const file = element.files?.item(0);
    if (file) {
      this.documentoAsigTutorEm.uploadFileDocumentoAsigTutorEmp(file)
        .subscribe(res => {
          console.log(res);
        });
    }
  }


  public upload(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];

      this.documentoAsigTutorEm.uploadFileDocumentoAsigTutorEmp(file,).subscribe(
        data => {
          if (data) {
            switch (data.type) {
              case HttpEventType.UploadProgress:
                console.log("progreso....");

                break;
              case HttpEventType.Response:
                this.inputFile.nativeElement.value = '';
                sessionStorage.setItem('ArchivoAsigTutorEmp', JSON.stringify(data.body));
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
      sessionStorage.getItem('ArchivoAsigTutorEmp') || '{}'
    );
    this.idDocumento = idDoc.id_documentoasigtutorempresarial;
    console.log(this.idDocumento);
    this.PracticaService.updateDocumentoAsigTutorEmpresarial(this.idPrac, this.idDocumento).subscribe(
      response => {
        console.log('Documento actualizado correctamente');
      },
      error => {
        //console.error('Error al actualizar el documento');
      }
    );
  }





}
