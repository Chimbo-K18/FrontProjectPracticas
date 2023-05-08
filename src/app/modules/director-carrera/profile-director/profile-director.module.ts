import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileDirectorRoutingModule } from './profile-director-routing.module';
import { ProfileDirectorComponent } from './pages/profile-director/profile-director.component';


@NgModule({
  declarations: [
    ProfileDirectorComponent
  ],
  imports: [
    CommonModule,
    ProfileDirectorRoutingModule
  ],
  exports:[
    ProfileDirectorComponent
  ]
})
export class ProfileDirectorModule { }
