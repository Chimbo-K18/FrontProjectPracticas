import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsignaAcademicoRoutingModule } from './asigna-academico-routing.module';
import { AsignaAcademicoComponent } from './pages/asigna-academico/asigna-academico.component';


@NgModule({
  declarations: [
    AsignaAcademicoComponent
  ],
  imports: [
    CommonModule,
    AsignaAcademicoRoutingModule
  ],
  exports:[
    AsignaAcademicoComponent
  ]
})
export class AsignaAcademicoModule { }
