import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsignaEspecificoRoutingModule } from './asigna-especifico-routing.module';
import { AsignaEspecificoComponent } from './pages/asigna-especifico/asigna-especifico.component';


@NgModule({
  declarations: [
    AsignaEspecificoComponent
  ],
  imports: [
    CommonModule,
    AsignaEspecificoRoutingModule
  ],
  exports:[
    AsignaEspecificoComponent
  ]
})
export class AsignaEspecificoModule { }
