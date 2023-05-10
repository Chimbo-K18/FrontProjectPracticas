import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudesAprobadasRoutingModule } from './solicitudes-aprobadas-routing.module';
import { SolicitudesAprobadasComponent } from './pages/solicitudes-aprobadas/solicitudes-aprobadas.component';


@NgModule({
  declarations: [
    SolicitudesAprobadasComponent
  ],
  imports: [
    CommonModule,
    SolicitudesAprobadasRoutingModule
  ],
  exports:[
    SolicitudesAprobadasComponent
  ]
})
export class SolicitudesAprobadasModule { }
