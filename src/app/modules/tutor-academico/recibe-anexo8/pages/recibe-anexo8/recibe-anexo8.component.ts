import {AfterViewInit, Component, ViewChild, ElementRef} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { DocumentoAnexo8Service } from 'src/app/services/docAnexos/DocumentoAnexo8.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Responsable_PPPService } from 'src/app/services/responsable_ppp.service';
import { PracticaService } from 'src/app/services/practica.service';
import { Anexo8Service } from 'src/app/services/anexos/anexo8.service';
import { MatStepper } from '@angular/material/stepper';
import { HttpEventType } from '@angular/common/http';
import { Practica } from 'src/app/models/practica';
import { Anexo8 } from 'src/app/models/anexos/anexo8';
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
  selector: 'app-recibe-anexo8',
  templateUrl: './recibe-anexo8.component.html',
  styleUrls: ['./recibe-anexo8.component.css']
})


export class RecibeAnexo8Component  {

  displayedColumns1: string[] = ['position', 'name', 'weight', 'estado', 'symbol'];
  dataF1 = new MatTableDataSource<Practica>([]);

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'carrera','descargar', 'Aceptar'];
  dataSource = new MatTableDataSource<Practica>([]);
  anexo8: Anexo8 = new Anexo8();

  constructor(private documentoAnexo8: DocumentoAnexo8Service, private _formBuilder: FormBuilder ,private responsableppservice: Responsable_PPPService, private practicaservice: PracticaService, private anexo8service: Anexo8Service){
    
  }
  ngOnInit(): void {

    this.listarpracticas();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  tresFormGroup = this._formBuilder.group({
    tresCtrl: ['', Validators.required],
  });

  @ViewChild('inputFile') inputFile!: ElementRef;
  @ViewChild(MatStepper) stepper!: MatStepper;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  Ce:any;
  practicasSolicitudesd: any;
  listarpracticas(){
    this.Ce = localStorage.getItem("idusuario");
    console.log(this.Ce);
    this.practicaservice.DocumentoAnexoAcademicoRecibe(this.Ce).subscribe(datapractica=>{
      console.log(datapractica);
      this.practicasSolicitudesd = datapractica;
      console.log(datapractica);

      this.dataF1.data = this.practicasSolicitudesd
    });
  }

  carreradata:any;
  listaconvocatoria: any[] = [];
  conporanexo:any;
  listarAnexos(convo:any) {
    this.conporanexo = convo;
    console.log(this.conporanexo);
    this.practicaservice.DocumentoAnexo8RecibeAcademico(this.conporanexo).subscribe(datausu => {
      console.log(datausu);
          this.listaconvocatoria = datausu;
          this.dataSource.data = this.listaconvocatoria;

      });

  }

  anexo8generado:any;
  descargarPDF(anexogenerado :any) {

    this.anexo8generado = anexogenerado; // obtén el ID de la solicitud
    const url = `http://localhost:8080/api/documentoAnexo8/download/${this.anexo8generado}`;
    window.open(url, '_blank');
  }

  Anexo8id:any;
  capturar(anexoid:any){
    this.Anexo8id = anexoid;
    console.log(this.Anexo8id);
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
            this.anexo8service.buscarId(this.Anexo8id).subscribe(databuscar =>{
              this.anexo8 = databuscar;
              this.anexo8.estado_academico = true;
              this.anexo8service.UpdateAnexo8(this.anexo8, this.Anexo8id).subscribe(dataupdate =>{
                console.log(dataupdate);
              });
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
    
    this.anexo8service.updateDocumentoAnexo8(this.Anexo8id, documentoAnexo8).subscribe(
      response => {
        console.log('Documento actualizado correctamente');
      },
      error => {
        //console.error('Error al actualizar el documento', error);
      }
    );
  }
 

  resetStepper() {
    this.listarpracticas();
    this.stepper.reset();
  }

}
