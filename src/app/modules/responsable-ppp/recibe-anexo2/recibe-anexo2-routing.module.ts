import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecibeAnexo2Component } from './pages/recibe-anexo2/recibe-anexo2.component';

const routes: Routes = [
  {
    path:'',
    component:RecibeAnexo2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecibeAnexo2RoutingModule { }
