import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaEstudiantesAprobadosRoutingModule } from './lista-estudiantes-aprobados-routing.module';
import { ListaEstudiantesAprobadosComponent } from './pages/lista-estudiantes-aprobados/lista-estudiantes-aprobados.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    ListaEstudiantesAprobadosComponent
  ],
  imports: [
    CommonModule,
    ListaEstudiantesAprobadosRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatTableModule
  ],
  exports:[
    ListaEstudiantesAprobadosComponent
  ]
})
export class ListaEstudiantesAprobadosModule { }
