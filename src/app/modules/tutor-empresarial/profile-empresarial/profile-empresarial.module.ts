import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileEmpresarialRoutingModule } from './profile-empresarial-routing.module';
import { ProfileEmpresarialComponent } from './pages/profile-empresarial/profile-empresarial.component';


@NgModule({
  declarations: [
    ProfileEmpresarialComponent
  ],
  imports: [
    CommonModule,
    ProfileEmpresarialRoutingModule
  ],
  exports:[
    ProfileEmpresarialComponent
  ]
})
export class ProfileEmpresarialModule { }
