import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'solicitud-practicas',
    loadChildren: () => import("./envio-solicitud/envio-solicitud.module").then(m => m.EnvioSolicitudModule)

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorEmpresarialRoutingModule { }
