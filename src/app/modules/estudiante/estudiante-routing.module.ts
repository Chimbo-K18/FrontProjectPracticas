import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'lista-convocatorias',
    loadChildren: () => import("./lista-convocatorias/lista-convocatorias.module").then(m => m.ListaConvocatoriasModule)

  },

  {
    path: 'detalle-practica',
    loadChildren: () => import("./detalles-practica/detalles-practica.module").then(m => m.DetallesPracticaModule)

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudianteRoutingModule { }
