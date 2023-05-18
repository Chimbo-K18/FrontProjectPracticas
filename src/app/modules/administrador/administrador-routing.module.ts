import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'register-responsable',
    loadChildren: () =>
      import('./register-responsable/register-responsable.module').then(
        (m) => m.RegisterResponsableModule
      ),
  },

  {
    path: 'register-coord-vinculacion',
    loadChildren: () => import('./register-coord-vinculacion/register-coord-vinculacion.module').then((m) => m.RegisterCoordVinculacionModule),
  },
  {
    path: 'register-director',
    loadChildren: () => import('./register-director/register-director.module').then((m) => m.RegisterDirectorModule),
  },

  {
    path: 'profile',
    loadChildren: () => import('./profile-admin/profile-admin.module').then((m) => m.ProfileAdminModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./admin-dashboard/admin-dashboard.module').then((m) => m.AdminDashboardModule),
  },
  {
    path: 'lista-coordinador',
    loadChildren: () => import('./lista-coord/lista-coord.module').then((m) => m.ListaCoordModule),
  },
  {
    path: 'lista-responsable',
    loadChildren: () => import('./lista-responsable/lista-responsable.module').then((m) => m.ListaResponsableModule),
  },
  {
    path: 'lista-director',
    loadChildren: () => import('./lista-director/lista-director.module').then((m) => m.ListaDirectorModule),
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministradorRoutingModule { }
