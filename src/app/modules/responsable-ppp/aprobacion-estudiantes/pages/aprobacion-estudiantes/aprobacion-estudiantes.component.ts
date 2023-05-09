import {AfterViewInit, Component, ViewChild } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {FormGroup, FormControl} from '@angular/forms';
import { ConvocatoriasService } from 'src/app/services/convocatorias.service';
import { Convocatorias } from 'src/app/models/convocatorias';

export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  estado: string;
  symbol: string;
}



const ELEMENT_DATA: PeriodicElement[] = [
  {position: 'CONVOCATORIA – TSDS -PPP-2022-001', name: '05-01-2022', weight: '10-01-2022', estado: 'Finalizado' ,symbol: 'H'},
  {position: 'CONVOCATORIA – TSDS -PPP-2022-002', name: '20-01-2022', weight: '25-01-2022', estado: 'Finalizado' ,symbol: 'He'},
  {position: 'CONVOCATORIA – TSDS -PPP-2022-003', name: '08-02-2022', weight: '13-02-2022', estado: 'Finalizado' ,symbol: 'Li'},
  {position: 'CONVOCATORIA – TSDS -PPP-2022-004', name: '23-02-2022', weight: '28-02-2022', estado: 'Finalizado' ,symbol: 'Be'},
  {position: 'CONVOCATORIA – TSDS -PPP-2022-005', name: '13-03-2022', weight: '18-03-2022', estado: 'Finalizado' ,symbol: 'B'},
  {position: 'CONVOCATORIA – TSDS -PPP-2022-006', name: '28-03-2022', weight: '02-04-2022', estado: 'Finalizado' ,symbol: 'C'},
  {position: 'CONVOCATORIA – TSDS -PPP-2022-007', name: '22-04-2022', weight: '27-04-2022', estado: 'Finalizado' ,symbol: 'N'},
  {position: 'CONVOCATORIA – TSDS -PPP-2022-008', name: '05-05-2022', weight: '10-05-2022', estado: 'Finalizado' ,symbol: 'O'},
  {position: 'CONVOCATORIA – TSDS -PPP-2022-009', name: '20-05-2022', weight: '25-05-2022', estado: 'Finalizado' ,symbol: 'F'},
  {position: 'CONVOCATORIA – TSDS -PPP-2022-010', name: '10-06-2022', weight: '15-06-2022', estado: 'Finalizado' ,symbol: 'Ne'},
];

export interface Solicitudes {
  nombre: string;
  fecha: string;
  carrera: string;
  esta: string;
  sy: string;
}

const DATA: Solicitudes[] = [
  {nombre: 'Bryam Tenecota', fecha: '05-01-2022', carrera: 'TDS', esta: 'Finalizado',sy: 'H'},
  {nombre: 'Carlos Ibarra', fecha: '05-01-2022', carrera: 'TDS', esta: 'Finalizado',sy: 'H'},
  {nombre: 'Christian Barbecho', fecha: '05-01-2022', carrera: 'TDS', esta: 'Finalizado',sy: 'H'},
  {nombre: 'Daniela Cadme', fecha: '05-01-2022', carrera: 'TDS', esta: 'Finalizado',sy: 'H'},
  {nombre: 'William Martinez', fecha: '05-01-2022', carrera: 'TDS', esta: 'Finalizado',sy: 'H'},
  {nombre: 'Esteban Bacuilima', fecha: '05-01-2022', carrera: 'TDS', esta: 'Finalizado',sy: 'H'},
  {nombre: 'Edisson Quinde', fecha: '06-01-2022', carrera: 'TDS', esta: 'Finalizado',sy: 'H'},
  {nombre: 'Roberto Perez', fecha: '07-01-2022', carrera: 'TDS', esta: 'Finalizado',sy: 'H'},
  {nombre: 'Juan Torres', fecha: '07-01-2022', carrera: 'TDS', esta: 'Finalizado',sy: 'H'},
  {nombre: 'Juan Yanqui', fecha: '08-01-2022', carrera: 'TDS', esta: 'Finalizado',sy: 'H'},
  {nombre: 'Erika Fernandez', fecha: '08-01-2022', carrera: 'TDS', esta: 'Finalizado',sy: 'H'},
  {nombre: 'Adriana Jaya', fecha: '08-01-2022', carrera: 'TDS', esta: 'Finalizado',sy: 'H'},
  {nombre: 'Soledad Becerra', fecha: '08-01-2022', carrera: 'TDS', esta: 'Finalizado',sy: 'H'},
  {nombre: 'Manuela Suarez', fecha: '08-01-2022', carrera: 'TDS', esta: 'Finalizado',sy: 'H'},
];

export interface Aprobados {
  nombre: string;
  fecha: string;
  carrera: string;
  esta: string;

}

const AP: Aprobados[] = [
  {nombre: 'Bryam Tenecota', fecha: '05-01-2022', carrera: 'TDS', esta: 'Finalizado'},
  {nombre: 'Carlos Ibarra', fecha: '05-01-2022', carrera: 'TDS', esta: 'Finalizado'},
  {nombre: 'Christian Barbecho', fecha: '05-01-2022', carrera: 'TDS', esta: 'Finalizado'},
  {nombre: 'Erika Fernandez', fecha: '08-01-2022', carrera: 'TDS', esta: 'Finalizado'},
  {nombre: 'Adriana Jaya', fecha: '08-01-2022', carrera: 'TDS', esta: 'Finalizado'},
];

@Component({
  selector: 'app-aprobacion-estudiantes',
  templateUrl: './aprobacion-estudiantes.component.html',
  styleUrls: ['./aprobacion-estudiantes.component.css']
})
export class AprobacionEstudiantesComponent implements AfterViewInit{


  convocatorias: Convocatorias | any ;
  //TABLA
  displayedColumns: string[] = ['position', 'name', 'weight', 'estado', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  dColumns: string[] = ['nombre', 'fecha', 'carrera', 'esta', 'sy'];
  data = new MatTableDataSource<Solicitudes>(DATA);

  diColumns: string[] = ['nombre', 'fecha', 'carrera', 'esta'];
  datam = new MatTableDataSource<Aprobados>(AP);

  @ViewChild('paginator1', {static: true}) paginator1!: MatPaginator;
@ViewChild('paginator2', {static: true}) paginator2!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator1;
    this.data.paginator = this.paginator2;
  }

  //FINTABLA





  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  isEditable = false;

  constructor(private _formBuilder: FormBuilder, private convocatoriaService: ConvocatoriasService) { }

  ngOnInit(): void {

    this.listaConvocatorias();
  }



  listaConvocatorias() {
    this.convocatoriaService.getConvocatorias().subscribe(
      (res) => {
        this.convocatorias = res;
        console.log(this.convocatorias);
      }
    );
  }

}
