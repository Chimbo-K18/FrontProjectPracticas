import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 'solicitud tds', name: '29/05/2023', weight: 'Aplica', symbol: 'H'},
  {position: 'solicitud tds', name: '20/05/2023', weight: 'Aplica', symbol: 'H'},
  {position: 'solicitud tds', name: '12/05/2023', weight: 'Aplica', symbol: 'H'},
  {position: 'solicitud tds', name: '10/05/2023', weight: 'Aplica', symbol: 'H'},
  {position: 'solicitud tds', name: '09/05/2023', weight: 'Aplica', symbol: 'H'},
  {position: 'solicitud tds', name: '06/05/2023', weight: 'Aplica', symbol: 'H'},
  {position: 'solicitud tds', name: '04/05/2023', weight: 'Aplica', symbol: 'H'},
  {position: 'solicitud tds', name: '03/05/2023', weight: 'Aplica', symbol: 'H'},
  {position: 'solicitud tds', name: '02/05/2023', weight: 'Aplica', symbol: 'H'},
];
//////////seguna tabla
export interface solicitudes {
  name: string;
  fecha: string;
  carrera: string;
  estado: string;
}
const ELEMENT_DATA2: solicitudes[] = [
  {name: 'tamara cubillos', fecha: '29/05/2023', carrera: 'Desarrollo Software', estado: 'H'},
  {name: 'veronica naula', fecha: '29/05/2023', carrera: 'Desarrollo Software', estado: 'H'},
  {name: 'marlene peralta', fecha: '29/05/2023', carrera: 'Desarrollo Software', estado: 'H'},
  {name: 'priscila sanchez', fecha: '29/05/2023', carrera: 'Desarrollo Software', estado: 'H'},

];
///tercera tabla
export interface asignarHorario {
  name: string;
  jornada: string;
  carrera: string;
  horario: string;
  asignar: string;
}
const ELEMENT_DATA3: asignarHorario[] = [
  {name: 'tamara cubillos', jornada: 'matutina', carrera: 'TDS', horario: '07:00-18:00', asignar: 'ok'},
  {name: 'veronica naula', jornada: 'matutina', carrera: 'TDS', horario: '07:00-18:00', asignar: 'ok'},
  {name: 'marlene peralta', jornada: 'matutina', carrera: 'TDS', horario: '07:00-18:00', asignar: 'ok'},
  {name: 'priscila sanchez', jornada: 'matutina', carrera: 'TDS', horario: '07:00-18:00', asignar: 'ok'},

];
@Component({
  selector: 'app-lista-soli-enviadas',
  templateUrl: './lista-soli-enviadas.component.html',
  styleUrls: ['./lista-soli-enviadas.component.css']
})
export class ListaSoliEnviadasComponent {
//TABLA
displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
//segunda tabla
displayedColumns2: string[] = ['name', 'fecha', 'carrera', 'estado'];
dataSource2 = new MatTableDataSource<solicitudes>(ELEMENT_DATA2);
//tercera tabla
displayedColumns3: string[] = ['name', 'jornada', 'carrera', 'horario', 'asignar'];
dataSource3 = new MatTableDataSource<asignarHorario>(ELEMENT_DATA3);

@ViewChild(MatPaginator) paginator!: MatPaginator;

ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
}

//FINTABLA





firstFormGroup = this._formBuilder.group({
  firstCtrl: ['', Validators.required],
});
secondFormGroup = this._formBuilder.group({
  secondCtrl: [''],
});

isEditable = false;

constructor(private _formBuilder: FormBuilder) {}

ngOnInit(): void {
}

}