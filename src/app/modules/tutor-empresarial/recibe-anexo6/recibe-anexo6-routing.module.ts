import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecibeAnexo6Component } from './pages/recibe-anexo6/recibe-anexo6.component';

const routes: Routes = [
  {
    path: '',
    component: RecibeAnexo6Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecibeAnexo6RoutingModule { }
