import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'register-responsable',
    loadChildren: () => import("./register-responsable/register-responsable.module").then(m => m.RegisterResponsableModule)

  },

  {
    path: 'register-coord-vinculacion',
    loadChildren: () => import("./register-coord-vinculacion/register-coord-vinculacion.module").then(m => m.RegisterCoordVinculacionModule)

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
