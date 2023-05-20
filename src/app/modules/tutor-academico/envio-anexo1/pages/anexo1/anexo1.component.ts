import { AfterViewInit, Component, ViewChild,ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormControl } from '@angular/forms';
import { ConvocatoriasService } from 'src/app/services/convocatorias.service';
import { Convocatorias } from 'src/app/models/convocatorias';
import { SolicitudpracticasService } from 'src/app/services/solicitudpracticas.service';
import { SolicitudConvocatoriasService } from 'src/app/services/solicitudconvocatoria.service';
import { SolicitudPracticas } from 'src/app/models/solicitudpracticas';
import { SolicitudConvocatoria } from 'src/app/models/solicitudconvocatoria';
import { UserService } from 'src/app/services/user.service';
import { PracticaService } from 'src/app/services/practica.service';
import { Practica } from 'src/app/models/practica';
import { Anexo1 } from 'src/app/models/anexos/anexo1';
import { Anexo1Service } from 'src/app/services/anexos/anexo1.service';
import Swal from 'sweetalert2';
import { DocumentoAnexo1Service } from 'src/app/services/docAnexos/DocumentoAnexo1.service';
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
  selector: 'app-anexo1',
  templateUrl: './anexo1.component.html',
  styleUrls: ['./anexo1.component.css']
})



export class Anexo1Component implements AfterViewInit {


  practicasSolicitud: SolicitudPracticas[] = [];
  mivariable !: any;
  listaSolicitudesAprobadas: any;
  anexo1: Anexo1 = new Anexo1();
  practica: Practica = new Practica();
  public filesToUpload!: Array<File>;
  idDocumento!: any;

  //TABLA
  displayedColumns: string[] = ['position', 'name', 'weight', 'estado', 'nombre', 'symbol'];
  dataF1 = new MatTableDataSource<Practica>([]);

  dColumns: string[] = ['nombre', 'fechainicio', 'fechafin', 'horainicio', 'horafin', 'sy'];
  dataTabla = new MatTableDataSource<SolicitudConvocatoria>([]);

  diColumns: string[] = ['nombre', 'fecha', 'carrera', 'esta'];
  datam = new MatTableDataSource<Aprobados>(AP);

  @ViewChild('paginator1', { static: true }) paginator1!: MatPaginator;
  @ViewChild('paginator2', { static: true }) paginator2!: MatPaginator;
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

  constructor(private _formBuilder: FormBuilder, 
    private solicitudPracticas: SolicitudpracticasService, 
    private anexo1service: Anexo1Service,
    private solicitudService: SolicitudConvocatoriasService,
    private userService: UserService, 
    private practicaservice: PracticaService,
    private documentoAnexo1: DocumentoAnexo1Service) { }

  ngOnInit(): void {

    this.listarSolicitudesAprobadasPracticas();
  }


  estadosoli: any;
  idsolienc: any;
  Ceduss: any;
  dataUs: any;
  dataSolicitud: any;
  idsoliG: any;
  id: any;
  datatutorEmps: any
  practicasSolicitudesd: any;
  listarSolicitudesAprobadasPracticas() {
    this.Ceduss = localStorage.getItem("idusuario");
    console.log("id usuario " + this.Ceduss);
    this.practicaservice.listarPorAcademico(this.Ceduss).subscribe(datapractica => {
      this.practicasSolicitudesd = datapractica;
      console.log(datapractica);

      this.dataF1.data = this.practicasSolicitudesd

    });
  }


  listapraacticas: any[] = [];
  seleccionarConvocatoria(idconvo: any) {
    console.log(idconvo);
    this.solicitudService.SolicitudesPorAnexo1(idconvo).subscribe(datapracticalist => {
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

  idanexo1: any;
  anexo1generado: any;
  anexodataencontrada: any;
  idprac:any;
  CreaAnexo1(anexoid: any) {
    this.idanexo1 = anexoid;
    this.practicaservice.buscarPorconvocatoriaParaAnexo1(anexoid).subscribe(practicadata => {
      console.log(practicadata);
      this.idprac = practicadata;
      this.practicaservice.buscarId(this.idprac).subscribe(practicadataencontrada =>{
        console.log(practicadataencontrada);
        this.practica = practicadataencontrada;
        this.practica.estadoanexo1 = true;
        this.practicaservice.UpdatePractica(this.practica, this.idprac).subscribe(practicaupdate => {
          console.log(practicaupdate);
          this.anexo1.practica = practicaupdate;
          this.anexo1.estado_academico = true;
          this.anexo1service.crearAnexo1(this.anexo1).subscribe(dataanexo1 => {
            console.log(dataanexo1);
            this.anexo1generado = dataanexo1.idAnexo1;
            Swal.fire(
              'PROCESO',
              'GENERADO CON EXITO',
              'success'
            )
          });
        });
      });
      

    });
  }

  descargarPDF() {
    const idAnexo1 = this.anexo1generado; // obtén el ID de la solicitud
    const url = `http://localhost:8080/api/jasperReport/anexo1/${idAnexo1}`;
    window.open(url, '_blank');
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

  onLoad(event: Event): void {
    const element = event.target as HTMLInputElement;
    const file = element.files?.item(0);
    if (file) {
      this.documentoAnexo1.uploadFileDocumentoAnexo1(file)
        .subscribe(res => {
          console.log(res);
        });
    }
  }


  public upload(event: any) {

    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      this.documentoAnexo1.uploadFileDocumentoAnexo1(file).subscribe(
        data => {
          if (data) {
            switch (data.type) {
              case HttpEventType.UploadProgress:
                console.log("progreso....");

                break;
              case HttpEventType.Response:
                this.inputFile.nativeElement.value = '';
                sessionStorage.setItem('ArchivoAnexo1', JSON.stringify(data.body));
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
      sessionStorage.getItem('ArchivoAnexo1') || '{}'
    );
    this.idDocumento = idDoc.id_documentoAnexo1;
    this.anexo1service.updateDocumentoAnexo1(this.anexo1generado, this.idDocumento).subscribe(

      response => {
        console.log('Documento actualizado correctamente');
      },
      error => {
        //console.error('Error al actualizar el documento');
      }
    );
  }

}
