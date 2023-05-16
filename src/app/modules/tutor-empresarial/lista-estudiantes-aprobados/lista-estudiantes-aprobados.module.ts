import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaEstudiantesAprobadosRoutingModule } from './lista-estudiantes-aprobados-routing.module';
import { ListaEstudiantesAprobadosComponent } from './pages/lista-estudiantes-aprobados/lista-estudiantes-aprobados.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    ListaEstudiantesAprobadosComponent
  ],
  imports: [
    CommonModule,
    ListaEstudiantesAprobadosRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatIconModule,
    MatTableModule
  ],
  exports:[
    ListaEstudiantesAprobadosComponent
  ]
})
export class ListaEstudiantesAprobadosModule { }
