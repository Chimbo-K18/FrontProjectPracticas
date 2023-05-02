import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudianteRoutingModule } from './estudiante-routing.module';
import { WelcomeEstudianteComponent } from './welcome-estudiante/welcome-estudiante.component';


@NgModule({
  declarations: [
    WelcomeEstudianteComponent
  ],
  imports: [
    CommonModule,
    EstudianteRoutingModule
  ]
})
export class EstudianteModule { }
