import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardResponsableComponent } from './pages/dashboard-responsable/dashboard-responsable.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardResponsableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardResponsableRoutingModule { }
