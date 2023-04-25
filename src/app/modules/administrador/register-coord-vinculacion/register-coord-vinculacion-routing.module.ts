import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterCoordVinculacionComponent } from './pages/register-coord-vinculacion/register-coord-vinculacion.component';

const routes: Routes = [

  {
    path: '',
    component: RegisterCoordVinculacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterCoordVinculacionRoutingModule { }
