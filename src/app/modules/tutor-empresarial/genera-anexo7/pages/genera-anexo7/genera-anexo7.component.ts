import {AfterViewInit, Component, ViewChild,ElementRef } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {FormGroup, FormControl} from '@angular/forms';
import { ConvocatoriasService } from 'src/app/services/convocatorias.service';
import { Convocatorias } from 'src/app/models/convocatorias'; 
import { SolicitudpracticasService } from 'src/app/services/solicitudpracticas.service';
import { SolicitudConvocatoriasService } from 'src/app/services/solicitudconvocatoria.service';
import { SolicitudPracticas } from 'src/app/models/solicitudpracticas'; 
import { SolicitudConvocatoria } from 'src/app/models/solicitudconvocatoria';
import Swal from 'sweetalert2';
import { PracticaService } from 'src/app/services/practica.service';
import { Practica } from 'src/app/models/practica';
import { UserService } from 'src/app/services/user.service';
import { tutorempresarialService } from 'src/app/services/tutorempresarial.service';
import { Anexo7Service } from 'src/app/services/anexos/anexo7.service';
import { Anexo7 } from 'src/app/models/anexos/anexo7';
import { HttpEventType } from '@angular/common/http';
import { DocumentoAnexo7Service } from 'src/app/services/docAnexos/DocumentoAnexo7.service';


@Component({
  selector: 'app-genera-anexo7',
  templateUrl: './genera-anexo7.component.html',
  styleUrls: ['./genera-anexo7.component.css']
})

export class GeneraAnexo7Component   implements AfterViewInit{

  practicasSolicitud: SolicitudPracticas[] = [] ;
  mivariable !: any;
  listaSolicitudesAprobadas: any;
  practica : Practica= new Practica();
  anexo7: Anexo7 = new Anexo7();
  public filesToUpload!: Array<File>;



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
    private anexo7service: Anexo7Service,
    private userService: UserService,
    private practicaservice: PracticaService,
    private tutorempresarialService: tutorempresarialService, private solicitudService: SolicitudConvocatoriasService,
    private documentoAnexo7: DocumentoAnexo7Service) { }

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
    console.log("id usuario " + this.Ceduss)
    this.userService.getuscedula(this.Ceduss).subscribe(dataUserEncon => {
      this.tutorempresarialService.extraerEmpresarialIdUsuario(dataUserEncon.idUsuario).subscribe(dataTutor => {
        console.log("esta es la dat del tuto");
        console.log(dataTutor);
        this.datatutorEmps = dataTutor.empresa.idEmpresa;
        this.practicaservice.listarPorEmpresaAnexo7(this.datatutorEmps).subscribe(datapractica => {
          this.practicasSolicitudesd = datapractica;
          console.log(datapractica);
          this.dataF1.data = this.practicasSolicitudesd

        });
      });
    });
  }
  listapraacticas: any[] = [];
  seleccionarConvocatoria(idconvo: any) {
    console.log(idconvo);
    this.solicitudService.SolicitudesPorAnexo7(idconvo).subscribe(datapracticalist => {
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


  idanexo7:any;
  idAnexo7Generado: any;
  idprac:any;
  CreaAnexo7(anexoid:any){
    this.idanexo7 = anexoid;
    this.practicaservice.buscarPorconvocatoriaParaAnexo1(anexoid).subscribe(practicadatabusque => {
      console.log(practicadatabusque);
      this.idprac = practicadatabusque;
      this.practicaservice.buscarId(this.idprac).subscribe(practicadata => {
        console.log(practicadata);
        this.practica = practicadata;
        this.practica.estadoanexo7 = true;
        this.practicaservice.UpdatePractica(this.practica, this.idprac).subscribe(practicaupdate=>{
          console.log(practicaupdate);
          this.anexo7.estado_especifico = true;
          this.anexo7.practica = practicaupdate;
          this.anexo7service.crearAnexo7(this.anexo7).subscribe(dataanexo7=>{
            console.log(dataanexo7);
            this.idAnexo7Generado = dataanexo7.idAnexo7;
  
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
    const idAnexo7 = this.idAnexo7Generado; // obtén el ID de la solicitud
    const url = `http://localhost:8080/api/jasperReport/anexo7/${idAnexo7}`;
    window.open(url, '_blank');
  }

  fileChangeEvent(event: any) {
    this.filesToUpload = <Array<File>>event.target.files;
  }
  
  onLoad(event: Event): void {
    const element = event.target as HTMLInputElement;
    const file = element.files?.item(0);
    if (file) {
      this.documentoAnexo7.uploadFileDocumentoAnexo7(file).subscribe(
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
      this.documentoAnexo7.uploadFileDocumentoAnexo7(file).subscribe(
        event => {
          if (event.type === HttpEventType.UploadProgress) {
            console.log('Progreso de carga:', event.loaded, '/', event.total);
          } else if (event.type === HttpEventType.Response) {
            this.inputFile.nativeElement.value = '';
            sessionStorage.setItem('ArchivoAnexo7', JSON.stringify(event.body));
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
    const idDoc = JSON.parse(sessionStorage.getItem('ArchivoAnexo7') || '{}');
    const documentoAnexo7 = idDoc.id_documentoAnexo7;
    
    this.anexo7service.updateDocumentoAnexo7(this.idAnexo7Generado, documentoAnexo7).subscribe(
      response => {
        console.log('Documento actualizado correctamente');
      },
      error => {
        //console.error('Error al actualizar el documento', error);
      }
    );
  }



}
