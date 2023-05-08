import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AprobarEstudiantesRoutingModule } from './aprobar-estudiantes-routing.module';
import { AprobarEstudiantesComponent } from './pages/aprobar-estudiantes/aprobar-estudiantes.component';


@NgModule({
  declarations: [
    AprobarEstudiantesComponent
  ],
  imports: [
    CommonModule,
    AprobarEstudiantesRoutingModule
  ],
  exports:[
    AprobarEstudiantesComponent
  ]
})
export class AprobarEstudiantesModule { }
