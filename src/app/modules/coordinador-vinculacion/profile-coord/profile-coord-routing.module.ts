import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileCoordComponent } from './pages/profile-coord/profile-coord.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileCoordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileCoordRoutingModule { }
