import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaAsignadosRoutingModule } from './lista-asignados-routing.module';
import { ListaAsignadosComponent } from './pages/lista-asignados/lista-asignados.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    ListaAsignadosComponent
  ],
  imports: [
    CommonModule,
    ListaAsignadosRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatTableModule
  ],
  exports: [
    ListaAsignadosComponent
  ]
})
export class ListaAsignadosModule { }
