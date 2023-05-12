import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'solicitud-practicas',
    loadChildren: () => import("./envio-solicitud/envio-solicitud.module").then(m => m.EnvioSolicitudModule)

  },

  {
    path: 'lista-soli-enviadas',
    loadChildren: () => import("./lista-soli-enviadas/lista-soli-enviadas.module").then(m => m.ListaSoliEnviadasModule)

  },

  {
    path: 'ultima-aprobacion',
    loadChildren: () => import("./aprobar-estudiantes/aprobar-estudiantes.module").then(m => m.AprobarEstudiantesModule)

  },

  {
    path: 'asignar-horario',
    loadChildren: () => import("./asignar-horario/asignar-horario.module").then(m => m.AsignarHorarioModule)

  },


  {
    path: 'dashboard',
    loadChildren: () => import("./empresarial-dashboard/empresarial-dashboard.module").then(m => m.EmpresarialDashboardModule)

  },

  {
    path: 'profile',
    loadChildren: () => import("./profile-empresarial/profile-empresarial.module").then(m => m.ProfileEmpresarialModule)

  },

  {
    path: 'lista-aprobadas',
    loadChildren: () => import("./lista-soli-aprobadas/lista-soli-aprobadas.module").then(m => m.ListaSoliAprobadasModule)

  },

  {
    path: 'estudiantes-aprobados',
    loadChildren: () => import("./lista-estudiantes-aprobados/lista-estudiantes-aprobados.module").then(m => m.ListaEstudiantesAprobadosModule)

  },

  {
    path: 'reporte-seleccion',
    loadChildren: () => import("./reporte-seleccion/reporte-seleccion.module").then(m => m.ReporteSeleccionModule)

  },

  {
    path: 'asigna-tutor',
    loadChildren: () => import("./asigna-especifico/asigna-especifico.module").then(m => m.AsignaEspecificoModule)

  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorEmpresarialRoutingModule { }
