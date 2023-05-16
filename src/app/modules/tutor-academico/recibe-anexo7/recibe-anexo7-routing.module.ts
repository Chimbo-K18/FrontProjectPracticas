import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecibeAnexo7Component } from './pages/recibe-anexo7/recibe-anexo7.component';

const routes: Routes = [
  {
    path: '',
    component: RecibeAnexo7Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecibeAnexo7RoutingModule { }
