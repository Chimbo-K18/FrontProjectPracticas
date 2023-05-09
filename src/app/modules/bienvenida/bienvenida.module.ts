import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BienvenidaRoutingModule } from './bienvenida-routing.module';
import { WelcomeBienvenidaComponent } from './welcome-bienvenida/welcome-bienvenida.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    WelcomeBienvenidaComponent
  ],
  imports: [
    CommonModule,
    BienvenidaRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class BienvenidaModule { }
