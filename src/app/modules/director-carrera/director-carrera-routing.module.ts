import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import("./lista-sol-convocatorias/lista-sol-convocatorias.module").then(m => m.ListaSolConvocatoriasModule)

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectorCarreraRoutingModule { }
