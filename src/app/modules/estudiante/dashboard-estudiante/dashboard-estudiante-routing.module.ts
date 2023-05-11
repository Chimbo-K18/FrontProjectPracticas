import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardEstudianteComponent } from './pages/dashboard-estudiante/dashboard-estudiante.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardEstudianteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardEstudianteRoutingModule { }
