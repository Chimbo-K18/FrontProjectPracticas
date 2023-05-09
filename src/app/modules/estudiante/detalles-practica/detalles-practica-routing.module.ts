import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesPracticaComponent } from './pages/detalles-practica/detalles-practica.component';

const routes: Routes = [
  {
    path:'',
    component: DetallesPracticaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetallesPracticaRoutingModule { }
