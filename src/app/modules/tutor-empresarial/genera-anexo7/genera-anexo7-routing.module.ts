import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneraAnexo7Component } from './pages/genera-anexo7/genera-anexo7.component';

const routes: Routes = [
  {
    path: '',
    component: GeneraAnexo7Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneraAnexo7RoutingModule { }
