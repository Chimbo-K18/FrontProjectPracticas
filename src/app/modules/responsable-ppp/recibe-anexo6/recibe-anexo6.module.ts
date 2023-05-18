import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecibeAnexo6RoutingModule } from './recibe-anexo6-routing.module';
import { RecibeAnexo6Component } from './pages/recibe-anexo6/recibe-anexo6.component';


@NgModule({
  declarations: [
    RecibeAnexo6Component
  ],
  imports: [
    CommonModule,
    RecibeAnexo6RoutingModule
  ],
  exports:[
    RecibeAnexo6Component
  ]
})
export class RecibeAnexo6Module { }
