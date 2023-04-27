import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaSolConvocatoriasRoutingModule } from './lista-sol-convocatorias-routing.module';
import { ListaSolConvocatoriasComponent } from './pages/lista-sol-convocatorias/lista-sol-convocatorias.component';


@NgModule({
  declarations: [
    ListaSolConvocatoriasComponent
  ],
  imports: [
    CommonModule,
    ListaSolConvocatoriasRoutingModule
  ],
  exports: [
    ListaSolConvocatoriasComponent
  ]
})
export class ListaSolConvocatoriasModule { }
