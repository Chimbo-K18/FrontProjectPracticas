import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecibeAnexo3Component } from './pages/recibe-anexo3/recibe-anexo3.component';

const routes: Routes = [
  {
    path: '',
    component: RecibeAnexo3Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecibeAnexo3RoutingModule { }
