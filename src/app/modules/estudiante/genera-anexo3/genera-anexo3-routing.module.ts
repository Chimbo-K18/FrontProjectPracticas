import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneraAnexo3Component } from './pages/genera-anexo3/genera-anexo3.component';

const routes: Routes = [
  {
    path: '',
    component: GeneraAnexo3Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneraAnexo3RoutingModule { }
