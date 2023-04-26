import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterResponsableRoutingModule } from './register-responsable-routing.module';
import { RegisterResponsableComponent } from './pages/register-responsable/register-responsable.component';

import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';

import {MatButtonModule} from '@angular/material/button';

import {MatDatepickerModule} from '@angular/material/datepicker';




@NgModule({
  declarations: [
    RegisterResponsableComponent
  ],
  imports: [
    CommonModule,
    RegisterResponsableRoutingModule,


    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule


  ],
  exports:[
    RegisterResponsableComponent
  ]
})
export class RegisterResponsableModule { }
