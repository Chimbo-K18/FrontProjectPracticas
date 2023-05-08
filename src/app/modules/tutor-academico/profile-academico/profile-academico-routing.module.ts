import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileAcademicoComponent } from './pages/profile-academico/profile-academico.component';

const routes: Routes = [

  {
    path: '',
    component: ProfileAcademicoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileAcademicoRoutingModule { }
