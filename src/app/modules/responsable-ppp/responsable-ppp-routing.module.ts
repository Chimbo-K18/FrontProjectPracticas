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
  },
  {
    path: 'asignar-academico',
    loadChildren: () => import("./asigna-academico/asigna-academico.module").then(m => m.AsignaAcademicoModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import("./dashboard-responsable/dashboard-responsable.module").then(m => m.DashboardResponsableModule)
  },
  {
    path: 'lista-solicitudes',
    loadChildren: () => import("./solicitudes-aprobadas/solicitudes-aprobadas.module").then(m => m.SolicitudesAprobadasModule)
  },

  {
    path: 'lista-convocatorias',
    loadChildren: () => import("./lista-convocatorias/lista-convocatorias.module").then(m => m.ListaConvocatoriasModule)
  },

  {
    path: 'profile',
    loadChildren: () => import("./profile-responsable/profile-responsable.module").then(m => m.ProfileResponsableModule)
  },

  {
    path: 'lista-empresariales',
    loadChildren: () => import("./lista-empresariales/lista-empresariales.module").then(m => m.ListaEmpresarialesModule)
  },

  {
    path: 'recibe-anexo1',
    loadChildren: () => import("./recibe-anexo1/recibe-anexo1.module").then(m => m.RecibeAnexo1Module)
  },

  {
    path: 'recibe-anexo2',
    loadChildren: () => import("./recibe-anexo2/recibe-anexo2.module").then(m => m.RecibeAnexo2Module)
  },

  {
    path: 'recibe-anexo3',
    loadChildren: () => import("./recibe-anexo3/recibe-anexo3.module").then(m => m.RecibeAnexo3Module)
  },

  {
    path: 'recibe-anexo4',
    loadChildren: () => import("./recibe-anexo4/recibe-anexo4.module").then(m => m.RecibeAnexo4Module)
  },

  {
    path: 'recibe-anexo5',
    loadChildren: () => import("./recibe-anexo5/recibe-anexo5.module").then(m => m.RecibeAnexo5Module)
  },

  {
    path: 'recibe-anexo6',
    loadChildren: () => import("./recibe-anexo6/recibe-anexo6.module").then(m => m.RecibeAnexo6Module)
  },

  {
    path: 'recibe-anexo7',
    loadChildren: () => import("./recibe-anexo7/recibe-anexo7.module").then(m => m.RecibeAnexo7Module)
  },

  {
    path: 'recibe-anexo8',
    loadChildren: () => import("./recibe-anexo8/recibe-anexo8.module").then(m => m.RecibeAnexo8Module)
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResponsablePppRoutingModule { }
