import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AprobacionSolicitudRoutingModule } from './aprobacion-solicitud-routing.module';
import { AprobacionSolicitudComponent } from './pages/aprobacion-solicitud/aprobacion-solicitud.component';


@NgModule({
  declarations: [
    AprobacionSolicitudComponent
  ],
  imports: [
    CommonModule,
    AprobacionSolicitudRoutingModule
  ],
  exports: [
    AprobacionSolicitudComponent
  ]
})
export class AprobacionSolicitudModule { }
