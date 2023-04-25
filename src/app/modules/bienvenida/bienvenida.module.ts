import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BienvenidaRoutingModule } from './bienvenida-routing.module';
import { WelcomeBienvenidaComponent } from './welcome-bienvenida/welcome-bienvenida.component';


@NgModule({
  declarations: [
    WelcomeBienvenidaComponent
  ],
  imports: [
    CommonModule,
    BienvenidaRoutingModule
  ]
})
export class BienvenidaModule { }
