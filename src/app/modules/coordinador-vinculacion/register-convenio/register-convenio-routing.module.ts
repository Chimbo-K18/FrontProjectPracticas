import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterConvenioComponent } from './pages/register-convenio/register-convenio.component';

const routes: Routes = [

  {

    path: '',
    component: RegisterConvenioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterConvenioRoutingModule { }
