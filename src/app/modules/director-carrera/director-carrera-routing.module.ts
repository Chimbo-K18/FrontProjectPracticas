import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'lista-soli-convocatorias',
    loadChildren: () => import("./lista-sol-convocatorias/lista-sol-convocatorias.module").then(m => m.ListaSolConvocatoriasModule)

  },

  {
    path: 'aprobar-estudiantes',
    loadChildren: () => import("./aprobacion-estudiantes/aprobacion-estudiantes.module").then(m => m.AprobacionEstudiantesModule)

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectorCarreraRoutingModule { }
