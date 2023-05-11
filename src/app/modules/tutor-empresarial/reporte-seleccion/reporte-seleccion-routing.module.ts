import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReporteSeleccionComponent } from './pages/reporte-seleccion/reporte-seleccion.component';

const routes: Routes = [
  {
    path: '',
    component: ReporteSeleccionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReporteSeleccionRoutingModule { }
