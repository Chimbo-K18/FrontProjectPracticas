import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroActividadesComponent } from './pages/registro-actividades/registro-actividades.component';

const routes: Routes = [

  {
    path:'',
    component: RegistroActividadesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroActividadesRoutingModule { }
