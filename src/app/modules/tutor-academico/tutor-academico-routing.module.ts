import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'lista-asignados',
    loadChildren: () => import("./lista-asignados/lista-asignados.module").then(m => m.ListaAsignadosModule)

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorAcademicoRoutingModule { }
