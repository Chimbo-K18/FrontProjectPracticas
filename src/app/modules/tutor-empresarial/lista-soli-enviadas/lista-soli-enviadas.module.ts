import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaSoliEnviadasRoutingModule } from './lista-soli-enviadas-routing.module';
import { ListaSoliEnviadasComponent } from './pages/lista-soli-enviadas/lista-soli-enviadas.component';


@NgModule({
  declarations: [
    ListaSoliEnviadasComponent
  ],
  imports: [
    CommonModule,
    ListaSoliEnviadasRoutingModule
  ],
  exports:[
    ListaSoliEnviadasComponent
  ]
})
export class ListaSoliEnviadasModule { }
