import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {FormGroup, FormControl} from '@angular/forms';
import { HttpClient,HttpEventType } from '@angular/common/http';
import { SolicitudpracticasService } from 'src/app/services/solicitudpracticas.service';
import { SolicitudPracticas } from 'src/app/models/solicitudpracticas';
import { ConvocatoriasService } from 'src/app/services/convocatorias.service';
import { Convocatorias } from 'src/app/models/convocatorias';
import { DocumentoLanzamientoConvocatoria} from 'src/app/services/doc/DocumentoLanzamientoConvocatoria.service';
import { ElementRef } from '@angular/core';
import Swal from 'sweetalert2';



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-lanzamiento-convocatoria',
  templateUrl: './lanzamiento-convocatoria.component.html',
  styleUrls: ['./lanzamiento-convocatoria.component.css']
})
export class LanzamientoConvocatoriaComponent   {


  solicitudesCompletas: SolicitudPracticas[] | undefined;
  solicitudID: any;
  convocatoriaGenerada: any;

  //TABLA
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

    @ViewChild(MatPaginator) paginator!: MatPaginator;

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
                private documentoLcService:DocumentoLanzamientoConvocatoria) {}

    ngOnInit(): void {

      this.listarAsignadoActividades();
    }

    seleccionarSolicitud(solicitud: any){

      sessionStorage.setItem('solicitudSeleccionada', JSON.stringify(solicitud));

      const valor = JSON.parse(
        sessionStorage.getItem('solicitudSeleccionada') || '{}'
      );
      this.solicitudID = valor;
      console.log(this.solicitudID)
      this.getFechaActual();
    }


    listarAsignadoActividades(){

      this.solicitudService.getSolicitudesActividades()
      .subscribe((res) => (this.solicitudesCompletas = res));

    }


    public crearConvocatoria(){

      this.convocatoria.fechaPublicacion = this.getFechaActual();
      this.convocatoria.solicitudPracticas = this.solicitudID;

      return this.convocatoriaService.crearConvocatoria(this.convocatoria).subscribe(
        (res) => {

          this.convocatoriaGenerada = res.idConvocatorias
          console.log(res);
        },

        (err) => console.error(err)
      );
    }

    verificarID(){

      if(!this.convocatoriaService.getRequest(this.convocatoria.idConvocatorias)){

        console.log('Convocatoria Encontrada');
      }else {
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

  fileChangeEvent(fileInput:any){
    this.filesToUpload=<Array<File>> fileInput.target.files;
  }

  onLoad(event: Event): void {
    const element = event.target as HTMLInputElement;
    const file = element.files?.item(0);
    if (file) {
      this.documentoLcService.uploadFile(file)
        .subscribe(res => {
          console.log(res);
        });
    }
  }


  public upload(event: any) {


    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      this.documentoLcService.uploadFile(file).subscribe(
        data => {
          if (data) {
            switch (data.type) {
              case HttpEventType.UploadProgress:
                console.log("progreso....");

                break;
              case HttpEventType.Response:
                this.inputFile.nativeElement.value = '';
                break;
            }
          }
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Documento guardado correctamente',
            showConfirmButton: false,
            timer: 1500,
          });
        },
        error => {
          this.inputFile.nativeElement.value = '';
          console.log("Error");

        }
      );
    }
  }

  }
