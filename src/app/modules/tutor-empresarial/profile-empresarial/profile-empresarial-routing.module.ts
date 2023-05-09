import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileEmpresarialComponent } from './pages/profile-empresarial/profile-empresarial.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileEmpresarialComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileEmpresarialRoutingModule { }
