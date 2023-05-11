import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReporteSeleccionRoutingModule } from './reporte-seleccion-routing.module';
import { ReporteSeleccionComponent } from './pages/reporte-seleccion/reporte-seleccion.component';


@NgModule({
  declarations: [
    ReporteSeleccionComponent
  ],
  imports: [
    CommonModule,
    ReporteSeleccionRoutingModule
  ],
  exports:[
    ReporteSeleccionComponent
  ]
})
export class ReporteSeleccionModule { }
