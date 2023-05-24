import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaraprobadosComponent } from './pages/listaraprobados/listaraprobados.component';

const routes: Routes = [

  {
    path:'',
    component: ListaraprobadosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaraprobadosRoutingModule { }
