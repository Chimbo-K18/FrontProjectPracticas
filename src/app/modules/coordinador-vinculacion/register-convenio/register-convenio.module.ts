import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterConvenioRoutingModule } from './register-convenio-routing.module';
import { RegisterConvenioComponent } from './pages/register-convenio/register-convenio.component';


@NgModule({
  declarations: [
    RegisterConvenioComponent
  ],
  imports: [
    CommonModule,
    RegisterConvenioRoutingModule
  ],
  exports:[
    RegisterConvenioComponent
  ]
})
export class RegisterConvenioModule { }
