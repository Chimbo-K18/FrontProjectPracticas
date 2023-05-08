import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileEstudianteRoutingModule } from './profile-estudiante-routing.module';
import { ProfileEstudianteComponent } from './pages/profile-estudiante/profile-estudiante.component';


@NgModule({
  declarations: [
    ProfileEstudianteComponent
  ],
  imports: [
    CommonModule,
    ProfileEstudianteRoutingModule
  ],
  exports:[
    ProfileEstudianteComponent
  ]
})
export class ProfileEstudianteModule { }
