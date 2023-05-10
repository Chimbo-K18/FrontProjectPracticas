import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaDirectorRoutingModule } from './lista-director-routing.module';
import { ListaDirectorComponent } from './pages/lista-director/lista-director.component';


@NgModule({
  declarations: [
    ListaDirectorComponent
  ],
  imports: [
    CommonModule,
    ListaDirectorRoutingModule
  ],
  exports:[
    ListaDirectorComponent
  ]
})
export class ListaDirectorModule { }
