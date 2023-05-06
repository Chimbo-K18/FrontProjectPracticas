import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterDirectorComponent } from './pages/register-director/register-director.component';

const routes: Routes = [

  {
    path:'',
    component: RegisterDirectorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterDirectorRoutingModule { }
