import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecibeAnexo3RoutingModule } from './recibe-anexo3-routing.module';
import { RecibeAnexo3Component } from './pages/recibe-anexo3/recibe-anexo3.component';


@NgModule({
  declarations: [
    RecibeAnexo3Component
  ],
  imports: [
    CommonModule,
    RecibeAnexo3RoutingModule
  ],
  exports:[
    RecibeAnexo3Component
  ]
})
export class RecibeAnexo3Module { }
