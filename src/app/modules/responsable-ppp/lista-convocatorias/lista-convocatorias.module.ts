import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaConvocatoriasRoutingModule } from './lista-convocatorias-routing.module';
import { ListaConvocatoriasComponent } from './pages/lista-convocatorias/lista-convocatorias.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    ListaConvocatoriasComponent
  ],
  imports: [
    CommonModule,
    ListaConvocatoriasRoutingModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
  ],
  exports:[
    ListaConvocatoriasComponent
  ]
})
export class ListaConvocatoriasModule { }
