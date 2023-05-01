import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'registro-empresarial',
    loadChildren: () => import("./registro-tut-empresarial/registro-tut-empresarial.module").then(m => m.RegistroTutEmpresarialModule)
  },

  {
    path: 'solicitud-recibida',
    loadChildren: () => import("./lista-soli-recibidas/lista-soli-recibidas.module").then(m => m.ListaSoliRecibidasModule)
  },
  {
    path: 'registro-actividad',
    loadChildren: () => import("./registro-actividades/registro-actividades.module").then(m => m.RegistroActividadesModule)
  },

  {
    path: 'lanzamiento-convocatoria',
    loadChildren: () => import("./lanzamiento-convocatoria/lanzamiento-convocatoria.module").then(m => m.LanzamientoConvocatoriaModule)
  },
  {
    path: 'aprobacion-estudiantes',
    loadChildren: () => import("./aprobacion-estudiantes/aprobacion-estudiantes.module").then(m => m.AprobacionEstudiantesModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResponsablePppRoutingModule { }
