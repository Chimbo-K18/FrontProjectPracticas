import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'lista-convocatorias',
    loadChildren: () => import("./lista-convocatorias/lista-convocatorias.module").then(m => m.ListaConvocatoriasModule)

  },

  {
    path: 'detalle-practica',
    loadChildren: () => import("./detalles-practica/detalles-practica.module").then(m => m.DetallesPracticaModule)

  },

  {
    path: 'dashboard',
    loadChildren: () => import("./dashboard-estudiante/dashboard-estudiante.module").then(m => m.DashboardEstudianteModule)

  },

  {
    path: 'profile',
    loadChildren: () => import("./profile-estudiante/profile-estudiante.module").then(m => m.ProfileEstudianteModule)

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudianteRoutingModule { }
