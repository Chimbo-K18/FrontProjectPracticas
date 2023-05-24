import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecibeAnexo5Component } from './pages/recibe-anexo5/recibe-anexo5.component';

const routes: Routes = [
  {
    path: '',
    component: RecibeAnexo5Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecibeAnexo5RoutingModule { }
