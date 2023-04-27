import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AprobacionSolicitudComponent } from './pages/aprobacion-solicitud/aprobacion-solicitud.component';

const routes: Routes = [

  {

    path:'',
    component: AprobacionSolicitudComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AprobacionSolicitudRoutingModule { }
