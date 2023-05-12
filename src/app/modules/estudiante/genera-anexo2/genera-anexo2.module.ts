import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneraAnexo2RoutingModule } from './genera-anexo2-routing.module';
import { GeneraAnexo2Component } from './pages/genera-anexo2/genera-anexo2.component';


@NgModule({
  declarations: [
    GeneraAnexo2Component
  ],
  imports: [
    CommonModule,
    GeneraAnexo2RoutingModule
  ],
  exports:[
    GeneraAnexo2Component
  ]
})
export class GeneraAnexo2Module { }
