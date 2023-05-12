import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecibeAnexo4RoutingModule } from './recibe-anexo4-routing.module';
import { RecibeAnexo4Component } from './pages/recibe-anexo4/recibe-anexo4.component';


@NgModule({
  declarations: [
    RecibeAnexo4Component
  ],
  imports: [
    CommonModule,
    RecibeAnexo4RoutingModule
  ],
  exports:[
    RecibeAnexo4Component
  ]
})
export class RecibeAnexo4Module { }
