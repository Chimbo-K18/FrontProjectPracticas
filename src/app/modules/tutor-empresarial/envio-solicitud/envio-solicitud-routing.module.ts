import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnvioSolicitudComponent } from './pages/envio-solicitud/envio-solicitud.component';

const routes: Routes = [

  {
    path:'',
    component: EnvioSolicitudComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnvioSolicitudRoutingModule { }
