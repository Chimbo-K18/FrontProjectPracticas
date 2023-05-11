import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectorDashboardComponent } from './pages/director-dashboard/director-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DirectorDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectorDashboardRoutingModule { }
