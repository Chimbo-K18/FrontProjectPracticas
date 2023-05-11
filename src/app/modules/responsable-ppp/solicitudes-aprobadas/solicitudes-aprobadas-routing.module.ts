import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitudesAprobadasComponent } from './pages/solicitudes-aprobadas/solicitudes-aprobadas.component';

const routes: Routes = [
  {
    path: '',
    component: SolicitudesAprobadasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudesAprobadasRoutingModule { }
