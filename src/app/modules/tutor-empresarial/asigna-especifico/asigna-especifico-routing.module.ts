import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignaEspecificoComponent } from './pages/asigna-especifico/asigna-especifico.component';

const routes: Routes = [
  {
    path: '',
    component: AsignaEspecificoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsignaEspecificoRoutingModule { }
