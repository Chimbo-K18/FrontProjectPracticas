import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterResponsableRoutingModule } from './register-responsable-routing.module';
import { RegisterResponsableComponent } from './pages/register-responsable/register-responsable.component';


@NgModule({
  declarations: [
    RegisterResponsableComponent
  ],
  imports: [
    CommonModule,
    RegisterResponsableRoutingModule
  ],
  exports:[
    RegisterResponsableComponent
  ]
})
export class RegisterResponsableModule { }
