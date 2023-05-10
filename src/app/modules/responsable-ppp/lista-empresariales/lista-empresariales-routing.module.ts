import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpresarialesComponent } from './pages/lista-empresariales/lista-empresariales.component';

const routes: Routes = [

  {
    path: '',
    component: ListaEmpresarialesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaEmpresarialesRoutingModule { }
