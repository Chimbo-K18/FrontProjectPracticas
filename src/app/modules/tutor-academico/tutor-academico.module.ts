import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorAcademicoRoutingModule } from './tutor-academico-routing.module';
import { WelcomeAcademicoComponent } from './welcome-academico/welcome-academico.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    WelcomeAcademicoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TutorAcademicoRoutingModule
  ]
})
export class TutorAcademicoModule { }
