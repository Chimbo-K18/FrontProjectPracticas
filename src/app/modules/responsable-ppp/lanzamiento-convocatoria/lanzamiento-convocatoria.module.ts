import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LanzamientoConvocatoriaRoutingModule } from './lanzamiento-convocatoria-routing.module';
import { LanzamientoConvocatoriaComponent } from './pages/lanzamiento-convocatoria/lanzamiento-convocatoria.component';


@NgModule({
  declarations: [
    LanzamientoConvocatoriaComponent
  ],
  imports: [
    CommonModule,
    LanzamientoConvocatoriaRoutingModule
  ],
  exports:[
    LanzamientoConvocatoriaComponent
  ]
})
export class LanzamientoConvocatoriaModule { }
