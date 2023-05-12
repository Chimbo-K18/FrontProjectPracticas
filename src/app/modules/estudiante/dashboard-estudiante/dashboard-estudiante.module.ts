import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardEstudianteRoutingModule } from './dashboard-estudiante-routing.module';
import { DashboardEstudianteComponent } from './pages/dashboard-estudiante/dashboard-estudiante.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    DashboardEstudianteComponent
  ],
  imports: [
    CommonModule,
    DashboardEstudianteRoutingModule,
    MatCardModule
  ],
  exports:[
    DashboardEstudianteComponent
  ]
})
export class DashboardEstudianteModule { }
