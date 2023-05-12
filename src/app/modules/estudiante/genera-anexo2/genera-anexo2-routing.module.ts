import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneraAnexo2Component } from './pages/genera-anexo2/genera-anexo2.component';

const routes: Routes = [
  {
    path: '',
    component: GeneraAnexo2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneraAnexo2RoutingModule { }
