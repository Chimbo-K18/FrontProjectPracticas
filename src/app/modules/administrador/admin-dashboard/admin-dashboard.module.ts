import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    AdminDashboardRoutingModule
  ],
  exports:[
    AdminDashboardComponent
  ]
})
export class AdminDashboardModule { }
