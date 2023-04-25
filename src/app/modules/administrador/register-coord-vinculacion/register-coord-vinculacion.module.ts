import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterCoordVinculacionRoutingModule } from './register-coord-vinculacion-routing.module';
import { RegisterCoordVinculacionComponent } from './pages/register-coord-vinculacion/register-coord-vinculacion.component';


@NgModule({
  declarations: [
    RegisterCoordVinculacionComponent
  ],
  imports: [
    CommonModule,
    RegisterCoordVinculacionRoutingModule
  ],
  exports:[
    RegisterCoordVinculacionComponent
  ]
})
export class RegisterCoordVinculacionModule { }
