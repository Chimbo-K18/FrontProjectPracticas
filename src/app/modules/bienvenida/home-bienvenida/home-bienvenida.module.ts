import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeBienvenidaRoutingModule } from './home-bienvenida-routing.module';
import { HomeBienvenidaComponent } from './pages/home-bienvenida/home-bienvenida.component';
import {MatButtonModule} from '@angular/material/button';

import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    HomeBienvenidaComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    HomeBienvenidaRoutingModule
  ],
  exports:[
    HomeBienvenidaComponent
  ]
})
export class HomeBienvenidaModule { }
