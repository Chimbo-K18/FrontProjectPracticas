import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileAcademicoRoutingModule } from './profile-academico-routing.module';
import { ProfileAcademicoComponent } from './pages/profile-academico/profile-academico.component';


@NgModule({
  declarations: [
    ProfileAcademicoComponent
  ],
  imports: [
    CommonModule,
    ProfileAcademicoRoutingModule
  ],
  exports:[
    ProfileAcademicoComponent
  ]
})
export class ProfileAcademicoModule { }
