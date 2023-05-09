import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorEmpresarialRoutingModule } from './tutor-empresarial-routing.module';
import { WelcomeEmpresarialComponent } from './welcome-empresarial/welcome-empresarial.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    WelcomeEmpresarialComponent
  ],
  imports: [
    CommonModule,
    TutorEmpresarialRoutingModule,
    FormsModule,
    SharedModule,
    RouterModule
  ]
})
export class TutorEmpresarialModule { }
