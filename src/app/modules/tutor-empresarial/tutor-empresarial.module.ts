import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorEmpresarialRoutingModule } from './tutor-empresarial-routing.module';
import { WelcomeEmpresarialComponent } from './welcome-empresarial/welcome-empresarial.component';


@NgModule({
  declarations: [
    WelcomeEmpresarialComponent
  ],
  imports: [
    CommonModule,
    TutorEmpresarialRoutingModule,
    FormsModule
  ]
})
export class TutorEmpresarialModule { }
