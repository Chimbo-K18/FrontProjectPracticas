import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { WelcomeAdministradorComponent } from './welcome-administrador/welcome-administrador.component';
import { SharedModule } from 'src/app/shared/shared.module';


import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    WelcomeAdministradorComponent
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    SharedModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule

  ]
})
export class AdministradorModule { }
