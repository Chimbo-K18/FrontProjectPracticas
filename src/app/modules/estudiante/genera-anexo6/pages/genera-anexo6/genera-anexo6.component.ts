import {AfterViewInit, Component, ViewChild,ElementRef } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SolicitudPracticas } from 'src/app/models/solicitudpracticas';
import { SolicitudConvocatoria } from 'src/app/models/solicitudconvocatoria';
import Swal from 'sweetalert2';
import { PracticaService } from 'src/app/services/practica.service';
import { Practica } from 'src/app/models/practica';
import { Anexo6Service } from 'src/app/services/anexos/anexo6.service';
import { Anexo6 } from 'src/app/models/anexos/anexo6';
import { HttpEventType } from '@angular/common/http';
import { DocumentoAnexo6Service } from 'src/app/services/docAnexos/DocumentoAnexo6.service';

export interface Aprobados {
  nombre: string;
  fecha: string;
  carrera: string;
  esta: string;

}

@Component({
  selector: 'app-genera-anexo6',
  templateUrl: './genera-anexo6.component.html',
  styleUrls: ['./genera-anexo6.component.css']
})

export class GeneraAnexo6Component   implements AfterViewInit{


  practicasSolicitud: SolicitudPracticas[] = [] ;
  mivariable !: any;
  listaSolicitudesAprobadas: any;
  practica : Practica= new Practica();
  anexo6: Anexo6 = new Anexo6();
  public filesToUpload!: Array<File>;
  DocumentoAnexo6!: any;

  //TABLA
  displayedColumns: string[] = ['position', 'name', 'weight', 'estado','nombre', 'symbol', 'boton'];
  dataF1 = new MatTableDataSource<SolicitudPracticas>([]);

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
    private anexo6service: Anexo6Service,
    private documentoAnexo6: DocumentoAnexo6Service) { }

  ngOnInit(): void {

    this.listarSolicitudesAprobadasPracticas();
  }

  datatutorEmps: any
  practicasSolicitudesd: any;
  ce:any
  listarSolicitudesAprobadasPracticas() {
    this.ce = localStorage.getItem("idusuario");
    console.log("id usuario " + this.ce);
    this.practicaservice.buscarPorconvocatoriaPorestudianteAnexo6(this.ce).subscribe(datapractica =>{
      this.practicasSolicitudesd = datapractica;
      console.log(datapractica);

      this.dataF1.data = this.practicasSolicitudesd

    });
  }

  Captirarid(id:any){

  }


  fechaini:any;
  fechafin:any;
  numerosemana:any;
  GenerarFechas(){
    const fechainicio = document.getElementById(
      'fechainicio'
    ) as HTMLInputElement;
    this.fechaini = fechainicio.value;
    console.log(this.fechaini);

    const fechafinal = document.getElementById(
      'fechafinal'
    ) as HTMLInputElement;
    this.fechafin = fechafinal.value;
    console.log(this.fechafin);

    const numero = document.getElementById(
      'numero'
    ) as HTMLInputElement;
    this.numerosemana = numero.value;
    console.log(this.numerosemana);

  }
  idanexo6:any;
  idAnexo6Generado: any;
  CreaAnexo6(anexoid:any){
    this.idanexo6 = anexoid;
    this.practicaservice.buscarId(anexoid).subscribe(practicadata=>{
      console.log(practicadata);
      this.practica = practicadata;
      this.practica.estadoanexo6 = true;
      this.practicaservice.UpdatePractica(this.practica, this.idanexo6).subscribe(practicaupdate=>{
        console.log(practicaupdate);
        this.anexo6.practica = practicaupdate;
        this.anexo6.estado_estudiante = true;
        this.anexo6.fecha_inicio = this.fechaini;
        this.anexo6.fecha_fin = this.fechafin;
        this.anexo6.numero_semana = this.numerosemana;
        this.anexo6service.crearAnexo6(this.anexo6).subscribe(dataanexo6=>{
          console.log(dataanexo6);
          this.idAnexo6Generado = dataanexo6.idAnexo6;
          Swal.fire(
            'PROCESO',
            'GENERADO CON EXITO',
            'success'
          )
        });
      });

    });
  }

  descargarPDF() {
    const idanexo6 = this.idAnexo6Generado; // obtén el ID de la solicitud
    const url = `http://localhost:8080/api/jasperReport/anexo6/${idanexo6}`;
    window.open(url, '_blank');
  }

  fileChangeEvent(event: any) {
    this.filesToUpload = <Array<File>>event.target.files;
  }
  
  onLoad(event: Event): void {
    const element = event.target as HTMLInputElement;
    const file = element.files?.item(0);
    if (file) {
      this.documentoAnexo6.uploadFileDocumentoAnexo6(file).subscribe(
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
      this.documentoAnexo6.uploadFileDocumentoAnexo6(file).subscribe(
        event => {
          if (event.type === HttpEventType.UploadProgress) {
            console.log('Progreso de carga:', event.loaded, '/', event.total);
          } else if (event.type === HttpEventType.Response) {
            this.inputFile.nativeElement.value = '';
            sessionStorage.setItem('ArchivoAnexo6', JSON.stringify(event.body));
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
    const idDoc = JSON.parse(sessionStorage.getItem('ArchivoAnexo6') || '{}');
    const documentoAnexo5 = idDoc.id_documentoAnexo6;
    
    this.anexo6service.updateDocumentoAnexo6(this.idAnexo6Generado, documentoAnexo5).subscribe(
      response => {
        console.log('Documento actualizado correctamente');
      },
      error => {
        //console.error('Error al actualizar el documento', error);
      }
    );
  }

}
