import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecibeAnexo1Component } from '../../responsable-ppp/recibe-anexo1/pages/recibe-anexo1/recibe-anexo1.component';

const routes: Routes = [
  {
    path: '',
    component: RecibeAnexo1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecibeAnexo1RoutingModule { }
