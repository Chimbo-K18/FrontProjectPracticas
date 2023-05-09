import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AprobarEstudiantesComponent } from './pages/aprobar-estudiantes/aprobar-estudiantes.component';

const routes: Routes = [

  {
    path:'',
    component: AprobarEstudiantesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AprobarEstudiantesRoutingModule { }
