import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecibeenviaAnexo4Component } from './pages/recibeenvia-anexo4/recibeenvia-anexo4.component';

const routes: Routes = [
  {
    path: '',
    component: RecibeenviaAnexo4Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecibeenviaAnexo4RoutingModule { }
