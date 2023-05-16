import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneraAnexo5RoutingModule } from './genera-anexo5-routing.module';
import { GeneraAnexo5Component } from './pages/genera-anexo5/genera-anexo5.component';


@NgModule({
  declarations: [
    GeneraAnexo5Component
  ],
  imports: [
    CommonModule,
    GeneraAnexo5RoutingModule
  ],
  exports:[
    GeneraAnexo5Component
  ]
})
export class GeneraAnexo5Module { }
