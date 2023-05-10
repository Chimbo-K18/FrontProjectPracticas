import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaResponsableComponent } from './pages/lista-responsable/lista-responsable.component';

const routes: Routes = [
  {
    path:'',
    component: ListaResponsableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaResponsableRoutingModule { }
