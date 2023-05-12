import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecibeAnexo2RoutingModule } from './recibe-anexo2-routing.module';
import { RecibeAnexo2Component } from './pages/recibe-anexo2/recibe-anexo2.component';


@NgModule({
  declarations: [
    RecibeAnexo2Component
  ],
  imports: [
    CommonModule,
    RecibeAnexo2RoutingModule
  ],
  exports:[
    RecibeAnexo2Component
  ]
})
export class RecibeAnexo2Module { }
