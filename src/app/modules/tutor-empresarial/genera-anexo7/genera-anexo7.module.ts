import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneraAnexo7RoutingModule } from './genera-anexo7-routing.module';
import { GeneraAnexo7Component } from './pages/genera-anexo7/genera-anexo7.component';


@NgModule({
  declarations: [
    GeneraAnexo7Component
  ],
  imports: [
    CommonModule,
    GeneraAnexo7RoutingModule
  ],
  exports:[
    GeneraAnexo7Component
  ]
})
export class GeneraAnexo7Module { }
