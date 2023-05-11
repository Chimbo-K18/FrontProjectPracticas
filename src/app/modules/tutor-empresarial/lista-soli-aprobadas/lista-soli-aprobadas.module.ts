import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaSoliAprobadasRoutingModule } from './lista-soli-aprobadas-routing.module';
import { ListaSoliAprobadasComponent } from './pages/lista-soli-aprobadas/lista-soli-aprobadas.component';


@NgModule({
  declarations: [
    ListaSoliAprobadasComponent
  ],
  imports: [
    CommonModule,
    ListaSoliAprobadasRoutingModule
  ],
  exports:[
    ListaSoliAprobadasComponent
  ]
})
export class ListaSoliAprobadasModule { }
