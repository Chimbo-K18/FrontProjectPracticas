import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaAsignadosRoutingModule } from './lista-asignados-routing.module';
import { ListaAsignadosComponent } from './pages/lista-asignados/lista-asignados.component';


@NgModule({
  declarations: [
    ListaAsignadosComponent
  ],
  imports: [
    CommonModule,
    ListaAsignadosRoutingModule
  ],
  exports: [
    ListaAsignadosComponent
  ]
})
export class ListaAsignadosModule { }
