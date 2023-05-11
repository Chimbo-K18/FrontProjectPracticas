import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaEstudiantesAprobadosRoutingModule } from './lista-estudiantes-aprobados-routing.module';
import { ListaEstudiantesAprobadosComponent } from './pages/lista-estudiantes-aprobados/lista-estudiantes-aprobados.component';


@NgModule({
  declarations: [
    ListaEstudiantesAprobadosComponent
  ],
  imports: [
    CommonModule,
    ListaEstudiantesAprobadosRoutingModule
  ],
  exports:[
    ListaEstudiantesAprobadosComponent
  ]
})
export class ListaEstudiantesAprobadosModule { }
