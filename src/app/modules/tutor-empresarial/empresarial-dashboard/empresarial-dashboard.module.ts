import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresarialDashboardRoutingModule } from './empresarial-dashboard-routing.module';
import { EmpresarialDashboardComponent } from './pages/empresarial-dashboard/empresarial-dashboard.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    EmpresarialDashboardComponent
  ],
  imports: [
    CommonModule,
    EmpresarialDashboardRoutingModule,
    MatCardModule
  ],
  exports:[
    EmpresarialDashboardComponent
  ]
})
export class EmpresarialDashboardModule { }
