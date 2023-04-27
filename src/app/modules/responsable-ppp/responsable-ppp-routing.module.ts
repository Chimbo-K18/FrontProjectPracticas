import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'aprobar-solicitud',
    loadChildren: () => import("./aprobacion-solicitud/aprobacion-solicitud.module").then(m => m.AprobacionSolicitudModule)

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResponsablePppRoutingModule { }
