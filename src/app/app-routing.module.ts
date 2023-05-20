import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeAdministradorComponent } from './modules/administrador/welcome-administrador/welcome-administrador.component';
import { WelcomeAuthComponent } from './modules/auth/welcome-auth/welcome-auth.component';
import { WelcomeBienvenidaComponent } from './modules/bienvenida/welcome-bienvenida/welcome-bienvenida.component';
import { WelcomeCoordVinculacionComponent } from './modules/coordinador-vinculacion/welcome-coord-vinculacion/welcome-coord-vinculacion.component';
import { WelcomeDirectorComponent } from './modules/director-carrera/welcome-director/welcome-director.component';
import { WelcomeEstudianteComponent } from './modules/estudiante/welcome-estudiante/welcome-estudiante.component';
import { WelcomeResponsableComponent } from './modules/responsable-ppp/welcome-responsable/welcome-responsable.component';
import { WelcomeEmpresarialComponent } from './modules/tutor-empresarial/welcome-empresarial/welcome-empresarial.component';
import { WelcomeAcademicoComponent } from './modules/tutor-academico/welcome-academico/welcome-academico.component';

const routes: Routes = [

  {
    path: '',
    component: WelcomeBienvenidaComponent,
    loadChildren: () => import("./modules/bienvenida/bienvenida.module").then(m => m.BienvenidaModule)
  },


  {
    path: 'auth',
    component: WelcomeAuthComponent,
    loadChildren: () => import("./modules/auth/auth.module").then(m => m.AuthModule)
  },

  {
    path: 'administrador',
    component: WelcomeAdministradorComponent,
    loadChildren: () => import("./modules/administrador/administrador.module").then(m => m.AdministradorModule)
  },

  {
    path: 'coordinador',
    component: WelcomeCoordVinculacionComponent,
    loadChildren: () => import("./modules/coordinador-vinculacion/coordinador-vinculacion.module").then(m => m.CoordinadorVinculacionModule)
  },

  {
    path: 'director',
    component: WelcomeDirectorComponent,
    loadChildren: () => import("./modules/director-carrera/director-carrera.module").then(m => m.DirectorCarreraModule)
  },

  {
    path: 'estudiante',
    component: WelcomeEstudianteComponent,
    loadChildren: () => import("./modules/estudiante/estudiante.module").then(m => m.EstudianteModule)
  },

  {
    path: 'responsable',
    component: WelcomeResponsableComponent,
    loadChildren: () => import("./modules/responsable-ppp/responsable-ppp.module").then(m => m.ResponsablePppModule)
  },


  {
    path: 'empresarial',
    component: WelcomeEmpresarialComponent,
    loadChildren: () => import("./modules/tutor-empresarial/tutor-empresarial.module").then(m => m.TutorEmpresarialModule)
  },

  {
    path: 'academico',
    component: WelcomeAcademicoComponent,
    loadChildren: () => import("./modules/tutor-academico/tutor-academico.module").then(m => m.TutorAcademicoModule)
  }






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const app_routing = RouterModule.forRoot(routes);
