import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroEmpresaComponent } from './pages/registro-empresa/registro-empresa.component';

const routes: Routes = [
  {
    path: '',
    component: RegistroEmpresaComponent
   
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroEmpresaRoutingModule { }
