import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaEmpresarialesRoutingModule } from './lista-empresariales-routing.module';
import { ListaEmpresarialesComponent } from './pages/lista-empresariales/lista-empresariales.component';


@NgModule({
  declarations: [
    ListaEmpresarialesComponent
  ],
  imports: [
    CommonModule,
    ListaEmpresarialesRoutingModule
  ],
  exports:[
    ListaEmpresarialesComponent
  ]
})
export class ListaEmpresarialesModule { }
