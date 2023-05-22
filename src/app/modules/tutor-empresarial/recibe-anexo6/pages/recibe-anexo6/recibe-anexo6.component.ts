import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { DocumentoAnexo6Service } from 'src/app/services/docAnexos/DocumentoAnexo6.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Responsable_PPPService } from 'src/app/services/responsable_ppp.service';
import { PracticaService } from 'src/app/services/practica.service';
import { Anexo6Service } from 'src/app/services/anexos/anexo6.service';
import { Anexo6 } from 'src/app/models/anexos/anexo6';
import { Practica } from 'src/app/models/practica';
import { MatStepper } from '@angular/material/stepper';
import Swal from 'sweetalert2';
import { HttpEventType } from '@angular/common/http';

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
  selector: 'app-recibe-anexo6',
  templateUrl: './recibe-anexo6.component.html',
  styleUrls: ['./recibe-anexo6.component.css']
})



export class RecibeAnexo6Component  {

  displayedColumns1: string[] = ['position', 'name', 'weight', 'estado', 'symbol'];
  dataF1 = new MatTableDataSource<Practica>([]);

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'carrera','descargar', 'Aceptar'];
  dataSource = new MatTableDataSource<Practica>([]);
  anexo6: Anexo6 = new Anexo6();
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private documentoAnexo6: DocumentoAnexo6Service, private _formBuilder: FormBuilder ,private responsableppservice: Responsable_PPPService, private practicaservice: PracticaService, private anexo6service: Anexo6Service){
    
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
    this.practicaservice.PracticaDocumentoAnexo(this.Ce).subscribe(datapractica=>{
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
    this.practicaservice.DocumentoAnexo6Recibe(this.conporanexo).subscribe(datausu => {
      console.log(datausu);
          this.listaconvocatoria = datausu;
          this.dataSource.data = this.listaconvocatoria;

      });

  }

  anexo6generado:any;
  descargarPDF(anexogenerado :any) {

    this.anexo6generado = anexogenerado; // obtén el ID de la solicitud
    const url = `http://localhost:8080/api/documentoAnexo6/download/${this.anexo6generado}`;
    window.open(url, '_blank');
  }

  Anexo6id:any;
  capturar(anexoid:any){
    this.Anexo6id = anexoid;
    console.log(this.Anexo6id);
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
            this.anexo6service.buscarId(this.Anexo6id).subscribe(databuscar =>{
              this.anexo6 = databuscar;
              this.anexo6.estado_especifico = true;
              this.anexo6service.UpdateAnexo6(this.anexo6, this.Anexo6id).subscribe(dataupdate =>{
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
    const idDoc = JSON.parse(sessionStorage.getItem('ArchivoAnexo6') || '{}');
    const documentoAnexo6 = idDoc.id_documentoAnexo6;
    
    this.anexo6service.updateDocumentoAnexo6(this.Anexo6id, documentoAnexo6).subscribe(
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
