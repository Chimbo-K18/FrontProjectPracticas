import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanzamientoConvocatoriaComponent } from './pages/lanzamiento-convocatoria/lanzamiento-convocatoria.component';

const routes: Routes = [
  {
    path:'',
    component: LanzamientoConvocatoriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LanzamientoConvocatoriaRoutingModule { }
