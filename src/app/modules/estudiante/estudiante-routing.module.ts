import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'lista-convocatorias',
    loadChildren: () => import("./lista-convocatorias/lista-convocatorias.module").then(m => m.ListaConvocatoriasModule)

  },
  {
    path: 'lista-aprovacion',
    loadChildren: () => import("./listaraprobados/listaraprobados.module").then(m => m.ListaraprobadosModule)

  },

  {
    path: 'detalle-practica',
    loadChildren: () => import("./detalles-practica/detalles-practica.module").then(m => m.DetallesPracticaModule)

  },

  {
    path: 'dashboard',
    loadChildren: () => import("./dashboard-estudiante/dashboard-estudiante.module").then(m => m.DashboardEstudianteModule)

  },

  {
    path: 'profile',
    loadChildren: () => import("./profile-estudiante/profile-estudiante.module").then(m => m.ProfileEstudianteModule)

  },

  {
    path: 'genera-anexo2',
    loadChildren: () => import("./genera-anexo2/genera-anexo2.module").then(m => m.GeneraAnexo2Module)

  },

  {
    path: 'genera-anexo3',
    loadChildren: () => import("./genera-anexo3/genera-anexo3.module").then(m => m.GeneraAnexo3Module)

  },

  {
    path: 'genera-anexo6',
    loadChildren: () => import("./genera-anexo6/genera-anexo6.module").then(m => m.GeneraAnexo6Module)

  },

  {
    path: 'genera-anexo8',
    loadChildren: () => import("./genera-anexo8/genera-anexo8.module").then(m => m.GeneraAnexo8Module)

  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudianteRoutingModule { }
