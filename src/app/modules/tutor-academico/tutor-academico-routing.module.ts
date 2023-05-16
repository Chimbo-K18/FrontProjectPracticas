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

  },

  {
    path: 'envio-anexo1',
    loadChildren: () => import("./envio-anexo1/envio-anexo1.module").then(m => m.EnvioAnexo1Module)

  },
  {
    path: 'envio-anexo5',
    loadChildren: () => import("./genera-anexo5/genera-anexo5.module").then(m => m.GeneraAnexo5Module)

  },

  {
    path: 'recibe-anexo6',
    loadChildren: () => import("./recibe-anexo6/recibe-anexo6.module").then(m => m.RecibeAnexo6Module)

  },

  {
    path: 'recibe-anexo7',
    loadChildren: () => import("./recibe-anexo7/recibe-anexo7.module").then(m => m.RecibeAnexo7Module)

  },
  {
    path: 'recibe-anexo8',
    loadChildren: () => import("./recibe-anexo8/recibe-anexo8.module").then(m => m.RecibeAnexo8Module)

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorAcademicoRoutingModule { }
