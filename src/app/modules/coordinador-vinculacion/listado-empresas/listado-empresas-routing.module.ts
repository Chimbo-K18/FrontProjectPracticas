import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoEmpresasComponent } from './pages/listado-empresas/listado-empresas.component';

const routes: Routes = [

  {
    path: '',
    component: ListadoEmpresasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListadoEmpresasRoutingModule { }
