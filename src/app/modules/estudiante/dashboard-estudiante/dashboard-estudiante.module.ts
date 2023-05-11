import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardEstudianteRoutingModule } from './dashboard-estudiante-routing.module';
import { DashboardEstudianteComponent } from './pages/dashboard-estudiante/dashboard-estudiante.component';


@NgModule({
  declarations: [
    DashboardEstudianteComponent
  ],
  imports: [
    CommonModule,
    DashboardEstudianteRoutingModule
  ],
  exports:[
    DashboardEstudianteComponent
  ]
})
export class DashboardEstudianteModule { }
