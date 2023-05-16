import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneraAnexo6RoutingModule } from './genera-anexo6-routing.module';
import { GeneraAnexo6Component } from './pages/genera-anexo6/genera-anexo6.component';


@NgModule({
  declarations: [
    GeneraAnexo6Component
  ],
  imports: [
    CommonModule,
    GeneraAnexo6RoutingModule
  ],
  exports:[
    GeneraAnexo6Component
  ]
})
export class GeneraAnexo6Module { }
