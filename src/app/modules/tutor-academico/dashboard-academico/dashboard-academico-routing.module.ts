import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAcademicoComponent } from './pages/dashboard-academico/dashboard-academico.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardAcademicoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardAcademicoRoutingModule { }
