import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecibeAnexo7RoutingModule } from './recibe-anexo7-routing.module';
import { RecibeAnexo7Component } from './pages/recibe-anexo7/recibe-anexo7.component';


@NgModule({
  declarations: [
    RecibeAnexo7Component
  ],
  imports: [
    CommonModule,
    RecibeAnexo7RoutingModule
  ],
  exports:[
    RecibeAnexo7Component
  ]
})
export class RecibeAnexo7Module { }
