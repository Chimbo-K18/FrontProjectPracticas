import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'registro-convenio',
    loadChildren: () => import("./register-convenio/register-convenio.module").then(m => m.RegisterConvenioModule)

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoordinadorVinculacionRoutingModule { }
