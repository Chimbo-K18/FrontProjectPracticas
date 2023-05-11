import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCoordComponent } from './pages/lista-coord/lista-coord.component';

const routes: Routes = [
  {
    path:'',
    component: ListaCoordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaCoordRoutingModule { }
