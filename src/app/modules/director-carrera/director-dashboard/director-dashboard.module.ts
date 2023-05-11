import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectorDashboardRoutingModule } from './director-dashboard-routing.module';
import { DirectorDashboardComponent } from './pages/director-dashboard/director-dashboard.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    DirectorDashboardComponent
  ],
  imports: [
    CommonModule,
    DirectorDashboardRoutingModule,
    MatCardModule
  ],
  exports:[
    DirectorDashboardComponent
  ]
})
export class DirectorDashboardModule { }
