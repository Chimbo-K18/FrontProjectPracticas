import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaSoliRecibidasComponent } from './pages/lista-soli-recibidas/lista-soli-recibidas.component';

const routes: Routes = [

  {
    path: '',
    component: ListaSoliRecibidasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaSoliRecibidasRoutingModule { }
