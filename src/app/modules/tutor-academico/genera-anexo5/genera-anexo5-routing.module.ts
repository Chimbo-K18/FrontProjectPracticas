import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneraAnexo5Component } from './pages/genera-anexo5/genera-anexo5.component';

const routes: Routes = [
  {
    path: '',
    component: GeneraAnexo5Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneraAnexo5RoutingModule { }
