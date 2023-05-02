import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoordinadorVinculacionRoutingModule } from './coordinador-vinculacion-routing.module';
import { WelcomeCoordVinculacionComponent } from './welcome-coord-vinculacion/welcome-coord-vinculacion.component';


@NgModule({
  declarations: [
    WelcomeCoordVinculacionComponent
  ],
  imports: [
    CommonModule,
    CoordinadorVinculacionRoutingModule
  ]
})
export class CoordinadorVinculacionModule { }
