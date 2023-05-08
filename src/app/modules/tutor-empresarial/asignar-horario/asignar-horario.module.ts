import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsignarHorarioRoutingModule } from './asignar-horario-routing.module';
import { AsignarHorarioComponent } from './pages/asignar-horario/asignar-horario.component';


@NgModule({
  declarations: [
    AsignarHorarioComponent
  ],
  imports: [
    CommonModule,
    AsignarHorarioRoutingModule
  ],
  exports:[
    AsignarHorarioComponent
  ]
})
export class AsignarHorarioModule { }
