import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeBienvenidaRoutingModule } from './home-bienvenida-routing.module';
import { HomeBienvenidaComponent } from './pages/home-bienvenida/home-bienvenida.component';


@NgModule({
  declarations: [
    HomeBienvenidaComponent
  ],
  imports: [
    CommonModule,
    HomeBienvenidaRoutingModule
  ],
  exports:[
    HomeBienvenidaComponent
  ]
})
export class HomeBienvenidaModule { }
