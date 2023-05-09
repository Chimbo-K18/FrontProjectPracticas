import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetallesPracticaRoutingModule } from './detalles-practica-routing.module';
import { DetallesPracticaComponent } from './pages/detalles-practica/detalles-practica.component';


@NgModule({
  declarations: [
    DetallesPracticaComponent
  ],
  imports: [
    CommonModule,
    DetallesPracticaRoutingModule
  ],
  exports:[
    DetallesPracticaComponent
  ]
})
export class DetallesPracticaModule { }
