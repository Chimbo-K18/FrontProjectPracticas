import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectorCarreraRoutingModule } from './director-carrera-routing.module';
import { WelcomeDirectorComponent } from './welcome-director/welcome-director.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    WelcomeDirectorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DirectorCarreraRoutingModule
  ]
})
export class DirectorCarreraModule { }
