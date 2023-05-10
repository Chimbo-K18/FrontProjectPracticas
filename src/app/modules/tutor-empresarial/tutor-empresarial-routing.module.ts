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
    path: 'asginar-horario',
    loadChildren: () => import("./asignar-horario/asignar-horario.module").then(m => m.AsignarHorarioModule)

  },

  {
    path: 'aprobar-estudiante',
    loadChildren: () => import("./aprobar-estudiantes/aprobar-estudiantes.module").then(m => m.AprobarEstudiantesModule)

  },

  {
    path: 'dashboard',
    loadChildren: () => import("./empresarial-dashboard/empresarial-dashboard.module").then(m => m.EmpresarialDashboardModule)

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorEmpresarialRoutingModule { }
