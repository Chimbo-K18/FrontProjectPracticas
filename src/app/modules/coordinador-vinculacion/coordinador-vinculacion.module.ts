import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoordinadorVinculacionRoutingModule } from './coordinador-vinculacion-routing.module';
import { WelcomeCoordVinculacionComponent } from './welcome-coord-vinculacion/welcome-coord-vinculacion.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    WelcomeCoordVinculacionComponent
  ],
  imports: [
    CommonModule,
    CoordinadorVinculacionRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class CoordinadorVinculacionModule { }
