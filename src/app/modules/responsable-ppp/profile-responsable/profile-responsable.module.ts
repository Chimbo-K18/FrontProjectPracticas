import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileResponsableRoutingModule } from './profile-responsable-routing.module';
import { ProfileResponsableComponent } from './pages/profile-responsable/profile-responsable.component';


@NgModule({
  declarations: [
    ProfileResponsableComponent
  ],
  imports: [
    CommonModule,
    ProfileResponsableRoutingModule
  ],
  exports:[
    ProfileResponsableComponent
  ]
})
export class ProfileResponsableModule { }
