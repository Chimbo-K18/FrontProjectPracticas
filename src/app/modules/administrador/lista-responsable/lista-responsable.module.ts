import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaResponsableRoutingModule } from './lista-responsable-routing.module';
import { ListaResponsableComponent } from './pages/lista-responsable/lista-responsable.component';


@NgModule({
  declarations: [
    ListaResponsableComponent
  ],
  imports: [
    CommonModule,
    ListaResponsableRoutingModule
  ],
  exports:[
    ListaResponsableComponent
  ]
})
export class ListaResponsableModule { }
