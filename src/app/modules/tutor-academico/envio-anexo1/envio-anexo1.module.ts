import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnvioAnexo1RoutingModule } from './envio-anexo1-routing.module';
import { Anexo1Component } from './pages/anexo1/anexo1.component';


@NgModule({
  declarations: [
    Anexo1Component
  ],
  imports: [
    CommonModule,
    EnvioAnexo1RoutingModule
  ],
  exports:[
    Anexo1Component
  ]
})
export class EnvioAnexo1Module { }
