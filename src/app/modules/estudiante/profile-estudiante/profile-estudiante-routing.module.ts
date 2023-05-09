import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileEstudianteComponent } from './pages/profile-estudiante/profile-estudiante.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileEstudianteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileEstudianteRoutingModule { }
