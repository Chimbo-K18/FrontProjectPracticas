import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEstudiantesAprobadosComponent } from './pages/lista-estudiantes-aprobados/lista-estudiantes-aprobados.component';

const routes: Routes = [
  {
    path:'',
    component: ListaEstudiantesAprobadosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaEstudiantesAprobadosRoutingModule { }
