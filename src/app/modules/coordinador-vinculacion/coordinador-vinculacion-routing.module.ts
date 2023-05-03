import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'registro-convenio',
    loadChildren: () => import("./register-convenio/register-convenio.module").then(m => m.RegisterConvenioModule)

  },

  {
    path: 'lista-convenios',
    loadChildren: () => import("./lista-convenios/lista-convenios.module").then(m => m.ListaConveniosModule)

  },

  {
    path: 'registro-empresa',
    loadChildren: () => import("./registro-empresa/registro-empresa.module").then(m => m.RegistroEmpresaModule)

  },

  {
    path: 'listado-empresas',
    loadChildren: () => import("./listado-empresas/listado-empresas.module").then(m => m.ListadoEmpresasModule)

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoordinadorVinculacionRoutingModule { }
