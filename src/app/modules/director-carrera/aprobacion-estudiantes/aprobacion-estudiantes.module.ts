import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AprobacionEstudiantesRoutingModule } from './aprobacion-estudiantes-routing.module';
import { AprobacionEstudiantesComponent } from './pages/aprobacion-estudiantes/aprobacion-estudiantes.component';


@NgModule({
  declarations: [
    AprobacionEstudiantesComponent
  ],
  imports: [
    CommonModule,
    AprobacionEstudiantesRoutingModule
  ],
  exports:[
    AprobacionEstudiantesComponent
  ]
})
export class AprobacionEstudiantesModule { }
