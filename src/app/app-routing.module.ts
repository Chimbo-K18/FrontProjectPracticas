import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeAdministradorComponent } from './modules/administrador/welcome-administrador/welcome-administrador.component';
import { WelcomeAuthComponent } from './modules/auth/welcome-auth/welcome-auth.component';
import { WelcomeBienvenidaComponent } from './modules/bienvenida/welcome-bienvenida/welcome-bienvenida.component';

const routes: Routes = [

  {
    path: '',
    component: WelcomeBienvenidaComponent,
    loadChildren: () => import("./modules/bienvenida/bienvenida.module").then(m => m.BienvenidaModule)
  },

  {
    path: 'administrador',
    component: WelcomeAdministradorComponent,
    loadChildren: () => import("./modules/administrador/administrador.module").then(m => m.AdministradorModule)
  },

  {
    path: 'auth',
    component: WelcomeAuthComponent,
    loadChildren: () => import("./modules/auth/auth.module").then(m => m.AuthModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
