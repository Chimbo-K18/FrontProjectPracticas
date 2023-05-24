import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { SolicitudpracticasService } from 'src/app/services/solicitudpracticas.service';
import { SolicitudPracticas } from 'src/app/models/solicitudpracticas';
import { ConvocatoriasService } from 'src/app/services/convocatorias.service';
import { Convocatorias } from 'src/app/models/convocatorias';
import { DocumentoLanzamientoConvocatoria } from 'src/app/services/doc/DocumentoLanzamientoConvocatoria.service';
import { ElementRef } from '@angular/core';
import Swal from 'sweetalert2';
import { SolicitudConvocatoriasService } from 'src/app/services/solicitudconvocatoria.service';
import { MatStepper } from '@angular/material/stepper';
import { Responsable_PPPService } from 'src/app/services/responsable_ppp.service';



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
  selector: 'app-lanzamiento-convocatoria',
  templateUrl: './lanzamiento-convocatoria.component.html',
  styleUrls: ['./lanzamiento-convocatoria.component.css']
})
export class LanzamientoConvocatoriaComponent {


  solicitudesCompletas: SolicitudPracticas[] | undefined;
  solicitudpracticas: SolicitudPracticas = new SolicitudPracticas();
  solicitudID: any;
  convocatoriaGenerada: any;
  idDocumento!: any;

  //TABLA
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatStepper) stepper!: MatStepper;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  //FINTABLA

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  isEditable = false;
  @ViewChild('inputFile') inputFile!: ElementRef;

  public convocatoria: Convocatorias = new Convocatorias();
  public filesToUpload!: Array<File>;



    constructor(private _formBuilder: FormBuilder, private solicitudService: SolicitudpracticasService,
                private convocatoriaService: ConvocatoriasService,
                private documentoLcService:DocumentoLanzamientoConvocatoria,
      private solicitud: SolicitudpracticasService, private responsableppservice: Responsable_PPPService
              ) {
                this.listarAsignadoActividades();
              }

  ngOnInit(): void {

  
  }

  seleccionarSolicitud(solicitud: any) {

    sessionStorage.setItem('solicitudSeleccionada', JSON.stringify(solicitud));

    const valor = JSON.parse(
      sessionStorage.getItem('solicitudSeleccionada') || '{}'
    );
    this.solicitudID = valor;
    console.log(this.solicitudID)
    this.getFechaActual();
  }

  idusuario: any;
  dataresponsable: any;
  listarAsignadoActividades() {
    this.idusuario = localStorage.getItem("idusuario");
    this.responsableppservice.getBuscarcedula(this.idusuario).subscribe(datausu => {
      console.log(datausu);
      this.dataresponsable = datausu.idResponsablePPP;
      
    this.solicitudService.getSolicitudesActividadesPorResposanble(this.dataresponsable )
    .subscribe((res) => (this.solicitudesCompletas = res));
    });


  }

  idsolicitudpracticas:any;
  Capturarid(id:any){
    this.idsolicitudpracticas = id;
console.log(id);
  }


  public crearConvocatoria() {
    this.solicitudService.getRequest(this.idsolicitudpracticas).subscribe(datasoli =>{
      console.log(datasoli);
      this.solicitudpracticas = datasoli;
      this.solicitudpracticas.estadoConvocatoria = true;
      this.solicitudService.updateSolicitud(this.solicitudpracticas, this.idsolicitudpracticas).subscribe(dataactualizada =>{
        console.log(dataactualizada);
        this.convocatoria.fechaPublicacion = this.getFechaActual();
        this.convocatoria.solicitudPracticas = this.solicitudID;
        this.convocatoria.estadoConvocatoria = true;
        return this.convocatoriaService.crearConvocatoria(this.convocatoria).subscribe(
          (res) => {
    
            this.convocatoriaGenerada = res.idConvocatorias
            console.log(res);
            console.log(this.convocatoriaGenerada)
            this.listarAsignadoActividades();
          },
    
          (err) => console.error(err)
        );
      })
    });

  }

  verificarID() {

    if (!this.convocatoriaService.getRequest(this.convocatoria.idConvocatorias)) {

      console.log('Convocatoria Encontrada');
    } else {
      this.crearConvocatoria();
    }
  }

  getFechaActual() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }


  descargarPDF() {
    const idConvocatoria = this.convocatoriaGenerada; // obtén el ID de la solicitud
    const url = `http://localhost:8080/api/jasperReport/generar/${idConvocatoria}`;
    window.open(url, '_blank');
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

  onLoad(event: Event): void {
    const element = event.target as HTMLInputElement;
    const file = element.files?.item(0);
    if (file) {
      this.documentoLcService.uploadFileConvocatoria(file)
        .subscribe(res => {
          console.log(res);
        });
    }
  }
  resetStepper() {
    this.stepper.reset();
  }



  public upload(event: any) {

    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      this.documentoLcService.uploadFileConvocatoria(file).subscribe(
        data => {
          if (data) {
            switch (data.type) {
              case HttpEventType.UploadProgress:
                console.log("progreso....");

              break;
              case HttpEventType.Response:
                this.inputFile.nativeElement.value = '';
                sessionStorage.setItem('ArchivoLanzamientoCnv', JSON.stringify(data.body));
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
      sessionStorage.getItem('ArchivoLanzamientoCnv') || '{}'
    );
    this.idDocumento = idDoc.id_documentoConvocatoria;

    console.log(this.idDocumento);

    this.convocatoriaService.updateDocumentoConvocatoria(this.convocatoriaGenerada, this.idDocumento).subscribe(

      response => {
        console.log('Documento actualizado correctamente');
      },
      error => {
        //console.error('Error al actualizar el documento');
      }
    );
  }


  }
