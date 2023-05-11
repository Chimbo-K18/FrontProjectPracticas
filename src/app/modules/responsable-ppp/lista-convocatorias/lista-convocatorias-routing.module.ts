import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaConvocatoriasComponent } from './pages/lista-convocatorias/lista-convocatorias.component';

const routes: Routes = [

  {
    path: '',
    component: ListaConvocatoriasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaConvocatoriasRoutingModule { }
