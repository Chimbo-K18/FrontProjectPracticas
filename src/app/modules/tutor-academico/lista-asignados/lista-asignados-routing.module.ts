import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAsignadosComponent } from './pages/lista-asignados/lista-asignados.component';

const routes: Routes = [
  {
    path: '',
    component: ListaAsignadosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaAsignadosRoutingModule { }
