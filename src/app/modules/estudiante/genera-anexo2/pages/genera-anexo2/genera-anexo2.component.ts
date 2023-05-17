import {AfterViewInit, Component, ViewChild ,ElementRef} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SolicitudPracticas } from 'src/app/models/solicitudpracticas';
import { SolicitudConvocatoria } from 'src/app/models/solicitudconvocatoria';
import { PracticaService } from 'src/app/services/practica.service';
import { Practica } from 'src/app/models/practica';
import Swal from 'sweetalert2';
import { Anexo2 } from 'src/app/models/anexos/anexo2';
import { Anexo2Service } from 'src/app/services/anexos/anexo2.service';
import { HttpEventType } from '@angular/common/http';
import { DocumentoAnexo2Service } from 'src/app/services/docAnexos/DocumentoAnexo2.service';

@Component({
  selector: 'app-genera-anexo2',
  templateUrl: './genera-anexo2.component.html',
  styleUrls: ['./genera-anexo2.component.css']
})




export class GeneraAnexo2Component   implements AfterViewInit{


  practicasSolicitud: SolicitudPracticas[] = [] ;
  mivariable !: any;
  listaSolicitudesAprobadas: any;
  practica: Practica = new Practica();
  anexo2 : Anexo2 = new Anexo2();
  public filesToUpload!: Array<File>;
  DocumentoAnexo2!: any;


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
    private anexo2service: Anexo2Service,
    private documentoAnexo2:DocumentoAnexo2Service) { }

  ngOnInit(): void {

    this.listarSolicitudesAprobadasPracticas();
  }

  datatutorEmps: any
  practicasSolicitudesd: any;
  ce:any
  listarSolicitudesAprobadasPracticas() {
    this.ce = localStorage.getItem("idusuario");
    console.log("id usuario " + this.ce);
    this.practicaservice.buscarPorconvocatoriaPorestudiante(this.ce).subscribe(datapractica =>{
      this.practicasSolicitudesd = datapractica;
      console.log(datapractica);

      this.dataF1.data = this.practicasSolicitudesd

    });
  }


  idanexo2:any;
  idAnexoGenerado: any;
  CreaAnexo2(anexoid:any){
    this.idanexo2 = anexoid;
    this.practicaservice.buscarId(anexoid).subscribe(practicadata=>{
      console.log(practicadata);
      this.practica = practicadata;
      this.practica.estadoanexo2 = true;
      this.practicaservice.UpdatePractica(this.practica, this.idanexo2).subscribe(practicaupdate=>{
        console.log(practicaupdate);
        this.anexo2.practica = practicaupdate;
        this.anexo2service.crearAnexo2(this.anexo2).subscribe(dataanexo2=>{
          console.log(dataanexo2);

          this.idAnexoGenerado = dataanexo2.idAnexo2;
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
    const idanexo2 = this.idAnexoGenerado; // obtén el ID de la solicitud
    const url = `http://localhost:8080/api/jasperReport/anexo2/${idanexo2}`;
    window.open(url, '_blank');
  }
  

  
  fileChangeEvent(event: any) {
    this.filesToUpload = <Array<File>>event.target.files;
  }
  
  onLoad(event: Event): void {
    const element = event.target as HTMLInputElement;
    const file = element.files?.item(0);
    if (file) {
      this.documentoAnexo2.uploadFileDocumentoAnexo2(file).subscribe(
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
      this.documentoAnexo2.uploadFileDocumentoAnexo2(file).subscribe(
        event => {
          if (event.type === HttpEventType.UploadProgress) {
            console.log('Progreso de carga:', event.loaded, '/', event.total);
          } else if (event.type === HttpEventType.Response) {
            this.inputFile.nativeElement.value = '';
            sessionStorage.setItem('ArchivoAnexo2', JSON.stringify(event.body));
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
    const idDoc = JSON.parse(sessionStorage.getItem('ArchivoAnexo2') || '{}');
    const documentoAnexo2 = idDoc.id_documentoAnexo2;
    
    this.anexo2service.updateDocumentoAnexo2(this.idAnexoGenerado, documentoAnexo2).subscribe(
      response => {
        console.log('Documento actualizado correctamente');
      },
      error => {
        //console.error('Error al actualizar el documento', error);
      }
    );
  }


}
