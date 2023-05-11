import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'lista-asignados',
    loadChildren: () => import("./lista-asignados/lista-asignados.module").then(m => m.ListaAsignadosModule)

  },

  {
    path: 'dashboard',
    loadChildren: () => import("./dashboard-academico/dashboard-academico.module").then(m => m.DashboardAcademicoModule)

  },

  {
    path: 'profile',
    loadChildren: () => import("./profile-academico/profile-academico.module").then(m => m.ProfileAcademicoModule)

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorAcademicoRoutingModule { }
