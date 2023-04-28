import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaSoliEnviadasComponent } from './pages/lista-soli-enviadas/lista-soli-enviadas.component';

const routes: Routes = [
  {
    path:'',
    component: ListaSoliEnviadasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaSoliEnviadasRoutingModule { }
