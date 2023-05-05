import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterDirectorRoutingModule } from './register-director-routing.module';
import { RegisterDirectorComponent } from './pages/register-director/register-director.component';


@NgModule({
  declarations: [
    RegisterDirectorComponent
  ],
  imports: [
    CommonModule,
    RegisterDirectorRoutingModule
  ],
  exports:[
    RegisterDirectorComponent
  ]
})
export class RegisterDirectorModule { }
