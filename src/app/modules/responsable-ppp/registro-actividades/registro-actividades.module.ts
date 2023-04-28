import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroActividadesRoutingModule } from './registro-actividades-routing.module';
import { RegistroActividadesComponent } from './pages/registro-actividades/registro-actividades.component';


@NgModule({
  declarations: [
    RegistroActividadesComponent
  ],
  imports: [
    CommonModule,
    RegistroActividadesRoutingModule
  ],
  exports:[
    RegistroActividadesComponent
  ]
})
export class RegistroActividadesModule { }
