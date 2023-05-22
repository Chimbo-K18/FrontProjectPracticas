import {AfterViewInit, Component, ViewChild, ElementRef} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SolicitudPracticas } from 'src/app/models/solicitudpracticas';
import { SolicitudConvocatoria } from 'src/app/models/solicitudconvocatoria';
import Swal from 'sweetalert2';
import { PracticaService } from 'src/app/services/practica.service';
import { Practica } from 'src/app/models/practica';
import { Anexo8 } from 'src/app/models/anexos/anexo8';
import { Anexo8Service } from 'src/app/services/anexos/anexo8.service';
import { HttpEventType } from '@angular/common/http';
import { DocumentoAnexo8Service } from 'src/app/services/docAnexos/DocumentoAnexo8.service';


@Component({
  selector: 'app-genera-anexo8',
  templateUrl: './genera-anexo8.component.html',
  styleUrls: ['./genera-anexo8.component.css']
})




export class GeneraAnexo8Component   implements AfterViewInit{
  

  practicasSolicitud: SolicitudPracticas[] = [] ;
  mivariable !: any;
  listaSolicitudesAprobadas: any;
  practica : Practica= new Practica();
  anexo8: Anexo8 = new Anexo8();
  public filesToUpload!: Array<File>;
  DocumentoAnexo8!: any;



  //TABLA
  displayedColumns: string[] = ['position', 'name', 'weight', 'estado','nombre', 'symbol'];
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
    private anexo8service: Anexo8Service,
    private documentoAnexo8: DocumentoAnexo8Service) { }

  ngOnInit(): void {

    this.listarSolicitudesAprobadasPracticas();
  }

  datatutorEmps: any
  practicasSolicitudesd: any;
  ce:any
  listarSolicitudesAprobadasPracticas() {
    this.ce = localStorage.getItem("idusuario");
    console.log("id usuario " + this.ce);
    this.practicaservice.buscarPorconvocatoriaPorestudianteAnexo8(this.ce).subscribe(datapractica =>{
      this.practicasSolicitudesd = datapractica;
      console.log(datapractica);

      this.dataF1.data = this.practicasSolicitudesd

    });
  }


  idanexo8:any;
  idAnexo8Generado: any;
  CreaAnexo8(anexoid:any){
    this.idanexo8 = anexoid;
    this.practicaservice.buscarId(anexoid).subscribe(practicadata=>{
      console.log(practicadata);
      this.practica = practicadata;
      this.practica.estadoanexo8 = true;
      this.practicaservice.UpdatePractica(this.practica, this.idanexo8).subscribe(practicaupdate=>{
        console.log(practicaupdate);
        this.anexo8.estado_estudiante = true;
        this.anexo8.practica = practicaupdate;
        this.anexo8service.crearAnexo8(this.anexo8).subscribe(dataanexo8=>{
          console.log(dataanexo8);
          this.idAnexo8Generado = dataanexo8.idAnexo8;

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
    const idAnexo8 = this.idAnexo8Generado; // obtén el ID de la solicitud
    const url = `http://localhost:8080/api/jasperReport/anexo8/${idAnexo8}`
    window.open(url, '_blank');
  }
  
  fileChangeEvent(event: any) {
    this.filesToUpload = <Array<File>>event.target.files;
  }
  
  onLoad(event: Event): void {
    const element = event.target as HTMLInputElement;
    const file = element.files?.item(0);
    if (file) {
      this.documentoAnexo8.uploadFileDocumentoAnexo8(file).subscribe(
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
      this.documentoAnexo8.uploadFileDocumentoAnexo8(file).subscribe(
        event => {
          if (event.type === HttpEventType.UploadProgress) {
            console.log('Progreso de carga:', event.loaded, '/', event.total);
          } else if (event.type === HttpEventType.Response) {
            this.inputFile.nativeElement.value = '';
            sessionStorage.setItem('ArchivoAnexo8', JSON.stringify(event.body));
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
    const idDoc = JSON.parse(sessionStorage.getItem('ArchivoAnexo8') || '{}');
    const documentoAnexo8 = idDoc.id_documentoAnexo8;
    
    this.anexo8service.updateDocumentoAnexo8(this.idAnexo8Generado, documentoAnexo8).subscribe(
      response => {
        console.log('Documento actualizado correctamente');
      },
      error => {
        //console.error('Error al actualizar el documento', error);
      }
    );
  }


}
