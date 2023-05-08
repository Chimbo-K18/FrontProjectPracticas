import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileResponsableComponent } from './pages/profile-responsable/profile-responsable.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileResponsableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileResponsableRoutingModule { }
