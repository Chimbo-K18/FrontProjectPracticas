import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileDirectorComponent } from './pages/profile-director/profile-director.component';

const routes: Routes = [

  {
    path: '',
    component: ProfileDirectorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileDirectorRoutingModule { }
