import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignarHorarioComponent } from './pages/asignar-horario/asignar-horario.component';

const routes: Routes = [
  {
    path: '',
    component: AsignarHorarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsignarHorarioRoutingModule { }
