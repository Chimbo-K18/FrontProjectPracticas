import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneraAnexo3RoutingModule } from './genera-anexo3-routing.module';
import { GeneraAnexo3Component } from './pages/genera-anexo3/genera-anexo3.component';


@NgModule({
  declarations: [
    GeneraAnexo3Component
  ],
  imports: [
    CommonModule,
    GeneraAnexo3RoutingModule
  ],
  exports:[
    GeneraAnexo3Component
  ]
})
export class GeneraAnexo3Module { }
