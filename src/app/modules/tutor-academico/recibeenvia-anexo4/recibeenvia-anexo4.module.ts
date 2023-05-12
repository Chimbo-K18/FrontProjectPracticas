import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecibeenviaAnexo4RoutingModule } from './recibeenvia-anexo4-routing.module';
import { RecibeenviaAnexo4Component } from './pages/recibeenvia-anexo4/recibeenvia-anexo4.component';


@NgModule({
  declarations: [
    RecibeenviaAnexo4Component
  ],
  imports: [
    CommonModule,
    RecibeenviaAnexo4RoutingModule
  ],
  exports:[
    RecibeenviaAnexo4Component
  ]
})
export class RecibeenviaAnexo4Module { }
