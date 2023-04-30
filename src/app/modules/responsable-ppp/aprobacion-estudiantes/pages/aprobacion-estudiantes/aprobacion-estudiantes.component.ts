import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {FormGroup, FormControl} from '@angular/forms';

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
  name: string;
  position: string;
  weight: string;
  estado: string;
  symbol: string;
}

const DATA: Solicitudes[] = [
  {position: 'Bryam Tenecota', name: '05-01-2022', weight: 'TDS', estado: 'Finalizado' ,symbol: 'H'},
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

@Component({
  selector: 'app-aprobacion-estudiantes',
  templateUrl: './aprobacion-estudiantes.component.html',
  styleUrls: ['./aprobacion-estudiantes.component.css']
})
export class AprobacionEstudiantesComponent {

  //TABLA
  displayedColumns: string[] = ['position', 'name', 'weight', 'estado', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  displayedColumns1: string[] = ['position', 'name', 'weight', 'estado', 'symbol'];
  dataSource1 = new MatTableDataSource<Solicitudes>(DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource1.paginator = this.paginator;
  }

  //FINTABLA





  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  isEditable = false;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
