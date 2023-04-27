import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

import { HomeBienvenidaRoutingModule } from './home-bienvenida-routing.module';
import { HomeBienvenidaComponent } from './pages/home-bienvenida/home-bienvenida.component';
<<<<<<< Updated upstream
=======
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
>>>>>>> Stashed changes


@NgModule({
  declarations: [
    HomeBienvenidaComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    HomeBienvenidaRoutingModule
  ],
  exports:[
    HomeBienvenidaComponent
  ]
})
export class HomeBienvenidaModule { }
