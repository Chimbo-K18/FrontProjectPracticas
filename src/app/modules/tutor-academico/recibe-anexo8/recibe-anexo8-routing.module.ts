import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecibeAnexo8Component } from '../../tutor-empresarial/recibe-anexo8/pages/recibe-anexo8/recibe-anexo8.component';

const routes: Routes = [
  {
    path: '',
    component: RecibeAnexo8Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecibeAnexo8RoutingModule { }
