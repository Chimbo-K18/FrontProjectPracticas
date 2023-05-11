import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'lista-soli-convocatorias',
    loadChildren: () => import("./lista-sol-convocatorias/lista-sol-convocatorias.module").then(m => m.ListaSolConvocatoriasModule)

  },

  {
    path: 'aprobar-estudiantes',
    loadChildren: () => import("./aprobacion-estudiantes/aprobacion-estudiantes.module").then(m => m.AprobacionEstudiantesModule)

  },

  {
    path: 'dashboard',
    loadChildren: () => import("./director-dashboard/director-dashboard.module").then(m => m.DirectorDashboardModule)

  },

  {
    path: 'profile',
    loadChildren: () => import("./profile-director/profile-director.module").then(m => m.ProfileDirectorModule)

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectorCarreraRoutingModule { }
