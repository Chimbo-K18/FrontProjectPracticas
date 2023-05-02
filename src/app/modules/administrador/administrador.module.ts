import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { WelcomeAdministradorComponent } from './welcome-administrador/welcome-administrador.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    WelcomeAdministradorComponent
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class AdministradorModule { }
