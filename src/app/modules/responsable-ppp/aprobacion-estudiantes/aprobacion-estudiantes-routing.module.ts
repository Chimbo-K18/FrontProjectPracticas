import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AprobacionEstudiantesComponent } from './pages/aprobacion-estudiantes/aprobacion-estudiantes.component';


const routes: Routes = [
  {
    path:'',
    component: AprobacionEstudiantesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AprobacionEstudiantesRoutingModule { }
