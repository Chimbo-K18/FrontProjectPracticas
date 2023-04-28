import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterConvenioRoutingModule } from './register-convenio-routing.module';
import { RegisterConvenioComponent } from './pages/register-convenio/register-convenio.component';

//Importaciones clave
import {MatStepperModule} from '@angular/material/stepper';

import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    RegisterConvenioComponent
  ],
  imports: [
    CommonModule,

    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    MatButtonModule,

    RegisterConvenioRoutingModule
  ],
  exports:[
    RegisterConvenioComponent
  ]
})
export class RegisterConvenioModule { }
