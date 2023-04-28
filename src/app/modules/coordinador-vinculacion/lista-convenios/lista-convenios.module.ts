import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaConveniosRoutingModule } from './lista-convenios-routing.module';
import { ListaConveniosComponent } from './pages/lista-convenios/lista-convenios.component';


@NgModule({
  declarations: [
    ListaConveniosComponent
  ],
  imports: [
    CommonModule,
    ListaConveniosRoutingModule
  ]
})
export class ListaConveniosModule { }
