import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterResponsableComponent } from './pages/register-responsable/register-responsable.component';

const routes: Routes = [

  {

    path: '',
    component: RegisterResponsableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterResponsableRoutingModule { }
