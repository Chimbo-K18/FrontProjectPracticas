import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignaAcademicoComponent } from './pages/asigna-academico/asigna-academico.component';

const routes: Routes = [
  {
    path:'',
    component:AsignaAcademicoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsignaAcademicoRoutingModule { }
