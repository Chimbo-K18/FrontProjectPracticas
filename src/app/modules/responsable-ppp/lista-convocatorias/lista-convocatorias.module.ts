import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaConvocatoriasRoutingModule } from './lista-convocatorias-routing.module';
import { ListaConvocatoriasComponent } from './pages/lista-convocatorias/lista-convocatorias.component';


@NgModule({
  declarations: [
    ListaConvocatoriasComponent
  ],
  imports: [
    CommonModule,
    ListaConvocatoriasRoutingModule
  ],
  exports:[
    ListaConvocatoriasComponent
  ]
})
export class ListaConvocatoriasModule { }
