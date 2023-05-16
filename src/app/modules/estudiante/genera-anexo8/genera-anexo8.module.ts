import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneraAnexo8RoutingModule } from './genera-anexo8-routing.module';
import { GeneraAnexo8Component } from './pages/genera-anexo8/genera-anexo8.component';


@NgModule({
  declarations: [
    GeneraAnexo8Component
  ],
  imports: [
    CommonModule,
    GeneraAnexo8RoutingModule
  ],
  exports:[
    GeneraAnexo8Component
  ]
})
export class GeneraAnexo8Module { }
