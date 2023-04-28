import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaSoliRecibidasRoutingModule } from './lista-soli-recibidas-routing.module';
import { ListaSoliRecibidasComponent } from './pages/lista-soli-recibidas/lista-soli-recibidas.component';


@NgModule({
  declarations: [
    ListaSoliRecibidasComponent
  ],
  imports: [
    CommonModule,
    ListaSoliRecibidasRoutingModule
  ],
  exports:[
    ListaSoliRecibidasComponent
  ]
})
export class ListaSoliRecibidasModule { }
