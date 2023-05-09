import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorAcademicoRoutingModule } from './tutor-academico-routing.module';
import { WelcomeAcademicoComponent } from './welcome-academico/welcome-academico.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    WelcomeAcademicoComponent
  ],
  imports: [
    CommonModule,
    TutorAcademicoRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class TutorAcademicoModule { }
