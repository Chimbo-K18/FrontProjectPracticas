import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresarialDashboardComponent } from './pages/empresarial-dashboard/empresarial-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: EmpresarialDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresarialDashboardRoutingModule { }
