import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoordinadorVinculacionRoutingModule } from './coordinador-vinculacion-routing.module';
import { WelcomeCoordVinculacionComponent } from './welcome-coord-vinculacion/welcome-coord-vinculacion.component';




import {MatStepperModule} from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    WelcomeCoordVinculacionComponent
  ],
  imports: [
    CommonModule,
    
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    MatButtonModule,

    

    CoordinadorVinculacionRoutingModule
  ]
})
export class CoordinadorVinculacionModule { }
