import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnvioSolicitudRoutingModule } from './envio-solicitud-routing.module';
import { EnvioSolicitudComponent } from './pages/envio-solicitud/envio-solicitud.component';


@NgModule({
  declarations: [
    EnvioSolicitudComponent
  ],
  imports: [
    CommonModule,
    EnvioSolicitudRoutingModule
  ],
  exports: [
    EnvioSolicitudComponent
  ]
})
export class EnvioSolicitudModule { }
