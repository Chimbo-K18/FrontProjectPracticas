import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardAcademicoRoutingModule } from './dashboard-academico-routing.module';
import { DashboardAcademicoComponent } from './pages/dashboard-academico/dashboard-academico.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    DashboardAcademicoComponent
  ],
  imports: [
    CommonModule,
    DashboardAcademicoRoutingModule,
    MatCardModule
  ],
  exports:[
    DashboardAcademicoComponent
  ]
})
export class DashboardAcademicoModule { }
