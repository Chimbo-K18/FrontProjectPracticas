import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecibeAnexo8RoutingModule } from './recibe-anexo8-routing.module';
import { RecibeAnexo8Component } from './pages/recibe-anexo8/recibe-anexo8.component';


@NgModule({
  declarations: [
    RecibeAnexo8Component
  ],
  imports: [
    CommonModule,
    RecibeAnexo8RoutingModule
  ],
  exports:[
    RecibeAnexo8Component
  ]
})
export class RecibeAnexo8Module { }
