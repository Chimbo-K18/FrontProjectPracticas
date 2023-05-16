import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneraAnexo6Component } from './pages/genera-anexo6/genera-anexo6.component';

const routes: Routes = [
  {
    path: '',
    component: GeneraAnexo6Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneraAnexo6RoutingModule { }
