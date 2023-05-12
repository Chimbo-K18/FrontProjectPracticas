import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Anexo1Component } from './pages/anexo1/anexo1.component';

const routes: Routes = [
  {
    path: '',
    component: Anexo1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnvioAnexo1RoutingModule { }
