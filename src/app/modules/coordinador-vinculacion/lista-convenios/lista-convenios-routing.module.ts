import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaConveniosComponent } from './pages/lista-convenios/lista-convenios.component';

const routes: Routes = [

  {

    path: '',
    component: ListaConveniosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaConveniosRoutingModule { }
