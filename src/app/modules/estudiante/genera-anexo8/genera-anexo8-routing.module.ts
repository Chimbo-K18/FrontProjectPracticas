import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneraAnexo8Component } from './pages/genera-anexo8/genera-anexo8.component';

const routes: Routes = [
  {
    path: '',
    component: GeneraAnexo8Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneraAnexo8RoutingModule { }
