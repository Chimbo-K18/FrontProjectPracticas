import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudianteRoutingModule } from './estudiante-routing.module';
import { WelcomeEstudianteComponent } from './welcome-estudiante/welcome-estudiante.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    WelcomeEstudianteComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EstudianteRoutingModule
  ]
})
export class EstudianteModule { }
