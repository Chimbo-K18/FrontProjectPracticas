import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroEmpresaRoutingModule } from './registro-empresa-routing.module';
import { RegistroEmpresaComponent } from './pages/registro-empresa/registro-empresa.component';


@NgModule({
  declarations: [
    RegistroEmpresaComponent
  ],
  imports: [
    CommonModule,
    RegistroEmpresaRoutingModule
  ]
})
export class RegistroEmpresaModule { }
