import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresarialDashboardRoutingModule } from './empresarial-dashboard-routing.module';
import { EmpresarialDashboardComponent } from './pages/empresarial-dashboard/empresarial-dashboard.component';


@NgModule({
  declarations: [
    EmpresarialDashboardComponent
  ],
  imports: [
    CommonModule,
    EmpresarialDashboardRoutingModule
  ],
  exports:[
    EmpresarialDashboardComponent
  ]
})
export class EmpresarialDashboardModule { }
