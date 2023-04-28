import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroTutEmpresarialRoutingModule } from './registro-tut-empresarial-routing.module';
import { RegistroTutEmpresarialComponent } from './pages/registro-tut-empresarial/registro-tut-empresarial.component';


@NgModule({
  declarations: [
    RegistroTutEmpresarialComponent
  ],
  imports: [
    CommonModule,
    RegistroTutEmpresarialRoutingModule
  ],
  exports: [
    RegistroTutEmpresarialComponent
  ]
})
export class RegistroTutEmpresarialModule { }
