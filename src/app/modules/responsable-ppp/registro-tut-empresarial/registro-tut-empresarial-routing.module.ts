import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroTutEmpresarialComponent } from './pages/registro-tut-empresarial/registro-tut-empresarial.component';

const routes: Routes = [

  {
    path: '',
    component: RegistroTutEmpresarialComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroTutEmpresarialRoutingModule { }
