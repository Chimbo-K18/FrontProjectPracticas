import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardResponsableRoutingModule } from './dashboard-responsable-routing.module';
import { DashboardResponsableComponent } from './pages/dashboard-responsable/dashboard-responsable.component';


@NgModule({
  declarations: [
    DashboardResponsableComponent
  ],
  imports: [
    CommonModule,
    DashboardResponsableRoutingModule
  ],
  exports:[
    DashboardResponsableComponent
  ]
})
export class DashboardResponsableModule { }
