import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileCoordRoutingModule } from './profile-coord-routing.module';
import { ProfileCoordComponent } from './pages/profile-coord/profile-coord.component';


@NgModule({
  declarations: [
    ProfileCoordComponent
  ],
  imports: [
    CommonModule,
    ProfileCoordRoutingModule
  ],
  exports:[
    ProfileCoordComponent
  ]
})
export class ProfileCoordModule { }
