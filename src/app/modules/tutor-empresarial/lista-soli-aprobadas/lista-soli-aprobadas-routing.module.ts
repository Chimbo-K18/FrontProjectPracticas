import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaSoliAprobadasComponent } from './pages/lista-soli-aprobadas/lista-soli-aprobadas.component';

const routes: Routes = [
  {
    path: '',
    component: ListaSoliAprobadasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaSoliAprobadasRoutingModule { }
