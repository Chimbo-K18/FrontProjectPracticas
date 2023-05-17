import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { SolicitudpracticasService } from 'src/app/services/solicitudpracticas.service';
import { SolicitudPracticas } from 'src/app/models/solicitudpracticas';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Convenio } from 'src/app/models/convenios';
import { ConveniosService } from 'src/app/services/convenios.service';
import { DetalleConvenio } from 'src/app/models/detalleconvenio';
import { DetalleconvenioService } from 'src/app/services/detalleconvenio.service';
import { responsablePpp } from 'src/app/services/responsablePpp.service';
import { CarreraService } from 'src/app/services/carrera.service';
import { ResponsablePpp } from 'src/app/models/ResponsablePPP';
import { tutorempresarialService } from 'src/app/services/tutorempresarial.service';
import { DocumentoSolicitudPracticas } from 'src/app/models/docsGlobales/documentoPracticas';
import { Observable, Subscriber } from 'rxjs';
import { error, log } from 'console';
import { DocumentoSolicitudPracticaService } from 'src/app/services/doc/DocumentoSolicitudPractica.service';
import { SafeResourceUrl } from '@angular/platform-browser';
import { URL } from 'url';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { ElementRef } from '@angular/core';
import { DocumentoSolPracticasService } from 'src/app/services/doc/documento-sol-practicas.service';
import { MatStepper } from '@angular/material/stepper';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-envio-solicitud',
  templateUrl: './envio-solicitud.component.html',
  styleUrls: ['./envio-solicitud.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class EnvioSolicitudComponent implements OnInit {
  detalles: any;
  nombre: any;
  idRes: any;



  //myForm: FormGroup;


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatStepper) stepper!: MatStepper;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ceroFormGroup = this._formBuilder.group({
    cerotCtrl: ['', Validators.required],
  });

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  thirdFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  //llamado a la clase
  public solicitudPractica: SolicitudPracticas = new SolicitudPracticas();
  actividad: DocumentoSolicitudPracticas = new DocumentoSolicitudPracticas();

  //llamada a la clase donde se guarda el documento
  public guardarSolicitud: DocumentoSolicitudPracticas = new DocumentoSolicitudPracticas();
  convenios: Convenio[] | undefined;
  listaDetalles: DetalleConvenio[] | undefined;

  mivariable!: string;
  numerodeempresarial !: any;
  micarrera!: string;
  micarrera2!: string;
  responsable!: ResponsablePpp;
  responsable2!: any;
  responsableKO!: any;
  mitutor !: string;
  tutorEmpre !: any;
  solicitudGenerada !: any;
  public archivos: any = [];
  respon!: ResponsablePpp;
  private fileTmp: any;
  selectedFile!: File;
  idDocumento!: any;
  @ViewChild('inputFile') inputFile!: ElementRef;

  constructor(
    private _formBuilder: FormBuilder,
    private solicitud: SolicitudpracticasService,
    private convenioService: ConveniosService,
    private detalleService: DetalleconvenioService,
    private responsableService: responsablePpp,
    private empresarialService: tutorempresarialService,
    private documentoSpService: DocumentoSolicitudPracticaService,

  ) { }







  ngOnInit(): void {
    this.extraerEmpresarial();
    const dropArea = document.querySelector<HTMLElement>('.drop_box')!;
    const button = dropArea.querySelector<HTMLButtonElement>('button')!;
    const input = dropArea.querySelector<HTMLInputElement>('input')!;


    let filename: string;

    button.onclick = () => {
      input.click();
    };
  }
  resetStepper() {
    this.stepper.reset();
  }

  seleccionarDetalle(detalles: any) {
    sessionStorage.setItem('detalleSeleccionado', JSON.stringify(detalles));
    this.obtenerCarrera();

    const valor = JSON.parse(
      sessionStorage.getItem('detalleSeleccionado') || '{}'
    );
    this.mivariable = valor.nombre_carrera;


    this.getCurrentDate();
    this.obtenerID();

  }

  getCurrentDate() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  public create() {
    this.solicitudPractica.nombre_carrera = this.mivariable;
    this.solicitudPractica.fechaEnvioSolicitud = this.getCurrentDate();
    this.solicitudPractica.responsablePPP = this.responsableKO;
    this.solicitudPractica.tutorEmpresarial = this.tutorEmpre;

    return this.solicitud.saveSolicitud(this.solicitudPractica).subscribe(
      (res) => {
        //this.router.navigate(['/administrador/lista-vehiculos'])
        this.solicitudGenerada = res.idSolicitudPracticas;
        console.log(this.solicitudGenerada)
        console.log(res);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Se a creado correctamente',
          showConfirmButton: false,
          timer: 1500,
        });



      },

      (err) => console.error(err)
    );
  }

  actualizarDocumento() {
    const idDoc = JSON.parse(
      sessionStorage.getItem('ArchivoSolicitudPrc') || '{}'
    );
    this.idDocumento = idDoc.id_documentoSolicitudPrc;
    console.log(this.idDocumento);
    this.solicitud.updateSolicitudPractica(this.solicitudGenerada, this.idDocumento).subscribe(
      response => {
        console.log('Documento actualizado correctamente');
      },
      error => {
        //console.error('Error al actualizar el documento');
      }
    );
  }

  validaRequest() {
    if (
      !this.solicitud.getRequest(this.solicitudPractica.idSolicitudPracticas)
    ) {
      console.log('Solicitud Encontrada');
    } else {
      this.create();
    }
  }

  public listar() {
    this.convenioService
      .getConvenios()
      .subscribe((res) => (this.convenios = res));
  }

  public listarDetalles() {
    console.log("entro al metodo");


    this.detalleService.getDetalleConvenioxEmpresa(1)
      .subscribe(
        detallesConvenio => {
          this.listaDetalles = detallesConvenio;
        },
        error => {
          console.error(error);
        }
      );
  }

  public nombreResponsable: string = '';
  public nombreResponsable2: any;
  public filesToUpload!: Array<File>;

  obtenerCarrera() {

    const valorCarrera = JSON.parse(
      sessionStorage.getItem('detalleSeleccionado') || '{}'
    );
    this.micarrera = valorCarrera.nombre_carrera;

    this.responsableService.getCarrera(this.micarrera).subscribe(
      (data) => {
        this.responsable = data;
        console.log(data);

        this.nombreResponsable = data.nombreCompleto; // Asignar el valor a la variable de clase
        // Llamar al método getIdResp con el parámetro
      },
      (error) => {
        console.error(error);
      }
    );
  }

  extraerEmpresarial() {

    const valorEmpresarial = JSON.parse(
      sessionStorage.getItem('auth-user') || '{}'
    );
    this.mitutor = valorEmpresarial.id;

    console.log(this.mitutor)

    this.empresarialService.extraerEmpresarialIdUsuario(this.mitutor).subscribe(
      (data) => {

        this.tutorEmpre = data;
        this.numerodeempresarial = data.empresa.idEmpresa
        console.log(data)

        this.detalleService.getDetalleConvenioxEmpresa(data.empresa.idEmpresa)
          .subscribe(
            detallesConvenio => {
              this.listaDetalles = detallesConvenio;
            },
            error => {
              console.error(error);
            }
          );
      }
    )


  }

  obtenerID() {
    const valCarrera = JSON.parse(
      sessionStorage.getItem('detalleSeleccionado') || '{}'
    );
    this.micarrera2 = valCarrera.nombre_carrera;

    this.responsableService.getIdResp(this.micarrera2).subscribe(
      (data) => {
        this.responsable2 = data;
        console.log(data);

        this.nombreResponsable2 = data; // Asignar el valor a la variable de clase

        this.responsableService
          .getResponsable(this.responsable2)
          .subscribe((data01) => {

            this.responsableKO = data01;
            console.log(data01);

          });
        // Llamar al método getIdResp con el parámetro
      },
      (error) => {
        console.error(error);
      }
    );
  }

  //Metodo para descargar la solicitud de practicas
  descargarPDF() {
    const idSolicitud = this.solicitudGenerada; // obtén el ID de la solicitud
    const url = `http://localhost:8080/api/jasperReport/descargar/${idSolicitud}`;
    window.open(url, '_blank');
  }


  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

  onLoad(event: Event): void {
    const element = event.target as HTMLInputElement;
    const file = element.files?.item(0);
    if (file) {
      this.documentoSpService.uploadFileDocumentoSolicitudPractica(file)
        .subscribe(res => {
          console.log(res);
        });
    }
  }


  public upload(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];

      this.documentoSpService.uploadFileDocumentoSolicitudPractica(file,).subscribe(
        data => {
          if (data) {
            switch (data.type) {
              case HttpEventType.UploadProgress:
                console.log("progreso....");

                break;
              case HttpEventType.Response:
                this.inputFile.nativeElement.value = '';
                sessionStorage.setItem('ArchivoSolicitudPrc', JSON.stringify(data.body));
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



}
