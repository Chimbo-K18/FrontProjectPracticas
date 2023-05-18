import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecibeAnexo5RoutingModule } from './recibe-anexo5-routing.module';
import { RecibeAnexo5Component } from './pages/recibe-anexo5/recibe-anexo5.component';


@NgModule({
  declarations: [
    RecibeAnexo5Component
  ],
  imports: [
    CommonModule,
    RecibeAnexo5RoutingModule
  ],
  exports:[
    RecibeAnexo5Component
  ]
})
export class RecibeAnexo5Module { }
