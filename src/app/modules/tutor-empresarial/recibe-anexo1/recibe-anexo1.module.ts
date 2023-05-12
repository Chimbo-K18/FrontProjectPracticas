import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecibeAnexo1RoutingModule } from './recibe-anexo1-routing.module';
import { RecibeAnexo1Component } from './pages/recibe-anexo1/recibe-anexo1.component';


@NgModule({
  declarations: [
    RecibeAnexo1Component
  ],
  imports: [
    CommonModule,
    RecibeAnexo1RoutingModule
  ],
  exports:[
    RecibeAnexo1Component
  ]
})
export class RecibeAnexo1Module { }
