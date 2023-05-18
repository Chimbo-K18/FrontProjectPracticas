import {AfterViewInit, Component, ViewChild,ElementRef } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SolicitudPracticas } from 'src/app/models/solicitudpracticas';
import { SolicitudConvocatoria } from 'src/app/models/solicitudconvocatoria';
import Swal from 'sweetalert2';
import { PracticaService } from 'src/app/services/practica.service';
import { Practica } from 'src/app/models/practica';
import { Anexo5 } from 'src/app/models/anexos/anexo5';
import { Anexo5Service } from 'src/app/services/anexos/anexo5.service';
import { DocumentoAnexo5Service } from 'src/app/services/docAnexos/DocumentoAnexo5.service';
import { HttpEventType } from '@angular/common/http';
import { SolicitudConvocatoriasService } from 'src/app/services/solicitudconvocatoria.service';
@Component({
  selector: 'app-genera-anexo5',
  templateUrl: './genera-anexo5.component.html',
  styleUrls: ['./genera-anexo5.component.css']
})

export class GeneraAnexo5Component   implements AfterViewInit{


  practicasSolicitud: SolicitudPracticas[] = [] ;
  mivariable !: any;
  listaSolicitudesAprobadas: any;
  practica : Practica= new Practica();
  anexo5: Anexo5 = new Anexo5();
  public filesToUpload!: Array<File>;
  DocumentoAnexo5!: any;


  //TABLA
  displayedColumns: string[] = ['position', 'name', 'weight', 'estado', 'nombre', 'symbol'];
  dataF1 = new MatTableDataSource<Practica>([]);

  dColumns: string[] = ['nombre', 'fechainicio', 'fechafin', 'horainicio', 'horafin', 'sy'];
  dataTabla = new MatTableDataSource<SolicitudConvocatoria>([]);

  @ViewChild('paginator1', {static: true}) paginator1!: MatPaginator;
  @ViewChild('paginator2', {static: true}) paginator2!: MatPaginator;
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
    private practicaservice: PracticaService, 
    private anexo5service: Anexo5Service, private solicitudService: SolicitudConvocatoriasService,
    private documentoAnexo5: DocumentoAnexo5Service) { }

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
    this.solicitudService.SolicitudesPorAnexo5(idconvo).subscribe(datapracticalist => {
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

  idanexo5: any;
  anexo5generado: any;
  anexodataencontrada: any;
  idprac:any;
  CreaAnexo5(anexoid: any) {
    this.idanexo5 = anexoid;
    this.practicaservice.buscarPorconvocatoriaParaAnexo1(anexoid).subscribe(practicadatabusque => {
      console.log(practicadatabusque);
      this.idprac = practicadatabusque;
      this.practicaservice.buscarId(this.idprac).subscribe(practicadata => {
        console.log(practicadata);
        this.practica = practicadata;
        this.practica.estadoanexo5 = true;
        this.practicaservice.UpdatePractica(this.practica, this.idprac).subscribe(practicaupdate => {
          console.log(practicaupdate);
          this.anexo5.practica = practicaupdate;
          this.anexo5.estado_academico = true;
          this.anexo5service.crearAnexo5(this.anexo5).subscribe(dataanexo5 => {
            console.log(dataanexo5);
            this.anexo5generado = dataanexo5.idAnexo5;
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
    const idSolicitud = this.anexo5generado; // obtén el ID de la solicitud
    const url = `http://localhost:8080/api/jasperReport/anexo5/${idSolicitud}`;
    window.open(url, '_blank');
  }

  fileChangeEvent(event: any) {
    this.filesToUpload = <Array<File>>event.target.files;
  }
  
  onLoad(event: Event): void {
    const element = event.target as HTMLInputElement;
    const file = element.files?.item(0);
    if (file) {
      this.documentoAnexo5.uploadFileDocumentoAnexo5(file).subscribe(
        res => {
          console.log(res);
        },
        error => {
          console.error('Error al subir el archivo', error);
        }
      );
    }
  }
  
  public upload(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      this.documentoAnexo5.uploadFileDocumentoAnexo5(file).subscribe(
        event => {
          if (event.type === HttpEventType.UploadProgress) {
            console.log('Progreso de carga:', event.loaded, '/', event.total);
          } else if (event.type === HttpEventType.Response) {
            this.inputFile.nativeElement.value = '';
            sessionStorage.setItem('ArchivoAnexo5', JSON.stringify(event.body));
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Documento guardado correctamente',
              showConfirmButton: false,
              timer: 1500,
            });
            this.actualizarDocumento();
          }
        },
        error => {
          this.inputFile.nativeElement.value = '';
          Swal.fire('Error', 'El documento no se pudo subir.', 'error');
        }
      );
    }
  }
  
  actualizarDocumento() {
    const idDoc = JSON.parse(sessionStorage.getItem('ArchivoAnexo5') || '{}');
    const documentoAnexo5 = idDoc.id_documentoAnexo5;
    
    this.anexo5service.updateDocumentoAnexo5(this.anexo5generado, documentoAnexo5).subscribe(
      response => {
        console.log('Documento actualizado correctamente');
      },
      error => {
        //console.error('Error al actualizar el documento', error);
      }
    );
  }

}
