import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaCoordRoutingModule } from './lista-coord-routing.module';
import { ListaCoordComponent } from './pages/lista-coord/lista-coord.component';


@NgModule({
  declarations: [
    ListaCoordComponent
  ],
  imports: [
    CommonModule,
    ListaCoordRoutingModule
  ],
  exports:[
    ListaCoordComponent
  ]
})
export class ListaCoordModule { }
