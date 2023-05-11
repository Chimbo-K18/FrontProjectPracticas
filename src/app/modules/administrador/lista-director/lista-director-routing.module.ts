import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaDirectorComponent } from './pages/lista-director/lista-director.component';

const routes: Routes = [
  {
    path:'',
    component: ListaDirectorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaDirectorRoutingModule { }
