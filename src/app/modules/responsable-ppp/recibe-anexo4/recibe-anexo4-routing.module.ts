import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecibeAnexo4Component } from './pages/recibe-anexo4/recibe-anexo4.component';

const routes: Routes = [
  {
    path: '',
    component: RecibeAnexo4Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecibeAnexo4RoutingModule { }
