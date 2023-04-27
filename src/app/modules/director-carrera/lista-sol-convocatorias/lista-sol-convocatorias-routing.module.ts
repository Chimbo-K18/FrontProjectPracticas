import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaSolConvocatoriasComponent } from './pages/lista-sol-convocatorias/lista-sol-convocatorias.component';

const routes: Routes = [

  {

    path:'',
    component: ListaSolConvocatoriasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaSolConvocatoriasRoutingModule { }
